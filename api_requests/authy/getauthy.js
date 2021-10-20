const twofactor = require("node-2fa");

module.exports = {
	path: '/api/authy',
	method: 'get',
	run: async (req, conns , res , client, bots, gg) => {

let { headers } = req

if(!headers.authorization) return res.json({errors: ["authorization"], message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) return res.json({status:false , message: "No Login"})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
if(rows[0].authy !== 'none' && rows[0].authy) return res.status(403).json({errors: ['data'], message: '2fa is already enable'}) 

const newSecret = twofactor.generateSecret({ name: "GROUP", account: rows[0].gmail });

conns.query(`Update profile set authy = '${newSecret.secret}' Where nu = "${rows[0].nu}"`) 

res.status(200).json({errors: [], message: 'success', code: newSecret.secret})

})

  }
}
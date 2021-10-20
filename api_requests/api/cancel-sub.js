
module.exports = {
	path: '/api/cancel-sub/',
	method: 'get',
	run: async (req, conns , res , client, bots, gg, con, wss, emojis) => {

if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
  if(rows.length < 1) return res.json({status: false, message: "No Login"})
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From badge Where id = '${rows[0].id}'`,(err , row) => {
let nitro = false
let badges = []
for(const data of row) {
if(data.badge === "Nitro Classic") nitro = true
if(data.badge === "Nitro Gaming") nitro = true
badges.unshift(data.badge)
}
if(nitro === false) return res.json({status: false, message: "No Sub"})
 conns.query(`Delete From badge Where badge = "Nitro Classic"`)
return res.json({status: true, message: "success"})
})
})
  }
}
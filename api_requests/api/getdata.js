const fs = require('fs')
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))

module.exports = {
	path: '/api/getdata',
	method: 'get',
	run: async (req, conns , res , client, bots) => {
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) {
res.json({status: false, message: "No Login"})
}else{
res.json({status: true, message: "success",username: rows[0].username, discriminator: rows[0].discriminator, id: rows[0].id, token: rows[0].token, bot: rows[0].bot, channel: rows[0].channel})
}
})
  }
}
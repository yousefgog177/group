const fs = require('fs')
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))

module.exports = {
	path: '/api/data/@me',
	method: 'get',
	run: async (req, conns , res , client, bots, gg) => {
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) {
res.json({status: false, message: "No Login"})
}else{
conns.query(`Select * From bots Where id = '${rows[0].id}'`,(err , ro) => {
conns.query(`Select * From badge Where id = '${rows[0].id}'`,(err , row) => {
var nitro = false
let bots = []
let num = 0
let badges = []
for(const data of row) {
if(data.badge === "Nitro Gaming") nitro = true 
if(data.badge === "Nitro Classic") nitro = true 
badges.unshift(data.badge)
}
for(const data of ro) {
num = num + 1
bots.unshift({"username": data.name, "id": data.idbot, "token": data.token, count: num})
}
let authy = true
if(rows[0].authy === 'none' || !rows[0].authy) authy = false
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg, token: rows[0].token})
res.json({status: true, message: "success",locked: con["username-locked"].includes(rows[0].username), authy: authy,username: rows[0].username, discriminator: rows[0].discriminator, id: rows[0].id, nitro: nitro, token: rows[0].token, password: "xxxxxxxx", email: "xxxxxxxx",badge: badges, bot: rows[0].bot, channel: rows[0].channel, bots: bots, bot_count: num})
})
})
}
})
  }
}
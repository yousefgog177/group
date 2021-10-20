const randomIdGenerator = require('random-id-generator')
module.exports = {
	path: '/api/register-bot/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss) => {
const fs = require('fs')
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))

let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "name", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1){
res.json({status: false, message: "No Login"})
}else{
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") res.json({status: false, message: gg})
conns.query(`Select * From bots Where id = '${rows[0].id}'`,(err , ro) => {
let num = 0
for(const datas of ro) {
num = num + 1
}
if(num > 40) return res.json({status: true, message: "You Have Max Create Bot!"})
   var p = Math.floor(Math.random() * 9) + 1;
   var pp = Math.floor(Math.random() * 9) + 1;
   var ppp = Math.floor(Math.random() * 9) + 1;
   var pppp = Math.floor(Math.random() * 9) + 1;
   var o = Math.floor(Math.random() * 9) + 1;
   var oo = Math.floor(Math.random() * 9) + 1;
   var ooo = Math.floor(Math.random() * 9) + 1;
   var oooo = Math.floor(Math.random() * 9) + 1;
   var ooooo = Math.floor(Math.random() * 9) + 1;
   var oooooo = Math.floor(Math.random() * 9) + 1;
   var ooooooo = Math.floor(Math.random() * 9) + 1;
   var oooooooo = Math.floor(Math.random() * 9) + 1;
   var t = Math.floor(Math.random() * 9) + 1;
   var tt = Math.floor(Math.random() * 9) + 1;
   var ttt = Math.floor(Math.random() * 9) + 1;
   var tttt = Math.floor(Math.random() * 9) + 1;
var tag = `${t}${tt}${ttt}${tttt}`
let id = 0
if(con["username-locked"].includes(data.name)) return res.json({status: false, message: "This Name Has Already use"})
conns.query(`Select * From ID Where nu = '1'`,(err , ids) => {
if(ids.length < 1) {
id = 1
}else{
id = ids[0].num
conns.query(`Update ID set num = "${Math.floor(ids[0].num + 1)}" Where nu = "${ids[0].nu}"`)
}
let token = randomIdGenerator(62);
let pass = randomIdGenerator(12);
conns.query(`INSERT INTO bots (nu, id, name, idbot, token, tag) VALUES ('0', '${rows[0].id}', '${data.name}', '${id}', 'Nyz${token}', '${tag}');`)
conns.query(`INSERT INTO channels (nu, channel, id, permission) VALUES ('0', 'general', '${id}', 'everyone');`)
conns.query(`INSERT INTO profile (nu, id, username, discriminator, gmail, password, ip, bot, token, channel, blacklist, authy) VALUES ('0', '${id}', '${data.name}', '${tag}', 'bot@email.com', '${pass}', 'none', 'true', 'Nyz${token}', 'general', 'false', 'none');`)
res.json({status: true, message: "success", token: "Nyz" + token, id: id, username: `${data.name}#${tag}`})
})
})
}          
})
  }
}
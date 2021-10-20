const randomIdGenerator = require('random-id-generator')
const {verify} = require('hcaptcha');

module.exports = {
	path: '/api/register-account/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, con) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "name", "value": null},
{"key": "email", "value": null},
{"key": "password", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(data.name.includes("@")) return res.json({status: false, message: "Remove @ and again"})
conns.query(`Select * From profile Where gmail = '${data.email}'`,(err , row) => {
if(row.length < 1) {
/*if(!data.captcha) return res.status(403).json({errors: ['body'], message: 'Request captcha'})
const secret = '0x51D3Fc7f7458c0Db815C6703F3f4570605f50686';
const token = data.captcha;
verify(secret, token)
  .then((datas) =>{
if(datas.success === false) return res.status(403).json({errors: ['captcha'], message: 'captcha wrong'})*/
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
conns.query(`Select * From profile Where discriminator = '${tag}' and username = '${data.nameًُ}'`,(err , kk) => {
if(kk.length < 1){
conns.query(`Select * From ID Where nu = '1'`,(err , ids) => {
if(ids.length < 1) {
id = 1
}else{
id = ids[0].num
conns.query(`Update ID set num = "${Math.floor(ids[0].num + 1)}" Where nu = "${ids[0].nu}"`)
}
let token = randomIdGenerator(62);
for(const dat of row){
conns.query(`Update profile set ip = "none" Where nu = "${dat.nu}"`)
}
conns.query(`INSERT INTO channels (nu, channel, id, permission) VALUES ('0', 'general', '${id}', 'everyone');`)
conns.query(`INSERT INTO profile (nu, id, username, discriminator, gmail, password, ip, bot, token, channel, blacklist, authy) VALUES ('0', '${id}', '${data.name}', '${tag}', '${data.email}', '${data.password}', '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', 'Nyz${token}', 'general', 'false', 'none');`)
res.json({status: true, message: "success", token: "Nyz" + token})
})
}else{
if(!con["username-locked"].includes(data.name)) con["username-locked"].unshift(data.name)
res.json({status: true, message: "This Username has already use."})
}
//})
})
}else{
res.json({status: true, message: "Gmail Has already register"})
}//473411
})
  }
}
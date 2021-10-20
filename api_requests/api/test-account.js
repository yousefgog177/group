const twofactor = require("node-2fa");
module.exports = {
	path: '/api/test-account/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, con) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "email", "value": null},
{"key": "password", "value": null},
{"key": "type", "value": null},
{"key": "token", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(data.type === 1){
conns.query(`Select * From profile Where gmail = '${data.email}'`,(err , rows) => {
if(rows.length < 1 ) {
res.json({status: true, message: "Gmail Has not defind"})
}else{
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].password !== data.password) return res.json({status: true, message: "Wrong Password"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
if(rows[0].authy !== 'none' && rows[0].authy && !data.code) return res.status(403).json({errors: ['authy'], message: 'request authy'})
if(rows[0].authy !== 'none' && rows[0].authy && data.code){
//delta
let code = twofactor.verifyToken(rows[0].authy, data.code);
if(!code || code.delta !== 0) return res.status(403).json({errors: ['authy'], message: 'Wrong Code'})
}
const {verify} = require('hcaptcha');
if(!data.captcha) return res.status(403).json({errors: ['body'], message: 'Request captcha'})
const secret = '0x51D3Fc7f7458c0Db815C6703F3f4570605f50686';
const token = data.captcha;
verify(secret, token)
  .then((datas) =>{
if(datas.success === false) return res.status(403).json({errors: ['captcha'], message: 'captcha wrong'})
conns.query(`Update profile set ip = "${req.headers["cookie"]}" Where nu = "${rows[0].nu}"`)
let user = []
conns.query(`Select * From profile`,(err , rows) => {
for(const data of rows){
var bots = false
if(data.bot === 'true') bots = true
user.unshift({
username: data.username,
discriminator: data.discriminator,
tag: data.discriminator,
id: data.id,
bot: bots,
channel: data.channel
})
}
return res.json({status: true, message: "Done Login", users: user, token: rows[0].token})
})
})
}
        
})
}
if(data.type === 2){
conns.query(`Select * From profile Where token = '${data.token}'`,(err , rows) => {
if(rows.length < 1 ) {
res.json({status: true, message: "Token Has not defind"})
}else{
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From profile Where ip = '${req.headers["cookie"]}'`,(err , row) => {
for(const dat of row) {
if(dat.nu !== rows[0].nu) conns.query(`Update profile set ip = "none" Where nu = "${dat.nu}"`)
}
})
conns.query(`Update profile set ip = "${req.headers["cookie"]}" Where nu = "${rows[0].nu}"`)
let user = []
conns.query(`Select * From profile`,(err , rowss) => {
for(const data of rowss){
var bots = false
if(data.bot === 'true') bots = true
user.unshift({
username: data.username,
discriminator: data.discriminator,
tag: data.discriminator,
id: data.id,
bot: bots,
channel: data.channel
})
}
conns.query(`Select * From channels Where id = '${rows[0].id}'`,(err , rowa) => {

let channels = []
for(const data of rowa) channels.unshift(data.channel)
return res.json({status: true, message: "Done Login", users: user, data: {
username: rows[0].username,
discriminator: rows[0].discriminator,
tag: rows[0].discriminator,
id: rows[0].id,
bot: Boolean(rows[0].bot),
channel: rows[0].channel
},
channels:channels

})
})
})
}
})
}
  }
}
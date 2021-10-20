
module.exports = {
	path: '/api/edit-name/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss) => {
const fs = require('fs')
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "name", "value": null},
{"key": "type", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
let { body , headers} = req
if(con["username-locked"].includes(data.name)) return res.status(401).json({errors: ['data'], message: "This Name Has Locked"})
if(data.type === 3){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1) return res.json({status: false, message: "No Login"})
if(rows[0].bot === 'false' || rows[0].bot === false) return res.json({status: false, message: "Just Bot Can Edit this type"})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
if(data.name.length < 2) return res.json({status: true, message: "Less 2 Max 32"})
if(data.name.length > 32) return res.json({status: true, message: "Less 2 Max 32"})
conns.query(`Select * From profile Where username = '${data.name}' and discriminator = '${rows[0].discriminator}'`,(err , k) => {
if(k.length < 1){
conns.query(`Update profile set username = "${data.name}" Where nu = "${rows[0].nu}"`)
res.json({status: true, message: "Done"})
}else{
return res.json({status: false, message: "This Name has already use"})
}
})
})
}
if(data.type === 1){
if(!data.sure) return res.status(403).json({errors: ['body'], message: "Request Body"})
if(!data.password) return res.status(403).json({errors: ["body"], message: "Request Body Password"})
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1) return res.json({status: false, message: "No Login"})
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: true, message: bots})
if(rows[0].password !== body.password) return res.json({status: true, message: "Worng Password"})
if(data.name.length < 2) return res.json({status: true, message: "Less 2 Max 32"})
if(data.name.length > 32) return res.json({status: true, message: "Less 2 Max 32"})
const twofactor = require("node-2fa");

if(rows[0].authy !== 'none' && rows[0].authy && !data.code && body.sure === 1) return res.status(403).json({errors: ['authy'], message: 'request authy'})
if(rows[0].authy !== 'none' && rows[0].authy && data.code && body.sure === 1){
//delta
let code = twofactor.verifyToken(rows[0].authy, data.code);
console.log(!code)
if(!code || code.delta !== 0) return res.status(403).json({errors: ['authy'], message: 'Wrong Code'})
}
conns.query(`Select * From profile Where username = '${data.name}' and discriminator = '${rows[0].discriminator}'`,(err , k) => {
if(k.length < 1){
if(body.sure === 1) conns.query(`Update profile set username = "${data.name}" Where nu = "${rows[0].nu}"`)
if(body.sure !== 1) return res.json({status: true, message: "Request Sure 1"})
res.json({status: true, message: "Done"})
}else{
return res.json({status: false, message: "This Name has already use"})
}
})
})
}
if(data.type === 2){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , row) => {
if(row.length < 1) return res.json({status: false, message: "No Login"})
if(row[0].blacklist === "true" || row[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(row[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From bots Where idbot = '${data.idbot}' and id = '${row[0].id}'`,(err , rows) => {
if(rows.length < 1) return res.json({status: true, message: "Bot Is Not Find"})
if(data.name.length < 2) return res.json({status: true, message: "Less 2 Max 32"})
if(data.name.length > 32) return res.json({status: true, message: "Less 2 Max 32"})
conns.query(`Select * From profile Where username = '${data.name}' and discriminator = '${row[0].discriminator}'`,(err , k) => {
if(k.length < 1){
conns.query(`Update profile set username = "${data.name}" Where id = "${data.idbot}"`)
conns.query(`Update bots set name = "${data.name}" Where idbot = "${data.idbot}"`)
res.json({status: true, message: "Done"})
}else{
return res.json({status: false, message: "This Name has already use"})
}
})
})
})
}
  }
}
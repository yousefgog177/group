
module.exports = {
	path: '/api/edit-pass/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss) => {
const fs = require('fs')
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "password", "value": null},
{"key": "oldpassword", "value": null}

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
  if(rows.length < 1) return res.json({status: false, message: "No Login"})
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: "Bots Not Have Password to edit"})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
if(rows[0].password !== data.oldpassword) return res.json({status: true, message: "Worng Password"})
const twofactor = require("node-2fa");

if(rows[0].authy !== 'none' && rows[0].authy && !data.code) return res.status(403).json({errors: ['authy'], message: 'request authy'})
if(rows[0].authy !== 'none' && rows[0].authy && data.code){
//delta
let code = twofactor.verifyToken(rows[0].authy, data.code);
console.log(!code)
if(!code || code.delta !== 0) return res.status(403).json({errors: ['authy'], message: 'Wrong Code'})
}
conns.query(`Update profile set password = "${data.password}" Where nu = "${rows[0].nu}"`)
res.json({status: true, message: "Done"})
})
  }
}
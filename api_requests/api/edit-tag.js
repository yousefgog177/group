const replaceall = require('replaceall')
module.exports = {
	path: '/api/edit-tag/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss) => {
const fs = require('fs')
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "password", "value": null},
{"key": "tag", "value": null}

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
conns.query(`Select * From profile Where discriminator = '${data.tag}' and username = '${rows[0].username}'`,(err , k) => {
if(k.length < 1){
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})

conns.query(`Select * From badge Where id = '${rows[0].id}'`,(err , row) => {
if(rows[0].password !== data.password) return res.json({status: true, message: "Worng Password"})
let newtag = replaceall(' ', '0', data.tag)
if(newtag.length === 1) newtag = "000" + newtag
if(newtag.length === 2) newtag = "00" + newtag
if(newtag.length === 3) newtag = "0" + newtag
if(newtag.length < 4) return res.json({status: true, message: "Less 4 Max 4"})
if(newtag.length > 4) return res.json({status: true, message: "Less 4 Max 4"})
if(newtag === "0000") return res.json({status: true, message: "int value should be greater than or equal to 1"})
if(isNaN(newtag)) return res.json({status: true , message: "Only Number"})
if(newtag.includes("e")) return res.json({status: true , message: "Only Number"})
if(newtag.includes("+")) return res.json({status: true , message: "Only Number"})
if(newtag.includes(".")) return res.json({status: true , message: "Only Number"})
const twofactor = require("node-2fa");

if(rows[0].authy !== 'none' && rows[0].authy && !data.code) return res.status(403).json({errors: ['authy'], message: 'request authy'})
if(rows[0].authy !== 'none' && rows[0].authy && data.code){
//delta
let code = twofactor.verifyToken(rows[0].authy, data.code);
console.log(!code)
if(!code || code.delta !== 0) return res.status(403).json({errors: ['authy'], message: 'Wrong Code'})
}
let nitro = false
let badges = []
for(const data of row) {
if(data.badge === "Nitro Classic") nitro = true
if(data.badge === "Nitro Gaming") nitro = true
badges.unshift(data.badge)
}
if(nitro === false && !con["username-locked"].includes(rows[0].username)) return res.json({status: false, message: "Only Nitro"})
conns.query(`Update profile set discriminator = "${newtag}" Where nu = "${rows[0].nu}"`)
res.json({status: true, message: "Done"})
})
}else{
return res.json({status: false, message: "This name has already use"})
}
})
})
  }
}
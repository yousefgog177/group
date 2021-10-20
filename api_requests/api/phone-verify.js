module.exports = {
	path: '/api/phone-verify/true/',
	method: 'post',
	run: async (req, conns , res , client, bot, gg) => {
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "id", "value": null},
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
if(req.headers.authorization !== "NONE-APIGROUPSTAFF41371755") return res.json({status: false, message: "API : Wrong authorization"})
conns.query(`Select * From profile Where id = '${data.id}'`,(err , rows) => {

if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Update profile set blacklist = 'none' Where nu = "${rows[0].nu}"`) 
res.json({status: true, message: "Blacklist Done!"})
})
  }
}
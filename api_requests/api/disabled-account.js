
module.exports = {
	path: '/api/disbled/true/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg) => {
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
conns.query(`Select * From profile Where id = '${data.id}'`,(err , rows) => {
if(rows.length < 1 && req.headers.authorization === "NONE-APIGROUPSTAFF41371755") {
return res.json({status: false, message: "ID is Not Find"})
}
let ok = 0
if(req.headers.authorization !== "NONE-APIGROUPSTAFF41371755") ok = ok + 1
if(req.headers.authorization !== rows[0].token) ok = ok + 1
if(ok === 2) return res.json({status: false, message: "API : Wrong authorization"})
conns.query(`Update profile set blacklist = 'gg' Where nu = "${rows[0].nu}"`)
conns.query(`Update profile set ip = 'none' Where nu = "${rows[0].nu}"`) 
res.json({status: true, message: "Blacklist Done!"})
})
  }
}
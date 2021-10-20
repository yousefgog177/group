
module.exports = {
	path: '/api/confirm/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "confirm", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , row) => {
if(row.length < 1 ) {
return res.json({status: true, message: "No Login"})
}else{
if(row[0].bot === "true" || row[0].bot === true) return res.json({status: false, message: bots})
if(row[0].blacklist === "true" || row[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(row[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From confirm Where confirm = '${data.confirm}'`,(err , rows) => {
if(rows.length < 1) return res.json({status: true, message: "This code has not find!"})
if(row[0].id !== rows[0].id) return res.json({status: true, message: "This Code not for you!"})
if(rows[0].done === "true") return res.json({status: true, message: "This has already confirmed"})
conns.query(`Update confirm set done = 'true' Where nu = "${rows[0].nu}"`) 
res.json({status: true, message: "success"})
})
}
})
  }
}

module.exports = {
	path: '/api/OAuth?/',
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
if(row[0].blacklist === "true" || row[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(row[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From confirm Where confirm = '${data.confirm}'`,(err , rows) => {
if(rows.length < 1) return res.json({status: true, message: "This code has not find!"})
if(rows[0].done === "true" || rows[0].done === true){
conns.query(`Select * From profile Where id = '${rows[0].id}'`,(err , ro) => {
if(ro.length < 1 ) {
return res.json({status: true, message: false})
}else{
return res.json({status: true, message: true, token: ro[0].token, user:{id: ro[0].id, discriminator: ro[0].discriminator, tag: ro[0].discriminator, username: ro[0].username}})
}
})
}else{
return res.json({status: true, message: false})
}
})
}
})
  }
}
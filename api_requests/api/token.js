
module.exports = {
	path: '/api/token/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, con) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "user", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(data.user === "@me"){
conns.query(`Select * From profile Where ip = '${req.headers["cookie"]}'`,(err , rows) => {
if(rows.length < 1 ) {
res.json({status: false, message: "No Login"})
}else{
res.json({status: true, message: "success", token: rows[0].token})

}
})
}
  if(data.user !== "@me"){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where id = '${data.user}'`,(err , rows) => {
if(rows.length < 1 ) {
res.json({status: false, message: "No Login"})
}else{
if(req.headers.authorization !== rows[0].password) return res.json({status: false, message: "API : Wrong authorization"})
res.json({status: true, message: "success", token: rows[0].token})
}
})
}
  }
}
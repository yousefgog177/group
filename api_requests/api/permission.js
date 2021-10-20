
module.exports = {
	path: '/api/permission/',
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
conns.query(`Select * From profile Where id = '${data.user}'`,(err , gg) => {

if(gg.length < 1) return res.json({status: true, message: "User is Not Find"})
conns.query(`Select * From channels Where id = '${gg[0].id}' and channel = '${gg[0].channel}'`,(err , a7) => {
let permission = []
for(const dat of a7) permission.unshift(dat.permission)
res.json(permission)
})
})
  }
}
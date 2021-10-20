
module.exports = {
	path: '/api/delete-bot/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, con) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "id", "value": null},
{"key": "type", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(data.type === 2){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1){
res.json({status: false, message: "No Login"})
}else{
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From bots Where id = '${rows[0].id}'`,(err , ro) => {
let bots = false
for(const dat of ro) {
if(dat.idbot === data.id) bots = true
}
if(bots === false) return res.json({status: false, message: "You Not Owner this bot!"})
conns.query(`Delete From profile Where id = "${data.id}"`)
conns.query(`Delete From bots Where idbot = "${data.id}"`)
res.json({status: true, message: "success"})
})
}
})
}
if(data.type === 1){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1){
res.json({status: false, message: "No Login"})
}else{
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From bots Where id = '${rows[0].id}'`,(err , ro) => {
let bots = []
for(const dat of ro) {
bots.unshift(dat.id)
}
if(!bots.includes(data.id)) return res.json({status: false, message: "You Not Owner this bot!"})
conns.query(`Delete From profile Where id = "${data.id}"`)
conns.query(`Delete From idbots Where idbot = "${data.id}"`)
res.json({status: true, message: "success"})
})
}
})
}
  }
}
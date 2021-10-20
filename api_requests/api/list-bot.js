
module.exports = {
	path: '/api/cancel/',
	method: 'get',
	run: async (req, conns , res , client, bots, gg, con) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "type", "value": null},
{"key": "id", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(data.type === 3){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1){
res.json({status: false, message: "No Login"})
}else{
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From bots Where idbot = '${data.id}' and id = '${rows[0].id}'`,(err , ro) => {
if(ro.length < 1) return res.json({status: true, token: "failed", user:{username: "failed", discriminator: "failed", tag: "failed", id: "failed"}})
res.json({token: ro[0].token, user:{username: ro[0].name, discriminator: ro[0].tag, tag: ro[0].tag, id: ro[0].idbot}})
})
}
})
}
if(data.type === 2){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1){
res.json({status: false, message: "No Login"})
}else{
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From bots Where id = '${rows[0].id}'`,(err , ro) => {
let bots = []
for(const dat of ro) {
bots.unshift({token: dat.token, user:{username: dat.name, discriminator: dat.tag, tag: dat.tag, id: dat.idbot}})
}
res.json(bots)
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
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") res.json({status: false, message: gg})
conns.query(`Select * From bots Where id = '${rows[0].id}'`,(err , ro) => {
let bots = []
for(const dat of ro) {
bots.unshift({token: dat.token, user:{username: dat.name, discriminator: dat.discriminator, tag: dat.discriminator, id: dat.id}})
}
res.json(bots)
})
}
})
}
  }
}
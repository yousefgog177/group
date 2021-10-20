module.exports = {
	path: '/api/fetch_message/',
	method: 'post',
	run: async (req, conns , res , client) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "command", "value": null},
{"key": "none", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , gg) => {
if(gg.length < 1) return res.json({status: true, message: "No Login"})
  if(gg[0].blacklist === "true" || gg[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(gg[0].blacklist === "gg") return res.json({status: false, message: gg})
let msgs = ``
let msg = ``
conns.query(`SELECT * FROM api_messages ORDER BY nu ASC LIMIT 50`,(err , as) => {
for(const dat of as){
if(dat.id === gg[0].channel) msgs = msgs + `\n${dat.number}`
}
conns.query(`SELECT * FROM api_messages ORDER BY nu ASC LIMIT 50`,(err , ga) => {
for(const dat of ga){
if(dat.id === gg[0].channel) msg = msg + `\n${gg[0].username}#${gg[0].discriminator}: ${dat.message}`
}
conns.query(`Select * From channels Where id = '${gg[0].id}' and channel = '${gg[0].channel}'`,(err , a7) => {
let permission = []
for(const dat of a7) permission.unshift(dat.permission)
let ownership = permission.includes("ownership")
let send_messages = permission.includes("read_message")
let everyone = permission.includes("everyone")
let adminstartor = permission.includes("adminstartor")
if(!ownership && !send_messages && !adminstartor && !everyone) return res.json({status: false, messages: "missing permission"})

let ez = msg.includes(data.command)
var num = false
var fetch = false
let command = data.command
conns.query(`Select * From api_messages`,(err , rows) => {
for(const datapase of rows){
if(datapase.message.startsWith(command) && !data.none.includes(datapase.number) && datapase.id === gg[0].channel){
num = datapase.number
fetch = true
}

}
return res.json({status: true, fetch: fetch, number: num})

})
})
})
})
})
  }
}
            
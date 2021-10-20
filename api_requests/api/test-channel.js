
module.exports = {
	path: '/api/test-channel/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "channel", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
conns.query(`Select * From channel Where channel = '${data.channel}'`,(err , row) => {
if(row.length < 1 ){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) {
res.json({status: true, message: "No Login"})
}else{
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`INSERT INTO channels (nu, channel, id, permission) VALUES ('0', '${data.channel}', '${rows[0].id}', 'ownership');`)
conns.query(`INSERT INTO channel (nu, channel, ownership) VALUES ('0', '${data.channel}', '${rows[0].id}');`)
conns.query(`Update profile set channel = "${data.channel}" Where nu = "${rows[0].nu}"`)
return res.json({status: true, message: "Done"})
}
})
}else{
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) {
res.json({status: true, message: "No Login"})
}else{
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${data.channel}'`,(err , gg) => {
if(gg.length < 1){
conns.query(`INSERT INTO channels (nu, channel, id, permission) VALUES ('0', '${data.channel}', '${rows[0].id}', 'everyone');`)
}else{
}
conns.query(`Update profile set channel = "${data.channel}" Where nu = "${rows[0].nu}"`)
return res.json({status: true, message: "Done"})
})
}
})
}
})
  }
}

module.exports = {
	path: '/api/users/fetch',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, con) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "user", "value": null},
{"key": "type", "value": null}
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
return res.json({status:false , message: "No Login"})
}else{
if(row[0].blacklist === "true" || row[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(row[0].blacklist === "gg") return res.json({status: false, message: gg})
}
/////////////////////////////////////////////////////////////////////////////////////////////////
if(data.type === "1" && data.user !== "@me" || data.type === 1 && data.user !== "@me"){
conns.query(`Select * From profile Where id = '${data.user}'`,(err , rows) => {
if(rows.length < 1 ) {
return res.json({status:true , message: "success", fetch: false})
}else{
return res.json({status:true , message: "success", fetch: true, user:{"username": rows[0].username,"discriminator": rows[0].discriminator, "id": rows[0].id, "bot": rows[0].bot, "channel": rows[0].general}})
}
})
}
/////////////////////////////////////////////////////////////////////////////////////////////////
if(data.type === "1" && data.user === "@me" || data.type === 1 && data.user === "@me"){
conns.query(`Select * From profile Where id = '${row[0].id}'`,(err , rows) => {
if(rows.length < 1 ) {
return res.json({status:true , message: "success", fetch: false})
}else{
return res.json({status:true , message: "success", fetch: true, user:{"username": rows[0].username,"discriminator": rows[0].discriminator, "id": rows[0].id, "bot": rows[0].bot, "channel": rows[0].general}})
}
})
}
/////////////////////////////////////////////////////////////////////////////////////////////////
if(data.type === "2" && data.user !== "@me" || data.type === 2 && data.user !== "@me"){
conns.query(`Select * From profile Where username = '${data.user}'`,(err , rows) => {
if(rows.length < 1 ) {
return res.json({status:true , message: "success", fetch: false})
}else{
return res.json({status:true , message: "success", fetch: true, user:{"username": rows[0].username,"discriminator": rows[0].discriminator, "id": rows[0].id, "bot": rows[0].bot, "channel": rows[0].general}})
}
})
}
/////////////////////////////////////////////////////////////////////////////////////////////////
if(data.type === "2" && data.user === "@me" || data.type === 2 && data.user === "@me"){
conns.query(`Select * From profile Where username = '${row[0].username}'`,(err , rows) => {
if(rows.length < 1 ) {
return res.json({status:true , message: "success", fetch: false})
}else{
return res.json({status:true , message: "success", fetch: true, user:{"username": rows[0].username,"discriminator": rows[0].discriminator, "id": rows[0].id, "bot": rows[0].bot, "channel": rows[0].general}})
}
})
}
/////////////////////////////////////////////////////////////////////////////////////////////////
})
  }
}

module.exports = {
	path: '/api/profile/',
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
let user = ""
if(data.user === "@me") {
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) {
res.json({status: false, message: "No Profile"})
}else{
if(!req.headers.authorization) return res.json({status:false , message: "API : Not authorizated"})
if(req.headers.authorization !== rows[0].token) return res.json({status:false , message: "API : Wrong authorizated"})
res.json({status: true, message: "success", bot: rows[0].bot, id: rows[0].id, username: rows[0].username, discriminator: rows[0].discriminator, channel: rows[0].channel})
}
})
}else{
conns.query(`Select * From profile Where id = '${data.user}'`,(err , rows) => {
if(rows.length < 1 ) {
res.json({status: false, message: "No Profile"})
}
if(!req.headers.authorization) return res.json({status:false , message: "API : Not authorizated"})
if(req.headers.authorization !== rows[0].token) return res.json({status:false , message: "API : Wrong authorizated"})
res.json({status: true, message: "success", bot: rows[0].bot, id: rows[0].id, username: rows[0].username, discriminator: rows[0].discriminator, channel: rows[0].channel})
})
}
  }
}
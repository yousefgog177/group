const replaceall = require('replaceall')
module.exports = {
	path: '/api/invites',
	method: 'post',
	run: async (req, conns , res , client, bots, gg) => {

let { headers , body } = req

if(!body.code) return res.status(403).json({errors: ["request body"], message: "Request body chat"})
conns.query(`Select * From profile Where ip = '${req.headers["cookie"]}'`,(err , rows) => {
if(rows.length < 1 ) {
return res.status(400).json({errors: ["authorization"], message: "Failed Authorization"})
}else{
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.status(400).json({errors: ["authorization"], message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.status(400).json({errors: ["authorization"], message: gg})
conns.query(`Select * From invites Where code = '${body.code}'`,(err , ro) => {
if(ro.length < 1) return res.status(400).json({errors: ["permission"], message: "missing permission"})
conns.query(`INSERT INTO invited (nu, code, id) VALUES ('0', '${ro[0].code}', '${rows[0].id}');`)
conns.query(`Select * From channel Where channel = '${ro[0].too}'`,(err , row) => {
if(row.length < 1 ){
conns.query(`INSERT INTO channels (nu, channel, id, permission) VALUES ('0', '${ro[0].too}', '${rows[0].id}', 'ownership');`)
conns.query(`INSERT INTO channel (nu, channel, ownership) VALUES ('0', '${ro[0].too}', '${rows[0].id}');`)
conns.query(`Update profile set channel = "${ro[0].too}" Where nu = "${rows[0].nu}"`)
return res.status(200).json({errors: [], message: 'success', data: ro, channel: ro[0].too, inviter: ro[0].id, code: body.code})
}else{
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${ro[0].too}'`,(err , gg) => {
if(gg.length < 1){
conns.query(`INSERT INTO channels (nu, channel, id, permission) VALUES ('0', '${ro[0].too}', '${rows[0].id}', 'everyone');`)
}else{
}
conns.query(`Update profile set channel = "${ro[0].too}" Where nu = "${rows[0].nu}"`)

return res.status(200).json({errors: [], message: 'success', channel: ro[0].too, inviter: ro[0].id, code: body.code})
})
}
})
})
}
/*
conns.query(`Select * From channel Where channel = '${d}'`,(err , row) => {
if(row.length < 1 ){
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`INSERT INTO channels (nu, channel, id, permission) VALUES ('0', '${data.channel}', '${rows[0].id}', 'ownership');`)
conns.query(`INSERT INTO channel (nu, channel, ownership) VALUES ('0', '${data.channel}', '${rows[0].id}');`)
conns.query(`Update profile set channel = "${data.channel}" Where nu = "${rows[0].nu}"`)
return res.json({status: true, message: "Done"})
}else{
conns.query(`Select * From profile Where ip = '${req.headers["cookie"]}'`,(err , rows) => {
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
})
}
})
}
})
}*/
})
}
  }

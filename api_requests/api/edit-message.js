
module.exports = {
	path: '/api/editmessage/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss, emojis, kk) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "id", "value": null},
{"key": "to", "value": null}
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
if(row.length < 1) return res.json({status: false, message: "No Login"})
conns.query(`Select * From api_messages Where number = '${data.id}'`,(err , rows) => {
if(rows.length < 1) return res.json({status: false, message: "No Fetched"})
conns.query(`Select * From channels Where id = '${row[0].id}' and channel = '${row[0].channel}'`,(err , gg) => {
if(gg.length < 1 ) return res.json({status: false, message: "missing permission"})

let permission = []
for(const dat of gg) permission.unshift(dat.permission)
let ownership = permission.includes("ownership")
let delete_message = permission.includes("manager_channel")
let adminstartor = permission.includes("adminstartor")
if(!ownership && !delete_message && !adminstartor && row[0].id !== rows[0].user) return res.json({status: false, message: "missing permission"})
let oldmessage = rows[0].message
conns.query(`Update api_messages set message = "${data.to} (edited)" Where nu = "${rows[0].nu}"`)
conns.query(`SELECT * FROM api_messages Where number = '${data.id}'`,(err , r) => {
conns.query(`Select * From profile`,(err , lol) => {
let Staff = false
var messages;
let mention = []
let emoji = []
let mention_everyone = false
let mssg = ``
for(const dat of r){
conns.query(`Select * From profile Where id = '${dat.user}'`,(err , ro) => {
if(ro.length < 1 || lol.length < 1) {

}else{
messages = dat.message
for(const emojit of emojis){
if(dat.message.includes(emojit.emoji)){ emoji.unshift(emojit)
messages = messages.replace(emojit.emoji, emojit.to)}
}
for(const d of lol){
if(dat.message.includes(`<@${d.id}>`) && !mention.includes(d.id)){
mention.unshift(d.id)
}
}

}
})
}
conns.query(`SELECT * FROM api_messages ORDER BY nu ASC LIMIT 1`,(err , r) => {
conns.query(`Select * From profile Where id = '${rows[0].user}'`,(err , row) => {
if(row.length < 1) return res.json({status: false, message: "No Fetched"})
res.json({message: "success",mention_everyone: mention_everyone, mention_user: mention, emoji: emoji, id: rows[0].number,oldmessage: oldmessage, content: messages, author:{id:row[0].id, discriminator: row[0].discriminator, username: row[0].username, bot: row[0].bot},channel:{name: row[0].channel}})
  wss.clients.forEach( client => {
    client.send(JSON.stringify({message: "edit",mention_everyone: mention_everyone, mention_user: mention, emoji: emoji, id: rows[0].number, oldmessage: oldmessage,content: messages, author:{id:row[0].id, discriminator: row[0].discriminator, username: row[0].username, bot: row[0].bot},channel:{name: row[0].channel}}));
  });
mention = []
return;
})
})
})
})
})
})
})
  }
}
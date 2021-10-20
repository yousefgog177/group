
module.exports = {
	path: '/api/send/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss, emojis) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "message", "value": null},
{"key": "type", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(data.type === 1 || data.type === "1"){

   var o = Math.floor(Math.random() * 9) + 1;
   var oo = Math.floor(Math.random() * 9) + 1;
   var ooo = Math.floor(Math.random() * 9) + 1;
   var oooo = Math.floor(Math.random() * 9) + 1;

let codes = `${o}${oo}${ooo}${oooo}`
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) return res.json({status: false, message: "No Login"})
if(rows[0].bot === "true" && rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From priavte Where id1 = '${rows[0].id}'`,(err , row) => {
if(row.length < 1){
conns.query(`Select * From priavte Where id2 = '${rows[0].id}'`,(err , ro) => {
if(ro.length < 1) return res.json({status: false, message: "No Chat Set priavte!"})
conns.query(`INSERT INTO messages_priavte (nu, message, number, user, too) VALUES (0, '${data.message}', '${codes}', '${ro[0].id1}', '${ro[0].id2}');`)
conns.query(`SELECT * FROM messages_priavte Where number = '${codes}'`,(err , r) => {
conns.query(`Select * From profile`,(err , lol) => {
let Staff = false
let mention = []
var messages = ``
let emoji = []
let mention_everyone = false
let mssg = ``
for(const dat of r){
conns.query(`Select * From profile Where id = '${dat.user}'`,(err , ro) => {
if(ro.length < 1 ) {
if(lol.length < 1 ) {

}
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
conns.query(`SELECT * FROM messages_priavte ORDER BY nu ASC LIMIT 1`,(err , r) => {
res.json({status: true, message: "success",mention_everyone: mention_everyone, mention_user: mention, id: codes, emoji: emoji, content: messages, author:{id:rows[0].id, discriminator: rows[0].discriminator, username: rows[0].username, channel: rows[0].channel}})
  wss.clients.forEach( client => {
    client.send(JSON.stringify({status: true, message: "success",mention_everyone: mention_everyone, mention_user: mention, emoji: emoji, id: codes, content: messages, author:{id:rows[0].id, discriminator: rows[0].discriminator, username: rows[0].username, channel: rows[0].channel}}));
  });
})
})
})
})
}else{
conns.query(`INSERT INTO messages_priavte (nu, message, number, user, too) VALUES (0, '${data.message}', '${codes}', '${row[0].id2}', '${row[0].id1}');`)
conns.query(`SELECT * FROM messages_priavte Where number = '${codes}'`,(err , r) => {
conns.query(`Select * From profile`,(err , lol) => {
let Staff = false
let mention = []
var messages = ``
let emoji = []
let mention_everyone = false
let mssg = ``
for(const dat of r){
conns.query(`Select * From profile Where id = '${dat.user}'`,(err , ro) => {
if(ro.length < 1 ) {
if(lol.length < 1 ) {

}
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
conns.query(`SELECT * FROM messages_priavte ORDER BY nu ASC LIMIT 1`,(err , r) => {
res.json({status: true, message: "success",mention_everyone: mention_everyone, mention_user: mention, id: codes, emoji: emoji, content: messages, author:{id:rows[0].id, discriminator: rows[0].discriminator, username: rows[0].username, channel: rows[0].channel}})
  wss.clients.forEach( client => {
    client.send(JSON.stringify({status: true, message: "success",mention_everyone: mention_everyone, mention_user: mention, emoji: emoji, id: codes, content: messages, author:{id:rows[0].id, discriminator: rows[0].discriminator, username: rows[0].username, channel: rows[0].channel}}));
  });
})
})
})
}
})
})
}
  }
}
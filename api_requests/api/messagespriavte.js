
module.exports = {
	path: '/api/messagespriavte-limited=50/',
	method: 'get',
	run: async (req, conns , res , client, bots, gg, wss, emojis) => {
var Staff = false
let msg = ``
let msgs = ``
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) return res.json({status: false, message: "No Login"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
var code = []
var messages;
let emoji = []
var mention = []
conns.query(`SELECT * FROM messages_priavte ORDER BY nu ASC LIMIT 50`,(err , r) => {
for(const dat of r){
conns.query(`Select * From profile Where id = '${dat.too}'`,(err , roo) => {
conns.query(`Select * From profile Where id = '${dat.user}'`,(err , ro) => {
for(const daa of roo){
for(const da of ro){
conns.query(`Select * From priavte Where id1 = '${dat.user}' and id2 = '${dat.too}'`,(err , ggorno) => {
if(ggorno.length < 1){}else{
messages = dat.message
for(const emojit of emojis){
if(messages.includes(emojit.emoji)){ emoji.unshift(emojit)
messages = messages.replace(emojit.emoji, emojit.to)}
emoji = []
}
if(messages.includes(`<@${da.id}>`)) mention.unshift(da.id)
if(dat.user === rows[0].id || dat.too === rows[0].id) {

 code.unshift({
  message: 'success',
  mention_everyone: false,
  mention_user: mention,
  emoji: emoji,
  id: dat.number,
  content: messages,
  author: {
    id: da.id,
    discriminator: da.discriminator,
    username: da.username,
    bot: da.bot,
    channel: da.channel
  }
})
}
}
})
conns.query(`Select * From priavte Where id1 = '${dat.too}' and id2 = '${dat.user}'`,(err , ggorno) => {
if(ggorno.length < 1){}else{
messages = dat.message
for(const emojit of emojis){
if(messages.includes(emojit.emoji)){ emoji.unshift(emojit)
messages = messages.replace(emojit.emoji, emojit.to)}
emoji = []
}
if(messages.includes(`<@${da.id}>`)) mention.unshift(da.id)
if(dat.user === rows[0].id || dat.too === rows[0].id) {

 code.unshift({
  message: 'success',
  mention_everyone: false,
  mention_user: mention,
  emoji: emoji,
  id: dat.number,
  content: messages,
  author: {
    id: da.id,
    discriminator: da.discriminator,
    username: da.username,
    bot: da.bot,
    channel: da.channel
  }
})
}
}
})
}
}
})
})
}
conns.query(`Select * From priavte`,(err , ja) => {
conns.query(`Select * From profile`,(err , kj) => {
conns.query(`SELECT * FROM messages_priavte ORDER BY nu ASC LIMIT 1`,(err , jj) => {
res.json(code)
})
})
})
})
})
  }
}
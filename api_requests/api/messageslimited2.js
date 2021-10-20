const fs = require('fs')
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))
const replaceall = require('replaceall')
module.exports = {
	path: '/api/messageslimited=50?ASC',
	method: 'get',
	run: async (req, conns , res , client, bots, gg, wss, emojis, kk) => {
var Staff = false
let msg = ``
let msgs = ``
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) return res.json({status: false, message: "No Login"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${rows[0].channel}'`,(err , row) => {
let permission = []
for(const dat of row) permission.unshift(dat.permission)
let ownership = permission.includes("ownership")
let read_message = permission.includes("read_message")
let adminstartor = permission.includes("adminstartor")
let everyone = permission.includes("everyone")
if(!ownership && !read_message && !adminstartor && !everyone) return res.json({status: false, messages: "missing permission"})
var code = []
var messages;
let emoji = []
var mention = []
conns.query(`SELECT * FROM api_messages ORDER BY nu ASC LIMIT 50`,(err , r) => {
conns.query(`Select * From profile`,(err , lol) => {
for(const dat of r){
conns.query(`Select * From profile Where id = '${dat.user}'`,(err , ro) => {
for(const da of ro){
messages = dat.message
for(const hh of kk){
for(const emojit of emojis){
if(messages.includes(emojit.emoji)){ emoji.unshift(emojit)}
messages = messages.replace(emojit.emoji, emojit.to)
}}
for(const hh of kk){
for(const d of lol){
if(dat.message.includes(`<@${d.id}>`)){
if(!mention.includes(d.id)) mention.unshift(d.id)
messages = messages.replace(`<@${d.id}>`, `${d.username}`)
}
}}


  if(rows[0].channel === dat.id) code.unshift({
  message: 'success',
  mention_everyone: false,
  mention_user: mention,
  emoji: emoji,
  timestamp: Date.now(),
  id: dat.number,
  content: messages,
  author: {
    id: da.id,
    discriminator: da.discriminator,
    username: da.username,
    bot: da.bot,
  },
  channel: {
    name: da.channel
  }
})
emoji = []
}
})
}
conns.query(`SELECT * FROM api_messages ORDER BY nu ASC LIMIT 1`,(err , jj) => {
return res.json(code || "none")
})
})
})
})
})
  }
}
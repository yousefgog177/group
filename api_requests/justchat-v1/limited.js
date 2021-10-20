
const fs = require('fs')
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))
const replaceall = require('replaceall')
module.exports = {
	path: '/api/v1/messageslimited=50',
	method: 'get',
	run: async (req, conns , res , client, bots, gg, wss, emojis, kk) => {
var Staff = false
let msg = ``
let msgs = ``
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) return res.json({status: false, message: "No Login"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From channels Where channel = '${rows[0].channel}'`,(err , permissions) => {
let allperm = permissions.filter(d => d.id === rows[0].id)
let perm = allperm.find(d => d.permission === "ownership" || d.permission === "read_message" || d.permission === "adminstartor" || d.permission === "everyone")
if(!perm) return res.json({status: false, messages: "missing permission"})
var messages = []
conns.query(`SELECT * FROM api_messages ORDER BY nu DESC LIMIT 50`,(err , msgs) => {
conns.query(`Select * From profile`,(err , profiles) => {
let users = []

for(const user of profiles){
delete user.token
delete user.gmail
delete user.password
delete user.authy
delete user.blacklist
delete user.ip
delete user.nu
users.unshift(user)
}
for(const msg of msgs){
if(msg.id === rows[0].channel){
//=========================
let message = msg.message // this message
//=========================
let mentions = users.filter(data => message.includes(`<@${data.id}>`)) // this system get mention
//=========================
let perms = permissions.find(d => d.id === msg.user) // this premission for user
//=========================
let author = users.find(d => d.id === msg.user) || { id: msg.user } // this author
//=========================
let member = {
user: author,
permission: perms
}
messages.unshift({
member: member,
mention_user: mentions,
content: message,
id: msg.number,
channel:{
name: rows[0].channel
},
members: users.filter(d => d.channel === rows[0].channel),
author: author
})

}}
res.status(200).json(messages)
})
})
})
})
/*
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
conns.query(`SELECT * FROM api_messages ORDER BY nu DESC LIMIT 50`,(err , r) => {
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
  id: dat.number,
  timestamp: Date.now(),
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
mention = []
}
})
}
conns.query(`SELECT * FROM api_messages ORDER BY nu DESC LIMIT 1`,(err , jj) => {
return res.json(code || "none")
})
})
})
})
})*/
  }
}
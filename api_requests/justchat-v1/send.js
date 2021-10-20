
module.exports = {
	path: '/api/v1/sendchat',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss, emojis, kk) => {

let { body } = req

let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "message", "value": null},
{"key": "type", "value": null},
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
let cont = data.type
   var o = Math.floor(Math.random() * 9) + 1;
   var oo = Math.floor(Math.random() * 9) + 1;
   var ooo = Math.floor(Math.random() * 9) + 1;
   var oooo = Math.floor(Math.random() * 9) + 1;

let codes = `${o}${oo}${ooo}${oooo}`
if(data.type !== 3 && data.type !== 1 && data.type !== 2) res.status(401).json({errors: ['authorization'], message: "Type Is Defined"})
if(data.type === 3){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) return res.json({status: false, message: "No Login"})
let data2 = req.body.channel
if(!data2) data2 = rows[0].channel
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${data2}'`,(err , row) => {
if(row.length < 1 ) {
res.json({status: false, message: "missing permission"})
}else{
var messages;
var emoji = []
let permission = []
for(const dat of row) permission.unshift(dat.permission)
let ownership = permission.includes("ownership")
let read_message = permission.includes("read_message")
let send_messages = permission.includes("send_message")
let adminstartor = permission.includes("adminstartor")
let everyone = permission.includes("everyone")
if(!ownership && !send_messages && !adminstartor && !everyone) return res.json({status: false, message: "missing permission", none: "send_message"})
conns.query(`INSERT INTO api_messages (nu, message, content, user, number, id) VALUES (0, '${data.message}', '${cont}', '${rows[0].id}', '${codes}', '${data2}');`)
if(!ownership && !read_message && !adminstartor && !everyone) return res.json({status: false, message: "missing permission", none: "read_message"})
conns.query(`SELECT * FROM api_messages Where number = '${codes}'`,(err , r) => {
conns.query(`Select * From profile`,(err , lol) => {
conns.query(`Select * From channels Where channel = '${data2}'`,(err , rowggs) => {
let Staff = false
let mention = []
let mentions = []
let members = []
let mention_everyone = false
let mssg = ``
for(const dat of r){
conns.query(`Select * From profile Where id = '${dat.user}'`,(err , ro) => {
if(ro.length < 1 ) {
if(lol.length < 1 ) {

}
}else{
for(const d of lol){
let allpermission = rowggs.filter(ds => ds.id === d.id)
var permissions = []
for(const perm of allpermission) permissions.unshift(perm.permission)
var messages;
var emoji = []
if(d.channel === rows[0].channel) members.unshift({
user:{
    username: d.username,
    discriminator: d.discriminator,
    bot: Boolean(d.bot),
    channel: d.channel,
    tag: d.discriminator,
    id: d.id
},
permission:{
deny: [],
allow: permissions
}
  })

}
messages = dat.message
for(const hh of kk){
for(const emojit of emojis){
if(messages.includes(emojit.emoji)){ emoji.unshift(emojit)}
messages = messages.replace(emojit.emoji, emojit.to)
}}

for(const hh of kk){
for(const d of lol){
if(dat.message.includes(`<@${d.id}>`)){
if(!mentions.includes(d.id)){
 mentions.unshift(d.id)
 mention.unshift({id: d.id, username: d.username, discriminator: d.discriminator})
}
}
}}

}
})
}
conns.query(`Select * From channels`,(err , ar) => {
conns.query(`SELECT * FROM api_messages ORDER BY nu ASC LIMIT 1`,(err , r) => {
res.json({status: true, message: "success",mention_everyone: mention_everyone,member: { permission: {deny: [], allow: permission}}, members: members, mention_user: mention, timestamp: Date.now(), id: codes, emoji: emoji, content: messages || data.message, author:{id:row[0].id, discriminator: rows[0].discriminator, username: rows[0].username, bot: rows[0].bot}, channel:{name: data2}})
  wss.clients.forEach( client => {
    client.send(JSON.stringify({status: true, message: "success",member: { permission: {deny: [], allow: permission}}, members: members,mention_everyone: mention_everyone, mention_user: mention, emoji: emoji, timestamp: Date.now(), id: codes, content: messages || data.message, author:{id:row[0].id, discriminator: rows[0].discriminator, username: rows[0].username, bot: rows[0].bot}, channel:{name: data2}}));
  }); 
})
})
})
})
})
}
})
})
  return;
}
if(data.type === 1){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) return res.json({status: false, message: "No Login"})
let data2 = body.channel || rows[0].channel
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${data2}'`,(err , row) => {
if(row.length < 1 ) {
res.json({status: false, message: "missing permission"})
}else{
var messages;
var emoji = []
let permission = []
for(const dat of row) permission.unshift(dat.permission)
let ownership = permission.includes("ownership")
let read_message = permission.includes("read_message")
let send_messages = permission.includes("send_message")
let adminstartor = permission.includes("adminstartor")
let everyone = permission.includes("everyone")
if(!ownership && !send_messages && !adminstartor && !everyone) return res.json({status: false, message: "missing permission", none: "send_message"})
conns.query(`INSERT INTO api_messages (nu, message, content, user, number, id) VALUES (0, '${data.message}', '${cont}', '${rows[0].id}', '${codes}', '${data2}');`)
if(!ownership && !read_message && !adminstartor && !everyone) return res.json({status: false, message: "missing permission", none: "read_message"})
conns.query(`SELECT * FROM api_messages Where number = '${codes}'`,(err , r) => {
conns.query(`Select * From profile`,(err , lol) => {
conns.query(`Select * From channels Where channel = '${data2}'`,(err , rowggs) => {
let Staff = false
let mention = []
let mentions = []
let members = []
let mention_everyone = false
let mssg = ``
for(const dat of r){
conns.query(`Select * From profile Where id = '${dat.user}'`,(err , ro) => {
if(ro.length < 1 ) {
if(lol.length < 1 ) {

}
}else{
for(const d of lol){
let allpermission = rowggs.filter(ds => ds.id === d.id)
var permissions = []
for(const perm of allpermission) permissions.unshift(perm.permission)
var messages;
var emoji = []
if(d.channel === rows[0].channel) members.unshift({
user:{
    username: d.username,
    discriminator: d.discriminator,
    bot: Boolean(d.bot),
    channel: d.channel,
    tag: d.discriminator,
    id: d.id
},
permission:{
deny: [],
allow: permissions
}
  })

}
messages = dat.message
for(const hh of kk){
for(const emojit of emojis){
if(messages.includes(emojit.emoji)){ emoji.unshift(emojit)}
messages = messages.replace(emojit.emoji, emojit.to)
}}

for(const hh of kk){
for(const d of lol){
if(dat.message.includes(`<@${d.id}>`)){
if(!mentions.includes(d.id)){
 mentions.unshift(d.id)
 mention.unshift({id: d.id, username: d.username, discriminator: d.discriminator})
}
}
}}

}
})
}
conns.query(`Select * From channels`,(err , ar) => {
conns.query(`SELECT * FROM api_messages ORDER BY nu ASC LIMIT 1`,(err , r) => {
res.json({status: true, message: "success",mention_everyone: mention_everyone,member: { permission: {deny: [], allow: permission}}, members: members, mention_user: mention, timestamp: Date.now(), id: codes, emoji: emoji, content: messages || data.message, author:{id:row[0].id, discriminator: rows[0].discriminator, username: rows[0].username, bot: rows[0].bot}, channel:{name: data2}})
  wss.clients.forEach( client => {
    client.send(JSON.stringify({status: true, message: "success",member: { permission: {deny: [], allow: permission}}, members: members,mention_everyone: mention_everyone, mention_user: mention, emoji: emoji, timestamp: Date.now(), id: codes, content: messages || data.message, author:{id:row[0].id, discriminator: rows[0].discriminator, username: rows[0].username, bot: rows[0].bot}, channel:{name: data2}}));
  }); 
})
})
})
})
})
}
})
})
}
if(data.type === 2){
let { headers, body } = req
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) return res.json({status: false, message: "No Login"})
let data2 = req.body.channel
if(!data2) data2 = rows[0].channel
if(rows[0].bot !== "true" && rows[0].bot !== true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${data2}'`,(err , row) => {
if(row.length < 1 ) {
res.json({status: false, message: "missing permission"})
}else{

let permission = []
var messages;
var emoji = []
for(const dat of row) permission.unshift(dat.permission)
let ownership = permission.includes("ownership")
let read_message = permission.includes("read_message")
let send_messages = permission.includes("send_message")
let adminstartor = permission.includes("adminstartor")
let everyone = permission.includes("everyone")
if(!ownership && !send_messages && !adminstartor && !everyone) return res.json({status: false, message: "missing permission", none: "send_message"})
conns.query(`INSERT INTO api_messages (nu, message, content, user, number, id) VALUES (0, '${data.message}', '${cont}', '${rows[0].id}', '${codes}', '${data2}');`)
if(!ownership && !read_message && !adminstartor && !everyone) return res.json({status: false, message: "missing permission", none: "read_message"})
conns.query(`SELECT * FROM api_messages Where number = '${codes}'`,(err , r) => {
conns.query(`Select * From profile`,(err , lol) => {
let Staff = false
let mention = []
var members = []
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
if(d.channel === rows[0].channel) members.unshift({
    username: d.username,
    discriminator: d.discriminator,
    bot: d.bot.replace('true', true).replace('false', false),
    channel: d.channel,
    tag: d.discriminator,
    id: d.id
  })
if(dat.message.includes(`<@${d.id}>`) && !mention.includes(d.id)){
mention.unshift(d.id)
}
}

}
})
}
conns.query(`SELECT * FROM api_messages ORDER BY nu ASC LIMIT 1`,(err , r) => {
res.json({status: true, message: "success",member: { permission: {deny: [], allow: permission}},mention_everyone: mention_everyone, members: members, mention_user: mention, timestamp: Date.now(), id: codes, emoji: emoji, content: messages, author:{id:row[0].id, discriminator: rows[0].discriminator, username: rows[0].username}, channel:{name: data2}})
  wss.clients.forEach( client => {
    client.send(JSON.stringify({status: true, message: "success",member: { permission: {deny: [], allow: permission}}, members: members,mention_everyone: mention_everyone, mention_user: mention, timestamp: Date.now(), emoji: emoji, id: codes, content: messages, author:{id:row[0].id, discriminator: rows[0].discriminator, username: rows[0].username}, channel:{name: data2}}));
  });
})
})
})
}
})
})
return;

}
  }
}
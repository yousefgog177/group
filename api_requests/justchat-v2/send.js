const fs = require('fs')

module.exports = {
	path: '/api/v2/sendchat',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss, emojis, kk) => {

const mongodb = JSON.parse(fs.readFileSync("./mongodb.json", "utf8"))

let { body, headers } = req
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})

let profile = mongodb['profile'].find(d => d.token === headers.authorization.replace('Bot ', ''))
if(!profile || profile.bot && !headers.authorization.startsWith('Bot ')) return res.status(401).json({errors: ['authorization'], "message": "401: Unauthorized"})

if(!body.message) body.message = 'Hi'


let needed = ["2","8"]


let perm = mongodb['permission'].find(d => needed.includes(d.permission) && d.channel === profile.channel && d.id === profile.id)
if(!perm) return res.status(403).json({errors: ['permission'], message: "missing permission"})
   var o = Math.floor(Math.random() * 9) + 1;
   var oo = Math.floor(Math.random() * 9) + 1;
   var ooo = Math.floor(Math.random() * 9) + 1;
   var oooo = Math.floor(Math.random() * 9) + 1;
   var ooooo = Math.floor(Math.random() * 9) + 1;
   var oooooo = Math.floor(Math.random() * 9) + 1;
   var ooooooo = Math.floor(Math.random() * 9) + 1;
   var oooooooo = Math.floor(Math.random() * 9) + 1;

let id = `${o}${oo}${ooo}${oooo}${ooooo}${oooooo}${ooooooo}${oooooooo}`
let mentions = []

for(const data of mongodb['profile']){
if(body.message.includes(`<@${data.id}>`)) mentions.unshift(data)
}

let emoji = []

for(const hh of kk){
for(const emojit of emojis){
if(body.message.includes(emojit.emoji)){ emoji.unshift(emojit)}
body.message = body.message.replace(emojit.emoji, emojit.to)
}}
res.status(200).json({
author: {
id: profile.id,
username: profile.username,
discriminator: profile.discriminator,
bot: profile.bot,
channel: profile.channel
},
channel: { name: profile.channel },
content: body.message,
id: id,
emoji: emoji,
mention_user: mentions,
timestamp: Date.now()
})
mongodb['messages'].unshift({
message: "success",
author: {
id: profile.id,
username: profile.username,
discriminator: profile.discriminator,
bot: profile.bot,
channel: profile.channel
},
channel: { name: profile.channel },
content: body.message,
id: id,
emoji: emoji,
mention_user: mentions,
timestamp: Date.now()
})
  wss.clients.forEach( client => {
    client.send(JSON.stringify({
author: {
id: profile.id,
username: profile.username,
discriminator: profile.discriminator,
bot: profile.bot,
channel: profile.channel
},
channel: { name: profile.channel },
content: body.message,
id: id,
emoji: emoji,
mention_user: mentions,
timestamp: Date.now()
}))
  });
fs.writeFile("./mongodb.json", JSON.stringify(mongodb, null, 5), function(err) {if(err) console.log(err)});

}
}
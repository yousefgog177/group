const fs = require('fs')

module.exports = {
	path: '/api/v2/messageslimited=all',
	method: 'get',
	run: async (req, conns , res , client, bots, gg, wss, emojis, kk) => {

const mongodb = JSON.parse(fs.readFileSync("./mongodb.json", "utf8"))

let { body, headers } = req
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})

let profile = mongodb['profile'].find(d => d.token === headers.authorization.replace('Bot ', ''))
if(!profile || profile.bot && !headers.authorization.startsWith('Bot ')) return res.status(401).json({errors: ['authorization'], "message": "401: Unauthorized"})
let allmessages = []
for(const data of mongodb['messages']){
if(data.channel.name === profile.channel) allmessages.unshift(data)

}

res.status(200).json(allmessages)

  }
}
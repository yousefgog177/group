module.exports = {
	path: '/api/users',
	method: 'get',
	run: async (req, conns , res , client,bot) => {
let user = []
conns.query(`Select * From profile`,(err , rows) => {
for(const data of rows){
var bots = false
if(data.bot === 'true') bots = true
user.unshift({
username: data.username,
discriminator: data.discriminator,
tag: data.discriminator,
id: data.id,
bot: bots,
channel: data.channel
})
}
res.json(user)
})
  }
}
module.exports = {
	path: '/api/channel/:id',
	method: 'get',
	run: async (req, conns , res , client,bot) => {
let { headers , params } = req

if(!req.headers.authorization) return res.status(401).json({errors: ['authorization'], message: "No Authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {

if(rows.length < 1) return res.status(401).json({errors: ['authorization'], message: "No Login"})
conns.query(`Select * From channel Where channel = '${params.id}'`,(err , rowa) => {
if(rowa.length < 1 ) return res.status(404).json({errors: ['Not-Found'], message: "This Channel is Not Found!"})
conns.query(`Select * From channels Where channel = '${params.id}'`,(err , perms) => {
conns.query(`Select * From profile`,(err , lol) => {
var members = []
for(const dat of lol) {
let allpermission = perms.filter(ds => ds.id === dat.id)
var permissions = []
for(const perm of allpermission) permissions.unshift(perm.permission)
members.unshift({
user:{
    username: dat.username,
    discriminator: dat.discriminator,
    bot: Boolean(dat.bot),
    channel: dat.channel,
    tag: dat.discriminator,
    id: dat.id
},
permission:{
deny: [],
allow: permissions
}
})
}
res.status(200).json({errors: [], members: members, data: {
channel: rowa[0].channel,
ownership: rowa[0].ownership
}})

/*
for(const dat of row) {
conns.query(`Select * From profile Where id = '${dat.id}'`,(err , ro) => {
var datas;
for(const dats of ro) datas = dats
if(datas) {
var bots = false
if(data.bot === 'true') bots = true
data.unshift({user: {
username: ro[0].username,
discriminator: ro[0].discriminator,
tag: ro[0].discriminator,
id: ro[0].id,
bot: bots,
channel: ro[0].channel
},
permission: {deny: 0, allow:dat.permission}
})
}
})
}*/
})
})
})

})
  }
}

module.exports = {
	path: '/api/clear/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "id", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) return res.json({status: false, message: "No Login"})
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${rows[0].channel}'`,(err , gg) => {
if(gg.length < 1 ) return res.json({status: false, message: "missing permission"})

let permission = []
for(const dat of gg) permission.unshift(dat.permission)
let ownership = permission.includes("ownership")
let delete_message = permission.includes("delete_message")
let adminstartor = permission.includes("adminstartor")
if(data.id === "all"){
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${rows[0].channel}'`,(err , gg) => {
if(gg.length < 1 ) return res.json({status: false, message: "missing permission"})

let permission = []
for(const dat of gg) permission.unshift(dat.permission)
let ownership = permission.includes("ownership")
let delete_message = permission.includes("delete_message")
let adminstartor = permission.includes("adminstartor")
if(!ownership && !delete_message && !adminstartor) return res.json({status: false, message: "missing permission"})
conns.query(`Select * From api_messages Where id = '${rows[0].channel}'`,(err , hh) => {
let messages = []
for(const dat of hh) {
messages.unshift(dat.number)
conns.query(`Delete From api_messages Where nu = "${dat.nu}"`)
}
  wss.clients.forEach( client => {
    client.send(JSON.stringify({status: true, message: "Deleted", id: messages, all: true, channel: { name: rows[0].channel }, member: {permission: { allow: permission, deny: []}, user: { id: rows[0].id, username: rows[0].username, bot: rows[0].bot, discriminator: rows[0].discriminator }}}));
  }); 

res.json({status: true, message: "Done Deleted Message", id: messages, all: true, channel: { name: rows[0].channel }, member: {permission: { allow: permission, deny: []}, user: { id: rows[0].id, username: rows[0].username, bot: rows[0].bot, discriminator: rows[0].discriminator }}})
})
})
return;
}
conns.query(`Select * From api_messages Where number = '${data.id}' and id = '${rows[0].channel}'`,(err , row) => {
if(row.length < 1) return res.json({status: false, message: "No Fetched"})
if(row[0].user !== rows[0].id){
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${rows[0].channel}'`,(err , gg) => {
if(gg.length < 1 ) return res.json({status: false, message: "missing permission"})

let permission = []
for(const dat of gg) permission.unshift(dat.permission)
let ownership = permission.includes("ownership")
let delete_message = permission.includes("delete_message")
let adminstartor = permission.includes("adminstartor")
if(!ownership && !delete_message && !adminstartor) return res.json({status: false, message: "missing permission"})
conns.query(`Delete From api_messages Where nu = "${row[0].nu}"`)
  wss.clients.forEach( client => {
    client.send(JSON.stringify({status: true, message: "Deleted", all: false, id: [row[0].number], content: row[0].message, channel: { name: row[0].id }, member: {permission: { allow: permission, deny: []}, user: { id: rows[0].id, username: rows[0].username, bot: rows[0].bot, discriminator: rows[0].discriminator }}}));
  }); 
res.json({status: true, message: "Done Deleted Message", all: false, id: [row[0].number], content: row[0].message, channel: { name: row[0].id }, member: {permission: { allow: permission, deny: []}, user: { id: rows[0].id, username: rows[0].username, bot: rows[0].bot, discriminator: rows[0].discriminator }}})
})
}else{
conns.query(`Delete From api_messages Where nu = "${row[0].nu}"`)
conns.query(`Select * From profile Where id = '${row[0].user}'`,(err , user) => {

if(user.length < 1){
  wss.clients.forEach( client => {
    client.send(JSON.stringify({status: true, message: "Deleted", all: false, id: [row[0].number], content: row[0].message, channel: { name: row[0].id }, member: {permission: { allow: permission, deny: []}, user: { id: rows[0].id, username: rows[0].username, bot: rows[0].bot, discriminator: rows[0].discriminator }}}));
  }); 

res.json({status: true, message: "Done Deleted Message", all: false, id: [row[0].number], content: row[0].message, channel: { name: row[0].id }, user: { id: rows[0].id, username: rows[0].username, bot: rows[0].bot, discriminator: rows[0].discriminator }})
}else{
  wss.clients.forEach( client => {
    client.send(JSON.stringify({status: true, message: "Deleted", all: false, id: [row[0].number], content: row[0].message, author: { username: user[0].username, bot: user[0].bot, id: user[0].id, discriminator: user[0].discriminator}, channel: { name: row[0].id }, member: {permission: { allow: permission, deny: []}, user: { id: rows[0].id, username: rows[0].username, bot: rows[0].bot, discriminator: rows[0].discriminator }}}));
  }); 

res.json({status: true, message: "Done Deleted Message", all: false, id: [row[0].number], content: row[0].message, author: { username: user[0].username, bot: user[0].bot, id: user[0].id, discriminator: user[0].discriminator}, channel: { name: row[0].id }, member: {permission: { allow: permission, deny: []}, user: { id: rows[0].id, username: rows[0].username, bot: rows[0].bot, discriminator: rows[0].discriminator }}})
}
})
}
})
})
})
  }
}
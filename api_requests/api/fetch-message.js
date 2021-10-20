
module.exports = {
	path: '/api/fetch_number/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss, emojis, kk) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "number", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
conns.query(`Select * From api_messages Where number = '${data.number}'`,(err , rows) => {
if(rows.length < 1) return res.json({status: false, message: "No Fetched"})
conns.query(`SELECT * FROM api_messages Where number = '${data.number}'`,(err , r) => {
conns.query(`Select * From profile`,(err , lol) => {
let Staff = false
var messages;
let mention = []
let emoji = []
let mention_everyone = false
let mssg = ``
for(const dat of r){
conns.query(`Select * From profile Where id = '${dat.user}'`,(err , ro) => {
if(ro.length < 1 || lol.length < 1) {

}else{
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

}
})
}
conns.query(`SELECT * FROM api_messages ORDER BY nu ASC LIMIT 1`,(err , r) => {
conns.query(`Select * From profile Where id = '${rows[0].user}'`,(err , row) => {
if(row.length < 1) return res.json({status: false, message: "No Fetched"})
res.json({message: "success",mention_everyone: mention_everyone, mention_user: mention, timestamp: Date.now(), emoji: emoji, id: rows[0].number, content: messages, author:{id:row[0].id, discriminator: row[0].discriminator, username: row[0].username, bot: row[0].bot},channel:{name: row[0].channel}})
mention = []
})
})
})
})
})
  }
}

module.exports = {
	path: '/api/filter',
	method: 'get',
	run: async (req, conns , res , client, bots, gg, con) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "command", "value": null},
{"key": "filter", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , row) => {
if(row.length < 1 ) {
return res.json({status:false , message: "No Login"})
}else{
  if(row[0].blacklist === "true" || row[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(row[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From profile Where ${data.command} = '${data.filter}'`,(err , rows) => {
if(err) return res.json([])
let dones = []
for(const dat of rows){
dones.unshift({username: dat.username, discriminator: dat.discriminator, id: dat.id, channel: dat.channel, bot: dat.bot})
}
res.json(dones)
})
}
})

  }
}
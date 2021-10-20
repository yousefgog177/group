
module.exports = {
	path: '/api/profile-account/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, con) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "user", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , ro) => {
if(ro.length < 1 ) {
res.json({status: true, message: "No Login"})
}else{
conns.query(`Select * From profile Where username = '${data.user}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`Select * From profile Where id = '${data.user}'`,(err , row) => {
if(row.length < 1 ) {
res.json({status: true, message: "i can't find user"})
}else{
//code
let badge = []
conns.query(`Select * From badge Where id = '${row[0].id}'`,(err , r) => {

for(const dat of r) badge.unshift(dat.badge)
res.json({status: true, message: "success", badge: badge, name: row[0].username + "#" + row[0].discriminator})
})
}
            
})
}else{
//code
  let badge = []
conns.query(`Select * From badge Where id = '${rows[0].id}'`,(err , r) => {

for(const dat of r) badge.unshift(dat.badge)
res.json({status: true, message: "success", badge: badge, name: rows[0].username + "#" + rows[0].discriminator})
})
}
})
}
})
  }
}
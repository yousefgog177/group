
module.exports = {
	path: '/api/setpriavte/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg, wss, emojis) => {
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
conns.query(`Select * From priavte Where id1 = '${rows[0].id}'`,(err , row) => {
if(row.length < 1){
conns.query(`Select * From priavte Where id2 = '${rows[0].id}'`,(err , ro) => {
if(ro.length < 1) {
conns.query(`INSERT INTO priavte (nu, id1, id2) VALUES (0, '${rows[0].id}', '${data.id}');`)
}else{
conns.query(`Update priavte set id1 = "none" Where nu = "${ro[0].nu}"`)
conns.query(`Update priavte set id2 = "none" Where nu = "${ro[0].nu}"`)
conns.query(`INSERT INTO priavte (nu, id1, id2) VALUES (0, '${rows[0].id}', '${data.id}');`)
}
})
}else{
conns.query(`Update priavte set id1 = "none" Where nu = "${row[0].nu}"`)
conns.query(`Update priavte set id2 = "none" Where nu = "${row[0].nu}"`)
conns.query(`INSERT INTO priavte (nu, id1, id2) VALUES (0, '${rows[0].id}', '${data.id}');`)
}
res.json({status: true, message: "Done"})
})
})
  }
}
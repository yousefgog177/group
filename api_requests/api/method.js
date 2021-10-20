module.exports = {
	path: '/api/method/',
	method: 'post',
	run: async (req, conns , res , client, bots) => {
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
conns.query(`Select * From profile Where id = '${data.id}'`,(err , rows) => {
  if(rows.length < 1) return res.json({status: false, message: "User Not Login"})
if(req.headers.authorization !== rows[0].token) return res.json({status: false, message: "API : Wrong authorization"})
conns.query(`Select * From card Where id = '${rows[0].id}'`,(err , row) => {
let msg = []
for(const data of row) {
msg.unshift({status: data.status, card: data.card.slice(12 , 16), retailer: 'Nitro Classic', tax: '0.00', total: data.pay})
}
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
res.json(msg)
})
})
  }
}
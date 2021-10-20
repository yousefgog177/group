
module.exports = {
	path: '/api/OAuth2/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "id", "value": null},
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
if(rows.length < 1 ) {
return res.json({status: true, message: "No Login"})
}else{
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
   var o = Math.floor(Math.random() * 9) + 1;
   var oo = Math.floor(Math.random() * 9) + 1;
   var ooo = Math.floor(Math.random() * 9) + 1;
   var oooo = Math.floor(Math.random() * 9) + 1;
let id = `${o}${oo}${ooo}${oooo}`
conns.query(`INSERT INTO confirm (nu, id, confirm, done) VALUES (0, '${data.id}', '${id}', 'false');`)
res.json({status: true, message: id})
}
})
  }
}
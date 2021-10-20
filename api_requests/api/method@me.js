module.exports = {
	path: '/api/method/@me',
	method: 'get',
	run: async (req, conns , res , client, bots) => {
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
 if(rows.length < 1) return res.json({status: false, message: "No Login"})
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
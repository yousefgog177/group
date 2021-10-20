
module.exports = {
	path: '/api/logout-chat/',
	method: 'get',
	run: async (req, conns , res , client, bots, gg, con, wss, emojis) => {
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) {
   res.json({status: true, message: "No Login"})
}else{
conns.query(`Update profile set ip = "none" Where id = "${rows[0].id}"`)
return res.json({status: true, message: "success"})

}

})
  }
}
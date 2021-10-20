const randomIdGenerator = require('random-id-generator')

module.exports = {
	path: '/api/invites',
	method: 'put',
	run: async (req, conns , res , client, bots, gg) => {

let { headers , body } = req

if(!body.chat) return res.status(403).json({errors: ["request body"], message: "Request body chat"})
conns.query(`Select * From profile Where ip = '${req.headers["cookie"]}'`,(err , rows) => {
if(rows.length < 1 ) {
return res.status(400).json({errors: ["authorization"], message: "Failed Authorization"})
}else{
conns.query(`Select * From channel Where channel = '${body.chat}'`,(err , row) => {
if(row.length < 1 ){
return res.status(403).json({errors: ["data"], message: "This chat is not create"})
}else{
let code = randomIdGenerator(6)

conns.query(`INSERT INTO invites (nu, id, code, too) VALUES ('0', '${rows[0].id}', '${code}', '${body.chat}');`)
res.status(200).json({errors: [], message: "success", code: code})
}
})
}
})
  }
}
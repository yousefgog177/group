module.exports = {
	path: '/api/invites',
	method: 'patch',
	run: async (req, conns , res , client, bots, gg) => {

let { headers , body } = req

if(!body.code) return res.status(403).json({errors: ["request body"], message: "Request body code"})


conns.query(`Select * From invited Where code = '${body.code}'`,(err , row) => {
conns.query(`Select * From invites Where code = '${body.code}'`,(err , ro) => {
let invited = []
if(ro.length < 1) return res.status(403).json({errors: ["data"], message: "Code is defined"})
for(const data of ro) invited.unshift(data.id)
return res.status(200).json({inviter: ro[0].id, invited: invited})
})
})

  }
}
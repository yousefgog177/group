module.exports = {
	path: '/api/invites',
	method: 'get',
	run: async (req, conns , res , client, bots, gg) => {
let { headers } = req
if(!headers.authorization) return res.status(403).json({errors: ["request headers"], message: "Header user Request"})

/*
if(!body.code) return res.status(403).json({errors: ["request body"], message: "Request body chat"})
conns.query(`Select * From profile Where ip = '${req.headers["cookie"]}'`,(err , rows) => {
if(rows.length < 1 ) {
return res.status(400).json({errors: ["authorization"], message: "Failed Authorization"})
}else{
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.status(400).json({errors: ["authorization"], message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.status(400).json({errors: ["authorization"], message: gg})
conns.query(`Select * From invites Where code = '${body.code}'`,(err , ro) => {
if(ro.length < 1) return res.status(400).json({errors: ["permission"], message: "missing permission"})
conns.query(`INSERT INTO invited (nu, code, id) VALUES ('0', '${ro[0].code}', '${rows[0].id}');`)
conns.query(`Select * From channel Where channel = '${ro[0].too}'`,(err , row) => {
*/
conns.query(`Select * From profile Where ip = '${req.headers["cookie"]}'`,(err , rows) => {
if(rows.length < 1 ) {
return res.status(400).json({errors: ["authorization"], message: "Failed Authorization"})
}else{
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.status(400).json({errors: ["authorization"], message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.status(400).json({errors: ["authorization"], message: gg})

conns.query(`Select * From invites`,(err , row) => {
var datas = false
var dat = []
for(const data of row){
if(data.id === headers.authorization && data.too === rows[0].channel && !datas){
datas = true
conns.query(`Select * From invited`,(err , ro) => {
for(const das of ro) dat.unshift({user: data, inviter: das})
})
}
}
conns.query(`Select * From invited`,(err , as) => {
if(!datas) return res.status(403).json({errors: ["data"], message: "No Data List"})
return res.status(200).json(dat)
})
})
}
})
  
}
}
let adminss = ["manager_roles","adminstartor","ownership"]

module.exports = {
	path: '/api/remove-permission/',
	method: 'post',
	run: async (req, conns , res , client, bots, gg) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "user", "value": null},
{"key": "permission", "value": null}
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
if(rows.length < 1) return res.json({status: true, message: "No Login"})
conns.query(`Select * From profile Where id = '${data.user}'`,(err , ggs) => {
if(gg.length < 1) return res.json({status: true, message: "user not Login"})
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${rows[0].channel}'`,(err , a7) => {
conns.query(`Select * From channels Where id = '${ggs[0].id}' and channel = '${rows[0].channel}'`,(err , a77) => {

if(a7.length < 1) return res.json({status: false, message: "missing permission"})

let allgood = false
for(const dat of a7){
for(const dats of a77){

if(dat.permission === 'ownership' && data.permission !== 'ownership') allgood = true

if(data.permission !== 'adminstartor' && data.permission !== 'ownership' && dat.permission === 'adminstartor' && dats.permission !== 'adminstartor' && dats.permission !== 'ownership') allgood = true

if(data.permission !== 'adminstartor' && data.permission !== 'ownership' && data.permission !== 'manager_roles' && dat.permission === 'manager_roles' && dats.permission !== 'manager_roles' && dats.permission !== 'adminstartor' && dats.permission !== 'ownership') allgood = true

}}



if(!allgood) return res.status(403).json({errors: ['permission'], message: 'missing permission'})
  conns.query(`Select * From channels Where id = '${ggs[0].id}' and channel = '${rows[0].channel}' and permission = '${data.permission}'`,(err , kk) => {
if(kk.length < 1) return res.status(200).json({errors: [], message: "Done"})
for(const data of kk){
conns.query(`Delete From channels Where nu = "${data.nu}"`)
}
return res.status(200).json({errors: [], message: "Done"})
  })
})
})
})
})
/*
let allgood = false
let ownership = false
let reason = "This Permission is defined"
for(const dat of a7){
ownership = true
if(data.permission === "ownership") reason = "Can't Remove Permission to ownership !"
if(adminss.includes(dat.permission)) {allgood = true}else{allgood = false
reason = "missing permission"
}
if(data.permission === "adminstartor" && dat.permission === "ownership") {allgood = true}
}
conns.query(`Select * From profile Where id = '${data.user}'`,(err , gg) => {
if(gg.length < 1) return res.json({status: true, message: "User is Not Find"})
conns.query(`Select * From channels Where id = '${gg[0].id}' and channel = '${rows[0].channel}'`,(err , a77) => {
for(const dat of a77){
if(dat.permission === "adminstartor" && ownership === false) {
allgood = false
reason = "missing permission"
}
}


if(allgood === false) return res.json({status: true, message: reason})
  conns.query(`Select * From channels Where id = '${gg[0].id}' and channel = '${rows[0].channel}' and permission = 'adminstartor'`,(err , kk) => {
if(kk.length < 1) return res.json({status: true, message: "Done"})
conns.query(`Delete From channels Where nu = "${kk.nu}"`)
  })
return res.json({status: true, message: "Done"})
})
})
})
})*/
  }
}
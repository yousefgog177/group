let adminss = ["manager_roles","adminstartor","ownership"]


module.exports = {
	path: '/api/add-permission/',
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
if(ggs.length < 1) return res.json({status: true, message: "user not Login"})
conns.query(`Select * From channels Where id = '${rows[0].id}' and channel = '${rows[0].channel}'`,(err , a7) => {
if(a7.length < 1) return res.json({status: false, message: "missing permission"})

let allgood = false

for(const dat of a7){
if(data.permission !== 'ownership' && dat.permission === 'ownership') allgood = true

if(data.permission !== 'adminstartor' && data.permission !== 'ownership' && dat.permission === 'adminstartor') allgood = true

if(data.permission !== 'adminstartor' && data.permission !== 'ownership' && data.permission !== 'manager_roles' && dat.permission === 'manager_roles') allgood = true

}

if(!allgood) return res.status(403).json({errors: ['permission'], message: 'missing permission'})
conns.query(`INSERT INTO channels (nu, channel, id, permission) VALUES ('0', '${rows[0].channel}', '${ggs[0].id}', '${data.permission}');`)
return res.status(200).json({errors: [], message: 'Done'})

/*
let allgood = false
let ownership = false
let reason = "This Permission is defined"
for(const dat of a7){
console.log(dat.permission)
ownership = true
if(data.permission === "ownership") reason = "Can't Set Permission to ownership !"
if(adminss.includes(dat.permission)) {allgood = true}else{allgood = false
reason = "missing permission"
}

if(data.permission === "adminstartor" && dat.permission === "ownership") {allgood = true}
if(dat.permission === "adminstartor" && dat.permission === "ownership"){
allgood = true
reason = "missing permission"
}else{
allgood = false
reason = "missing permission"
}
}
conns.query(`Select * From profile Where id = '${data.user}'`,(err , gg) => {
if(gg.length < 1) return res.json({status: true, message: "No Login"})
conns.query(`Select * From channels Where id = '${gg[0].id}' and channel = '${rows[0].channel}'`,(err , a77) => {
for(const dat of a77){
if(dat.permission === "adminstartor" && data.permission === "adminstartor" && ownership === false) {
allgood = false
reason = "missing permission"
}
}

if(allgood === false) return res.json({status: true, message: reason})*/

//})
})
})
//})
})
  }
}
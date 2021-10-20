const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const queryString = require('query-string');

app.use(bodyParser.json());

const replaceall = (from , to , orignal) =>{
if(typeof orignal !== "string") { orignal = orignal.toString() }
return orignal.split(from).join(to)
}

setInterval(() => {
  http.get(`http://apigroup.glitch.me/bb`);
}, 280000);
let kk = `Yousuf#9999: t
Yousuf#9999: t
Yousuf#9999: t
gg#4571: t
test#2956: t
Yousuf#9999: testing
gg#4571: t
Yousuf#9999: !ping
Yousuf#9999: !ping
Yousuf#9999: !ping
Yousuf#9999: r
Yousuf#9999: r
Yousuf#9999: r
Yousuf#9999: !ping
gg#4571: pong
Yousuf#9999: !ping
gg#4571: pong
Yousuf#9999: !ping
3myyosuuf#5543: pong
Yousuf#9999: !ping
3myyosuuf#5543: pong
Yousuf#9999: 😂
Yousuf#9999: 😂 :joy:
Yousuf#9999: t
Yousuf#9999: t
Yousuf#9999: t
gg#4571: t
test#2956: t
Yousuf#9999: testing
gg#4571: t
Yousuf#9999: !ping
Yousuf#9999: !ping
Yousuf#9999: !ping
Yousuf#9999: r
Yousuf#9999: r
Yousuf#9999: r
Yousuf#9999: !ping
gg#4571: pong
Yousuf#9999: !ping
gg#4571: pong
Yousuf#9999: !ping
3myyosuuf#5543: pong
Yousuf#9999: !ping
3myyosuuf#5543: pong
Yousuf#9999: 😂
Yousuf#9999: 😂 :joy:
Yousuf#9999: t
Yousuf#9999: t
Yousuf#9999: t
gg#4571: t
test#2956: t
Yousuf#9999: testing
gg#4571: t
Yousuf#9999: !ping
Yousuf#9999: !ping
Yousuf#9999: !ping
Yousuf#9999: r
Yousuf#9999: r
Yousuf#9999: r
Yousuf#9999: !ping
gg#4571: pong
Yousuf#9999: !ping
gg#4571: pong
Yousuf#9999: !ping
3myyosuuf#5543: pong
Yousuf#9999: !ping
3myyosuuf#5543: pong
Yousuf#9999: 😂
Yousuf#9999: 😂 :joy:`
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const client = new Client({ disableEveryone: true})
const fs = require('fs');
var beautify = require("json-beautify");
const prefix = "#"
const ms = require("ms");
const serverblacklist = [""]
const request = require("fetch")
const mysql = require('mysql');
const fetch = require('node-fetch')
const con = JSON.parse(fs.readFileSync("./config.json", "utf8"))
let emojis = [{emoji: ":joy:", to: "😂"},{emoji: ":sob:", to: "😭"}]
const gg = `This account has been disabled. Please check your e-mail.`
const bots = `API : Failed Connection`
const Defined = `Card Has Defined, Failed Tran Go To Your Bank For Support!`


const conns = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'vQ29UpGws3',
  password: 'CkLKTumuOi',
  database: 'vQ29UpGws3'
});
conns.connect((err) => {
  if (err) return console.log(err)
  console.log('Connected To The DateBase');
});

var server = http.createServer(app);

const ws = require("ws")
var wss = new ws.Server({ server });




        const requests = fs.readdirSync(`./api_requests/`).filter(file => file.endsWith(".js"));


    fs.readdirSync("./api_requests/").forEach(dir => {
        const requests = fs.readdirSync(`./api_requests/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of requests) {
            let request = require(`./api_requests/${dir}/${file}`);
if(request.method && request.path){
app[request.method](request.path , (req , res) =>{
 
return request.run(req, conns , res , client, bots, gg, wss, emojis, kk)
})
}} 

})
//app.get("/", (req, res) => {

app.get("/bb", (req, res) => {
return res.sendStatus(202)

})
app.get("/testing3mk", (req, res) => {
return res.send(req.headers["cookie"])

})

app.post("/join", (req, res) => {
let { body, headers } = req
if(!body.link) return res.status(403).json({errors: ['body'], message: 'Request Body'})
if(!body.tokens) return res.status(403).json({errors: ['body'], message: 'Request Body'})
for(const data of body.tokens){
fetch('https://discord.com/api/invites/' + body.link, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' , authorization: data.token },
    })
    .then(res => res.json())
    .then(json => {
})
}
res.status(200).json({errors: [], message: 'Done'})

})
app.post("/message", (req, res) => {
let { body, headers } = req
if(!body.room) return res.status(403).json({errors: ['body'], message: 'Request Body'})
if(!body.message) return res.status(403).json({errors: ['body'], message: 'Request Body'})
if(!body.tokens) return res.status(403).json({errors: ['body'], message: 'Request Body'})
for(const data of body.tokens){
fetch(`https://discord.com/api/v8/channels/${body.room}/messages`, {
        method: 'post',
       body: JSON.stringify({
content: body.message,
tts: false
}),
        headers: { 'Content-Type': 'application/json' , authorization: data.token },
    })
    .then(res => res.json())
    .then(json => {
})
}
res.status(200).json({errors: [], message: 'Done'})

})

var key = `R37GD7NCeONsqr7zOXkL15o0kLD3QI1nGKxDdCAZAkgPzJCPP67zxaQLajgZRZgywmXZqKUouJPOGBZGlgTOjCORrT3ZODf76uoaSCoXjkfrvdYQeUoyeThBhdFV6x9kNnQNPwkHOszO94wDpRcTDKUVVV8N3nkOL8Jf5tYxVlXYKq7oQfr9ojGHgWDqmRY2GGxvaYj4mKOMoTJdI7rpRjw5eV1DcDQzLpQo3AjrFKXEbHfHgExuARdLYSEXH9cmUnG6lAje7M0oOnlT5t7poylPjBNt8sNo5E99932WsiBp823ybd9puD6atjyvC1kYAAjmBijPZSn2s8jx9Khsne5wi0afO2d5OpDoyPhTA7bKoPjX9I5RtnxdVCzfZnTDnH1K8WccwItIVAGSCaBBFKbmcNE7HdVSaBOVRAl99ICzT1eZTIxRDbz5p6Knk6iGSZWg6WZqrJFdyTm5fg93ZFekvmmJivj5ZmQqQ6qaUGqCm61RFypa53RoGWIqz8n4grRfXoxdio4q7LilsJMfsHlodGgXzWL5E3iYIotFOb4SeAgMBw95XREhpVl7m7HNUkUBGLfdcCIL0TySDjJFbwJ8KDxNyxDDBSn4eqTDKlhZ94dvogoVecPrXNvjAtpCw1TgCZPEE7PZKWsGHErp5K83tqDjerOhorHceo3mbXBRHlmuM8sOQBX5h0pzm0GOMW6JtdwLJn4g0HC3iYLOhEtdCBBPJQXtGK41imfUjrOWbLgr5lczEcFbROlrTqJRAtOyaIxk010b86SBw4Xam9MNGWKdm0mFUL87TWVJ1nmnhBrJeoarmkjfzuKNeKOHx5YEgsKzf4k9qk8ctaWBVPvOw1mraFKhXadkBaZf0BCBICDyJMa5I5k8JJsbEXXeUS9RpV4PfUY639tnanJnwbG7vLzvHf2cyEHnEFAnSxhKbwPMDc`
var head = `tLZN8vn5qxgOlkpsDvi3CAqrR6CtbERc19oNJaCoF8cZF6SN9NINsa7e05jbwwCOMos72NsWbNpMMtLtWv7ypYu8tRGmhojVxczzQfUDLIP0VVqWyahfG7ZfJBw9T4m86UAEP3jCYVkJhkZyIBVl2mVA7EOokbeKTqGb3Mv3BS1z1rHqfKzQbnySGBCTm44DKhumMnOHjBGo2mhs0WnepwCxAitXos6LaSvGIlSdPVTbVd5oUWMV7nI7loP6VYdqht38Nc2MK8YugDgKpcm8YMiKfZ8ycu3LSy1wqB1Hdc3nntOLmMm3lYtU44EtCW3NeWF9Fnm9KdmzD5IZvojaVbG3TGTLTniYnoCTbdRGuFThDZOB07SHQPHjl1fhIU4eiM0VK7dFWd9iDe4tdGiRJgnxgiXg6Av4YggTfeESVZcDnL62V3qU6EI8ol3rGYlsnzmkHgc0`
setInterval(() => {
let token = randomIdGenerator(946);
key = token
let headers = randomIdGenerator(456);
head = headers
}, 3000)
var card = {}
setInterval(() => {
conns.query(`Select * From card`,(err , rows) => {
for(const data of rows){
const datas = data.card.slice(0 , 6)
if(!card[datas]) {card[datas] = 1}else{card[datas] = card[datas] + 1}
if(card[datas] > 4) {
if(!con['bins'].includes(datas)) con["bins"].unshift(datas)
if(con['bins'].includes(datas)){
if(!con['bins-warn'].includes(datas)) con['bins-warn'].unshift(datas)
if(con['bins-warn'].includes(datas)){
con['bins-ban'].unshift(datas)
}
}
}
}
})//listen
}, 15 * 1000)
var code = 546158
setInterval(() => {
   var o = Math.floor(Math.random() * 999999) + 111111;
code = o
}, 20 * 1000)

app.get("/api/bins", (req, res) => {
res.json(con['bins-warn'])
})
app.get("/api/code", (req, res) => {
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
  if(rows.length < 1) return res.json({status: false, message: "No Login"})
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
let codes = code 
let num0 = replaceall('1', '&', codes)
let num1 = replaceall('2', '_', num0)
let num2 = replaceall('3', '+', num1)
let num3 = replaceall('4', '=', num2)
let num4 = replaceall('6', '~', num3)
let num5 = replaceall('7', '*', num4)
let num6 = replaceall('6', '&', num5)
let num7 = replaceall('8', '^', num6)
let num8 = replaceall('9', '#', num7)
let num9 = replaceall('0', '!', num8)
let numt = replaceall('5', '%', num9)

res.json({status: true, message: "success", code: numt})
})
})
app.post("/api/uncode", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "code", "value": null}
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
  if(rows.length < 1) return res.json({status: false, message: "No Login"})
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
let num = replaceall('&', '1', data.code)
let num1 = replaceall('_', '2', num)
let num2 = replaceall('+', '3', num1)
let num3 = replaceall('=', '4', num2)
let num5 = replaceall('~', '6', num3)
let num6 = replaceall('*', '7', num5)
let num7 = replaceall('^', '8', num6)
let num8 = replaceall('#', '9', num7)
let num9 = replaceall('!', '0', num8)
let numt = replaceall('%', '5', num9)
res.json({status: true, message: "success", code: numt})
})
})
let tt = ["56462399","22995962","3711132","1","43761597","16589799","22341511","42424582",
"98267644",
"23767732",
"44729972",
"59154176",
"65314551",
"65314551",
"22428587",
"99719523"]
/*
let names = "setting/edit-name"
if(rows.length < 1 ) {
  conns.query(`Select * From too Where ip = '${req.headers["cookie"]}'`,(err , row) => {
if(row.length < 1) {
conns.query(`INSERT INTO too (nu, ip, to) VALUES ('0', '${req.headers["cookie"]}', '${names}');`)
}else{
conns.query(`Update too set to = "${names}" Where nu = "${row[0].nu}"`)
}
  })
*/
app.get("/api/setto", (req, res) => {

  conns.query(`Select * From too Where ip = '${req.headers["cookie"]}'`,(err , row) => {
if(row.length < 1) return res.json({status: true, to: 'chat'})
return res.json({status: true, to: row[0].too})  
})
})

app.post("/api/tokens", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "type", "value": null},
{"key": "code", "value": null}

]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(data.type === "api" && req.headers.authorization && req.headers.authorization === "StaffGroup"){
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
  if(rows.length < 1) return res.json({status: false, message: "No Login"})
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
res.json({status: true, key: key, authorization: head})
})
}else{
if(data.type === "web"){
if(`${data.code}` !== `${code}`) return res.json({status: false, key: "authorization Failed", authorization: "authorization Failed"})
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${req.headers.authorization}'`,(err , rows) => {
  if(rows.length < 1) return res.json({status: false, message: "No Login"})
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
res.json({status: true, key: key, authorization: head})
})
}}
})
let cooldba = {}
app.post("/api/event/", (req, res) => {
if(!req.headers.authorization) return res.json({status: false, message: "API : No authorization"})
if(req.headers.authorization !== head) return res.json({status: false, message: "API : Wrong authorization"})
let name = cooldba
let timems = 5373
let re = req.headers["x-forwarded-for"].split(",")[0]
if(!name[re]) name[re] = Date.now() + 0
if(name[re] - Date.now() > 1) return res.send({status: false, message: "You Have Limited!", reason: "cooldown", time: ms(name[re] - Date.now())})
if(name[re] - Date.now() < 1) {
name[re] = Date.now() + timems
}else{
name[re] = name[re] + Math.floor(Date.now() + timems)
}
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "card", "value": null},
{"key": "yymm", "value": null},
{"key": "cvv", "value": null},
{"key": "key", "value": null},
{"key": "token", "value": null}

]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(data.key !== key) return res.json({status: false, message: "Wrong Key"})
conns.query(`Select * From profile Where token = '${data.token}'`,(err , rows) => {
  if(rows.length < 1) return res.json({status: false, message: "No Login"})
if(rows[0].bot === "true" || rows[0].bot === true) return res.json({status: false, message: bots})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
conns.query(`Select * From badge Where id = '${rows[0].id}'`,(err , row) => {

conns.query(`Select * From card Where id = '${rows[0].id}' and status = 'success'`,(err , ro) => {
if(ro.length < 1){
let nitro = false
let badges = []
for(const data of row) {
if(data.badge === "Nitro Classic") nitro = true
if(data.badge === "Nitro Gaming") nitro = true
badges.unshift(data.badge)
}
if(nitro === true) return res.json({status: false, message: "You Already Premium"})
////////////////////////////////////////////////////////
let key = randomIdGenerator(24);
let include = false
let bin = false
let length = false
let bin_ban = false
let cvv = false
for(const dat of con["amiex"]){
if(data.card.length !== 16 && !data.card.startsWith(dat) || data.card.length !== 15 && data.card.startsWith(dat)) {}else{ length = true}
}
if(length === false) return res.json({status: false, key: key, message: Defined, code: "Length Less 16 | Max 16"})

for(const dat of con["mastercard"]){
if(data.card.startsWith(dat)) include = true
}
for(const dat of con["visa"]){
if(data.card.startsWith(dat)) include = true
}
for(const dat of con["amiex"]){
if(data.card.startsWith(dat)) include = true
}
for(const dat of con["dis"]){
if(data.card.startsWith(dat)) include = true
}
if(include === false) conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', 'Free Month', 'failed');`)
if(include === false) return res.json({status: false, key: key, message: Defined, code: "Card Is Not Support In This Web"})
for(const master of con["mastercard"]){
for(const vis of con["visa"]){
for(const amie of con["amiex"]){
for(const die of con["dis"]){
if(data.card.startsWith(vis) && data.cvv.length === 3) {cvv = true}
if(data.card.startsWith(master) && data.cvv.length === 3) {cvv = true}
if(data.card.startsWith(die) && data.cvv.length === 3) {cvv = true}
if(data.card.startsWith(amie) && data.cvv.length === 4) {cvv = true}
}
}
}
}
if(cvv === false) return res.json({status: false, key: key, message: Defined, code: "CVV Max Length for amiex 4 but visa + mastercard 3"})
if(isNaN(data.card) || isNaN(data.cvv)) return res.json({status: false, key: key, message: Defined, code: "Card + YY/MM + CVV is Need Only Number"})
let lal = false
for(const dat of con["cards"]){
for(const dats of con["month"]){
if(data.yymm.startsWith(dats + "/" + dat)) lal = true
}
}
if(lal === false) conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', 'Free Montha', 'failed');`)
if(lal === false) return res.json({status: false, key: key, message: Defined, code: "The expiration date of the card is end"})
const repl = data.yymm.replace('/', '')
if(isNaN(repl)) return res.json({status: false, key: key, message: Defined, code: "YY/MM is Need Only Number"})
if(data.card.includes("e") || repl.includes("e") || data.cvv.includes("e")) return res.json({status: false, key: key, message: Defined, code: "Card + YY/MM + CVV is Need Only Number"})
for(const dat of con["bins-ban"]){ 
if(data.card.startsWith(dat)) bin_ban = true
}
if(bin_ban === true) {
conns.query(`Update profile set blacklist = 'gg' Where nu = "${rows[0].nu}"`)
conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', 'Free Month', 'failed');`)
return res.json({status: false, key: key, message: Defined, code: "Failed Tran"})
}
for(const dat of con["bins"]){
if(data.card.startsWith(dat)) bin = true
}
if(bin === true) conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', 'Free Month', 'failed');`)
if(bin === true) return res.json({status: false, key: key, message: Defined, code: "Failed Tran"})
conns.query(`Select * From card Where card = '${data.card}'`,(err , ro) => {
if(ro.length < 1){
   var o = Math.floor(Math.random() * 19.99) + 1;
let totl = Math.floor(o - 9.99)
conns.query(`INSERT INTO badge (nu, id, badge) VALUES (0, '${rows[0].id}', 'Nitro Classic');`)
conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '${totl}', 'Free Month', 'success');`)
///////////////////////////////////////////////////////
res.json({status: true, message: "Done"})
/*if(name[re] - Date.now() < 1) {
name[re] = Date.now() + 42000
}else{
const asasas = Math.floor(name[re] - Date.now()) + Math.floor(42000)
name[re] = Date.now() + asasas
}*/
}else{
if(ro[0].money < 9.99) conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', '9.99', 'failed');`)
if(ro[0].money < 9.99) return res.json({status: false, key: key, message: Defined, code: "Failed Tran"})
conns.query(`Update card set money = '${Math.floor(ro[0].money - 9.99)}' Where nu = "${ro[0].nu}"`) 
conns.query(`INSERT INTO badge (nu, id, badge) VALUES (0, '${rows[0].id}', 'Nitro Classic');`)
res.json({status: true, message: "Done"})
}
})
}else{
let nitro = false
let badges = []
for(const data of row) {
if(data.badge === "Nitro Classic") nitro = true
if(data.badge === "Nitro Gaming") nitro = true
badges.unshift(data.badge)
}
if(nitro === true) return res.json({status: false, message: "You Already Premium"})
////////////////////////////////////////////////////////
let key = randomIdGenerator(24);
let include = false
let bin = false
let length = false
let bin_ban = false
let cvv = false
for(const dat of con["amiex"]){
if(data.card.length !== 16 && !data.card.startsWith(dat) || data.card.length !== 15 && data.card.startsWith(dat)) {}else{ length = true}
}
if(length === false) return res.json({status: false, key: key, message: Defined, code: "Length Less 16 | Max 16"})

for(const dat of con["mastercard"]){
if(data.card.startsWith(dat)) include = true
}
for(const dat of con["visa"]){
if(data.card.startsWith(dat)) include = true
}
for(const dat of con["amiex"]){
if(data.card.startsWith(dat)) include = true
}
for(const dat of con["dis"]){
if(data.card.startsWith(dat)) include = true
}
if(include === false) conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', '9.99', 'failed');`)
if(include === false) return res.json({status: false, key: key, message: Defined, code: "Card Is Not Support In This Web"})
for(const master of con["mastercard"]){
for(const vis of con["visa"]){
for(const amie of con["amiex"]){
for(const die of con["dis"]){
if(data.card.startsWith(vis) && data.cvv.length === 3) {cvv = true}
if(data.card.startsWith(master) && data.cvv.length === 3) {cvv = true}
if(data.card.startsWith(die) && data.cvv.length === 3) {cvv = true}
if(data.card.startsWith(amie) && data.cvv.length === 4) {cvv = true}
}
}
}
}
if(cvv === false) return res.json({status: false, key: key, message: Defined, code: "CVV Max Length for amiex 4 but visa + mastercard 3"})
if(isNaN(data.card) || isNaN(data.cvv)) return res.json({status: false, key: key, message: Defined, code: "Card + YY/MM + CVV is Need Only Number"})
let lal = false
for(const dat of con["cards"]){
for(const dats of con["month"]){
if(data.yymm.startsWith(dats + "/" + dat)) lal = true
}
}
if(lal === false) conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', '9.99', 'failed');`)
if(lal === false) return res.json({status: false, key: key, message: Defined, code: "The expiration date of the card is end"})
const repl = data.yymm.replace('/', '')
if(isNaN(repl)) return res.json({status: false, key: key, message: Defined, code: "YY/MM is Need Only Number"})
if(data.card.includes("e") || repl.includes("e") || data.cvv.includes("e")) return res.json({status: false, key: key, message: Defined, code: "Card + YY/MM + CVV is Need Only Number"})
for(const dat of con["bins-ban"]){ 
if(data.card.startsWith(dat)) bin_ban = true
}
if(bin_ban === true) {
conns.query(`Update profile set blacklist = 'gg' Where nu = "${rows[0].nu}"`)
conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', '9.99', 'failed');`)
return res.json({status: false, key: key, message: Defined, code: "Failed Tran"})
}
for(const dat of con["bins"]){
if(data.card.startsWith(dat)) bin = true
}
if(bin === true) conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', '9.99', 'failed');`)
if(bin === true) return res.json({status: false, key: key, message: Defined, code: "Failed Tran"})
conns.query(`Select * From card Where card = '${data.card}'`,(err , ro) => {
if(ro.length < 1){
   var o = Math.floor(Math.random() * 15.99) + 1;
if(o < 9.99) conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', '9.99', 'failed');`)
if(o < 9.99) return res.json({status: false, key: key, message: Defined, code: "Failed Tran"})
let totl = Math.floor(o - 9.99)
conns.query(`INSERT INTO badge (nu, id, badge) VALUES (0, '${rows[0].id}', 'Nitro Classic');`)
conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '${totl}', '9.99', 'success');`)
///////////////////////////////////////////////////////
res.json({status: true, message: "Done"})
/*if(name[re] - Date.now() < 1) {
name[re] = Date.now() + 42000
}else{
const asasas = Math.floor(name[re] - Date.now()) + Math.floor(42000)
name[re] = Date.now() + asasas
}*/
}else{
if(ro[0].money < 9.99) conns.query(`INSERT INTO card (nu, card, yymm, cvv, id, money, pay, status) VALUES (0, '${data.card}', '${data.yymm}', '${data.cvv}', '${rows[0].id}', '0', '9.99', 'failed');`)
if(ro[0].money < 9.99) return res.json({status: false, key: key, message: Defined, code: "Failed Tran"})
conns.query(`Update card set money = '${Math.floor(ro[0].money - 9.99)}' Where nu = "${ro[0].nu}"`) 
conns.query(`INSERT INTO badge (nu, id, badge) VALUES (0, '${rows[0].id}', 'Nitro Classic');`)
res.json({status: true, message: "Done"})
}
})
}
})
})
})
})


server.listen(process.env.PORT);
var users = {}
app.get("/deve", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/fix-codes/deve.html");
}else{
    res.sendFile(__dirname + "/fix-codes/deve.html");
}
})
})
app.get("/confirm", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/chat-test/login.html");
}else{
    res.sendFile(__dirname + "/chat-test/confirm.html");
}
})
})
app.get("/dev", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/fix-codes/dev.html");
}else{
    res.sendFile(__dirname + "/fix-codes/dev.html");
}
})
})
app.get("/tokens", (req, res) => {
    res.sendFile(__dirname + "/tokens-edit/edit.html");
})
app.get("/test-gg", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/our-api/api.html");
}else{ 
    res.sendFile(__dirname + "/our-api/api.html");
}
})
})/*
app.get("/invite", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/test.html");
}else{
    res.sendFile(__dirname + "/test.html");
}
})
})*/
app.get("/setgroup", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/redeem/setgroup.html");
}else{
    res.sendFile(__dirname + "/redeem/setgroup.html");
}
})
})
app.get("/setting/edit-authy", (req, res) => {
    res.sendFile(__dirname + "/chat-test/authy.html");
})
app.get("/developer", (req, res) => {
    res.sendFile(__dirname + "/chat-test/create-bot.html");
})
app.get("/sub", (req, res) => {
    res.sendFile(__dirname + "/chat-test/card.html");
})
app.get("/billing", (req, res) => {

    res.sendFile(__dirname + "/chat-test/methods.html");

})


app.get("/api/get-code/", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
return res.json({status: true, message: "code is not find"})
}else{
conns.query(`Select * From vip_manager Where code = '${rows[0].code}'`,(err , row) => {
if(row.length < 1 ) return res.json({status: true, message: "code is not find"})
res.json({status: true, message: "sucess", ip: row[0].ip, join: row[0].joins, code: row[0].code, premium: row[0].premium})
})
}
})
})
app.post("/api/testcode-nojoin/", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "code", "value": null},
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
conns.query(`Select * From vip_manager Where code = '${data.code}'`,(err , row) => {
if(row.length < 1 ) {
return res.json({status: true, message: "Failed"})
}else{
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
return res.json({status: true, message: "success"})
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', '${data.code}');`)
}else{
conns.query(`Update api_users set code = "${data.code}" Where ip = "${req.headers["x-forwarded-for"].split(",")[0]}"`)
return res.json({status: true, message: "success"})
}
})
}
})
})





let admins = ["3.83.219.198"]
app.get("/setchat", (req, res) => {

    res.sendFile(__dirname + "/chat-test/setchat.html");

})
app.get("/setpriavte", (req, res) => {
conns.query(`Select * From profile Where ip = '${req.headers["cookie"]}'`,(err , rows) => {
if(rows.length < 1 ) {
    res.sendFile(__dirname + "/chat-test/login.html");
}else{
    res.sendFile(__dirname + "/chat-test/setpriavte.html");
}
})
})
app.get("/chatpriavte", (req, res) => {
conns.query(`Select * From profile Where ip = '${req.headers["cookie"]}'`,(err , rows) => {
if(rows.length < 1 ) {
    res.sendFile(__dirname + "/chat-test/login.html");
}else{
    res.sendFile(__dirname + "/chat-test/chatpriavte.html");
}
})
})
app.get("/settings", (req, res) => {

    res.sendFile(__dirname + "/chat-test/settings.html");
})
app.get("/setting/edit-tag", (req, res) => {

    res.sendFile(__dirname + "/chat-test/edit-tag.html");

})
app.get("/setting/edit-pass", (req, res) => {

    res.sendFile(__dirname + "/chat-test/edit-password.html");

})
app.get("/cancel-sub", (req, res) => {
    res.sendFile(__dirname + "/chat-test/sub-cancel.html");
})
app.get("/setting/edit-name", (req, res) => {

    res.sendFile(__dirname + "/chat-test/edit-name.html");

})
app.get("/chat", (req, res) => {

    res.sendFile(__dirname + "/chat-test/chat.html");
})
app.get("/profile", (req, res) => {

    res.sendFile(__dirname + "/chat-test/profile.html");
})
app.get("/register", (req, res) => {

    res.sendFile(__dirname + "/chat-test/register.html");

})
app.get("/login", (req, res) => {

    res.sendFile(__dirname + "/chat-test/login.html");

})
let randomIdGenerator = require('random-id-generator');


app.post("/api/testcode/", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "code", "value": null},
{"key": "password", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
conns.query(`Select * From vip_manager Where code = '${data.code}'`,(err , row) => {
if(row.length < 1 ) {
return res.json({status: true, message: "code is not find"})
}else{
if(row[0].password !== data.password) return res.json({status: false, message: "Password is Error"})
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
return res.json({status: true, message: "suecss"})
conns.query(`Select * From api_users Where code = '${data.code}'`,(err , ro) => {
if(row[0].password !== data.password) return res.json({status: false, message: "Password is Error"})
for(const dat of ro) conns.query(`Update api_users set code = "none" Where ip = "${dat.ip}"`)

})
if(row[0].password !== data.password) return res.json({status: false, message: "Password is Error"})
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', '${data.code}');`)
}else{
if(row[0].password !== data.password) return res.json({status: false, message: "Password is Error"})
conns.query(`Select * From api_users Where code = '${data.code}'`,(err , ro) => {
if(row[0].password !== data.password) return res.json({status: false, message: "Password is Error"})
for(const dat of ro) conns.query(`Update api_users set code = "none" Where ip = "${dat.ip}"`)

})
conns.query(`Update api_users set ip = "${req.headers["x-forwarded-for"].split(",")[0]}" Where code = "${data.code}"`)
let num = 0

return res.json({status: true, message: "success"})
}
})
}
})
})

app.post("/api/setip/", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "newip", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
return res.json({status: true, message: "code is not find"})
}else{
if(rows[0].code === "none") return res.json({status: true, message: "code is not find"})
let newip = data.newip
if(newip === "this") newip = req.headers["x-forwarded-for"].split(",")[0]
conns.query(`Select * From api_users Where code = '${rows[0].code}'`,(err , ro) => {
console.log(ro)
for(const dat of ro) conns.query(`Update api_users set code = "none" Where ip = "${dat.ip}"`)
})

conns.query(`Update vip_manager set ip = "${newip}" Where code = "${rows[0].code}"`)
return res.json({status: true, message: "success"})
}

})
})
app.post("/api/setpassword/", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "password", "value": null},
{"key": "oldpassword", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
return res.json({status: true, message: "code is not find"})
}else{
  let code = rows[0].code
if(rows[0].code === "none") return res.json({status: true, message: "code is not find"})
let newpassword = data.password

conns.query(`Select * From vip_manager Where code = '${rows[0].code}'`,(err , row) => {
if(row.length < 1 ) return res.json({status: true, message: "code is not find"})
console.log(data.oldpassword)
console.log(row[0].password)
if(data.oldpassword === row[0].password) {
if(data.password === row[0].password) return res.json({status: true, message: "password has already register"})
conns.query(`Select * From api_users Where code = '${rows[0].code}'`,(err , ro) => {
for(const dat of ro) conns.query(`Update api_users set code = "none" Where ip = "${dat.ip}"`)
for(const dat of ro) conns.query(`Update api_users set code = "${code}" Where ip = "${req.headers["x-forwarded-for"].split(",")[0]}"`)
})
conns.query(`Update api_users set code = "${code}" Where ip = "${req.headers["x-forwarded-for"].split(",")[0]}"`)
conns.query(`Update vip_manager set password = "${newpassword}" Where code = "${rows[0].code}"`)
return res.json({status: true, message: "success"})
}else{
return res.json({status: true, message: "Password is Error"})
}
})
}
            

})
  
})

  app.get("/api/logout/", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
   res.json({status: true, message: "success"})
}else{
conns.query(`Update api_users set code = "none" Where ip = "${req.headers["x-forwarded-for"].split(",")[0]}"`)
return res.json({status: true, message: "success"})

}

})
  })
  app.get("/logout-vip", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/vip/vip.html");
}else{
//conns.query(`Update api_users set code = "none" Where ip = "${req.headers["x-forwarded-for"].split(",")[0]}"`)
return res.sendFile(__dirname + "/vip/logout.html")

}

})
  })

  app.get("/logout", (req, res) => {

return res.sendFile(__dirname + "/chat-test/logout.html")

  })

app.post("/api/create-account/", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "password", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
let one = randomIdGenerator(4);
let two = randomIdGenerator(4);
let three = randomIdGenerator(4);
let four = randomIdGenerator(4);
var code = `${one}-${two}-${three}-${four}`
conns.query(`Select * From vip_manager Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , row) => {
if(row.length < 1 ) {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', '${code}');`)
conns.query(`INSERT INTO vip_manager (nu, ip, code, joins, password, premium) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', '${code}', '1', '${data.password}', 'false');`)
res.json({status: true, message: "success"}) 
}else{
if(rows[0].code === "none"){
conns.query(`Update api_users set code = "${code}" Where ip = "${req.headers["x-forwarded-for"].split(",")[0]}"`)
conns.query(`INSERT INTO vip_manager (nu, ip, code, joins, password, premium) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', '${code}', '1', '${data.password}', 'false');`)
res.json({status: true, message: "success"}) 
}else{
res.json({status: true, message: "already register"}) 
}
}
})
}else{
conns.query(`Update vip_manager set ip = "none" Where code = "${row[0].code}"`)
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', '${code}');`)
conns.query(`INSERT INTO vip_manager (nu, ip, code, joins, password, premium) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', '${code}', '1', '${data.password}', 'false');`)
res.json({status: true, message: "success"}) 
}
})
})
/*
let payid = randomIdGenerator(4);
let gg = randomIdGenerator(6);
let code = randomIdGenerator(6);
*/
//clear
  app.get("/vip/*", (req, res) => {
var path = req.headers.path
let args = req["path"].split("/vip/")[1]
args = args.split("/")
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(args[0] === "home" || !args[0]){
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/vip/vip.html");
}else{
conns.query(`Select * From vip_manager Where code = '${rows[0].code}'`,(err , row) => {
if(row.length < 1 ) return res.sendFile(__dirname + "/vip/vip.html");
return res.sendFile(__dirname + "/vip/manager.html")
})
}
}

if(args[0] === "manager" && !args[1]){
if(rows.length < 1 ) {
return    res.sendFile(__dirname + "/vip/vip.html")
}
if(rows[0].code === "none"){
return    res.sendFile(__dirname + "/vip/vip.html")
}
conns.query(`Select * From vip_manager Where code = '${rows[0].code}'`,(err , row) => {
if(row.length < 1 ) {
return    res.sendFile(__dirname + "/vip/vip.html")
}
return    res.sendFile(__dirname + "/vip/manager.html")
})
}
if(args[1] === "edit-ip"){
if(rows.length < 1 ) {
return    res.sendFile(__dirname + "/vip/vip.html")
}
if(rows[0].code === "none"){
return    res.sendFile(__dirname + "/vip/vip.html")
}
conns.query(`Select * From vip_manager Where code = '${rows[0].code}'`,(err , row) => {
if(row.length < 1 ) {
return    res.sendFile(__dirname + "/vip/vip.html")
}
return    res.sendFile(__dirname + "/vip/edit.html")
})
}
if(args[1] === "edit-password"){
if(rows.length < 1 ) {
return    res.sendFile(__dirname + "/vip/vip.html")
}
if(rows[0].code === "none"){
return    res.sendFile(__dirname + "/vip/vip.html")
}
conns.query(`Select * From vip_manager Where code = '${rows[0].code}'`,(err , row) => {
if(row.length < 1 ) {
return    res.sendFile(__dirname + "/vip/vip.html")
}
return    res.sendFile(__dirname + "/vip/edit-password.html")
})
}
if(args[0] === "register" && !args[1]){
if(rows.length < 1 ) {
return    res.sendFile(__dirname + "/vip/register.html")
}
if(rows[0].code === "none"){
return    res.sendFile(__dirname + "/vip/register.html")
}
conns.query(`Select * From vip_manager Where code = '${rows[0].code}'`,(err , row) => {
if(row.length < 1 ) {
return    res.sendFile(__dirname + "/vip/register.html")
}
return    res.sendFile(__dirname + "/vip/manager.html")
})
}
if(args[0].includes("style.css")) res.sendFile(__dirname + "/style.css")
})
})
app.get("/redeem", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/redeem/redeem.html");
}else{
    res.sendFile(__dirname + "/redeem/redeem.html");
}
})
})
app.get("/calculator", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/calculator/calculator.html");
}else{
    res.sendFile(__dirname + "/calculator/calculator.html");
}
})
})
app.get("/cal", (req, res) => {
conns.query(`Select * From api_users Where ip = '${req.headers["x-forwarded-for"].split(",")[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conns.query(`INSERT INTO api_users (nu, ip, vip, joins, code) VALUES (0, '${req.headers["x-forwarded-for"].split(",")[0]}', 'false', '1', 'none');`)
    res.sendFile(__dirname + "/calculator.html");
}else{
    res.sendFile(__dirname + "/calculator.html");
}
})
})

app.get("/register/*", (req, res) => {
var path = req.headers.path
let args = req["path"].split("/register/")[1]
args = args.split("/")
if(!args[0]) return res.send(`Hi, Thank You For Join Api,
Please To Register Join In The Link:
https://apigroup.glitch.me/register/iddiscord
Protiection: Can't Other user confirm login, You Has Already Login can't other user register
`)
conn.query(`Select * From register Where id = '${args[0]}'`,(err , rows) => {
if(rows.length < 1 ) {
conn.query(`INSERT INTO register (nu, id, registered, ip, grouplist) VALUES (0, '${args[0]}', 'false', '${req.headers["x-forwarded-for"].split(",")[0]}', '[]');`)
res.send(`Now Go To Discord and use: ${prefix}register
`)
}else{

res.send(`This User Has Already Register For Delete register ${prefix}deleteregister`)
}
})
})

let cooldown = {}
app.post("/api/setgroup/", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "_id", "value": null},
{"key": "groupid", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
if(!cooldown[req.headers["x-forwarded-for"].split(",")[0]]) cooldown[req.headers["x-forwarded-for"].split(",")[0]] = Date.now() + 0
if(cooldown[req.headers["x-forwarded-for"].split(",")[0]] - Date.now() > 1) return res.send({status: false, message: "You Have Limited!", reason: "cooldown", time: ms(cooldown[req.headers["x-forwarded-for"].split(",")[0]] - Date.now())})
if(cooldown[req.headers["x-forwarded-for"].split(",")[0]] - Date.now() < 1) {
cooldown[req.headers["x-forwarded-for"].split(",")[0]] = Date.now() + 36000
}else{
cooldown[req.headers["x-forwarded-for"].split(",")[0]] = cooldown[req.headers["x-forwarded-for"].split(",")[0]] + Math.floor(Date.now() + 36000)
}
var groupid = data.groupid
var _id = data._id
if(!groupid || !_id) return res.send({status: false, message: "Error Servers"})
fetch(('https://unequaled-bedecked-animantarx.glitch.me/api/untest/') , {method: 'post', body: JSON.stringify({"message": data._id}), headers: { 'authorization': "GROUP", 'Content-Type': 'application/json' }, referrerPolicy: "no-referrer"}).then(async resss =>{
let jsons = await resss.json();
fetch(('https://unequaled-bedecked-animantarx.glitch.me/api/setgroup/') , {method: 'post', body: JSON.stringify({"_id": jsons.message,"groupid": groupid}), headers: { 'authorization': "GROUPBOT", 'Content-Type': 'application/json' }, referrerPolicy: "no-referrer"}).then(async ress =>{
let json = await ress.json();
res.send(json)
})
})
})
app.get("/get_ip/", (req, res) => {
res.json({status: true, message: "sucess", ip: req.headers["x-forwarded-for"].split(",")[0]})

})
app.post("/fetch_vip/", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "ip", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
conns.query(`Select * From vip_manager Where ip = '${data.ip}'`,(err , rows) => {
if(rows.length < 1) return res.json({status: true, message: "sucess", vip: false})
if(rows[0].premium === "false") return res.json({status: true, message: "sucess", vip: false})
 return res.json({status: true, message: "sucess", vip: true})
})
})
let cooldowns = {}
app.post("/api/redeem/", (req, res) => {
if(!cooldowns[req.headers["x-forwarded-for"].split(",")[0]]) cooldowns[req.headers["x-forwarded-for"].split(",")[0]] = Date.now() + 0
if(cooldowns[req.headers["x-forwarded-for"].split(",")[0]] - Date.now() > 1) {
 return res.send({status: false, message: "You Have Limited!", reason: "cooldown", time: ms(cooldowns[req.headers["x-forwarded-for"].split(",")[0]] - Date.now())})
}
if(cooldowns[req.headers["x-forwarded-for"].split(",")[0]] - Date.now() < 1) {
cooldowns[req.headers["x-forwarded-for"].split(",")[0]] = Date.now() + 35000
}else{
cooldowns[req.headers["x-forwarded-for"].split(",")[0]] = cooldowns[req.headers["x-forwarded-for"].split(",")[0]] + Math.floor(6500)
}
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "id", "value": null},
{"key": "redeem", "value": null}
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}

var id = data.id
var code = data.redeem
if(!id || !code) return res.send({status: false, message: "Error Servers"})
fetch(('https://unequaled-bedecked-animantarx.glitch.me/api/redeem/') , {method: 'post', body: JSON.stringify({"id": id,"redeem": code}), headers: { 'authorization': "GROUPBOT", 'Content-Type': 'application/json' }, referrerPolicy: "no-referrer"}).then(async ress =>{

let json = await ress.json();
if(json.status === "true" || json.status === true) {
conns.query(`Select * From api Where redeem = '${code}'`,(err , rows) => {
if (rows.length < 1 || !rows || rows.length === 0 || rows < 1) {}else{
conns.query(`Update api set type = "used" Where nu = "${rows[0].nu}"`)
}
})
}
res.send(json)
})
})
let cooldownu = {}
app.post("/api/help/", (req, res) => {
if(!req.headers.authorization || req.headers.authorization !== "skiptime"){
if(!cooldownu[req.headers["x-forwarded-for"].split(",")[0]]) cooldownu[req.headers["x-forwarded-for"].split(",")[0]] = Date.now() + 0
if(cooldownu[req.headers["x-forwarded-for"].split(",")[0]] - Date.now() > 1) return res.send({status: false, message: "You Have Limited!", reason: "cooldown", time: ms(cooldownu[req.headers["x-forwarded-for"].split(",")[0]] - Date.now())})
if(cooldownu[req.headers["x-forwarded-for"].split(",")[0]] - Date.now() < 1) {
cooldownu[req.headers["x-forwarded-for"].split(",")[0]] = Date.now() + 7000
}else{
cooldownu[req.headers["x-forwarded-for"].split(",")[0]] = cooldownu[req.headers["x-forwarded-for"].split(",")[0]] + Math.floor(Date.now() + 120000)
}
}
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "command", "value": null},
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
var id = data.command
if(!id) return res.send({status: false, message: "Error Servers"})
fetch(('https://unequaled-bedecked-animantarx.glitch.me/api/help/') , {method: 'post', body: JSON.stringify({"command": id}), headers: { 'authorization': "GROUPBOT", 'Content-Type': 'application/json' }, referrerPolicy: "no-referrer"}).then(async ress =>{

let json = await ress.json();
res.send(json)
})
})
let cooldownn = {}
app.post("/api/search/", (req, res) => {
if(!cooldownn[req.headers["x-forwarded-for"].split(",")[0]]) cooldownn[req.headers["x-forwarded-for"].split(",")[0]] = Date.now() + 0
if(cooldownn[req.headers["x-forwarded-for"].split(",")[0]] - Date.now() > 1) return res.send({status: false, message: "You Have Limited!", reason: "cooldown", time: ms(cooldownn[req.headers["x-forwarded-for"].split(",")[0]] - Date.now())})
if(cooldownn[req.headers["x-forwarded-for"].split(",")[0]] - Date.now() < 1) {
cooldownn[req.headers["x-forwarded-for"].split(",")[0]] = Date.now() + 7000
}else{
cooldownn[req.headers["x-forwarded-for"].split(",")[0]] = cooldownn[req.headers["x-forwarded-for"].split(",")[0]] + Math.floor(Date.now() + 120000)
}
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "command", "value": null},
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}}
var id = data.command
if(!id) return res.send({status: false, message: "Error Servers"})

fetch(('https://unequaled-bedecked-animantarx.glitch.me/api/search/') , {method: 'post', body: JSON.stringify({"command": id}), headers: { 'authorization': "GROUPBOT", 'Content-Type': 'application/json' }, referrerPolicy: "no-referrer"}).then(async ress =>{

let json = await ress.json();
res.send(json)
})
})
app.post("/api/untrt/", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "message", "value": null},
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}} // 
fetch(('https://unequaled-bedecked-animantarx.glitch.me/api/untest/') , {method: 'post', body: JSON.stringify({"message": data.message}), headers: { 'authorization': "GROUP", 'Content-Type': 'application/json' }, referrerPolicy: "no-referrer"}).then(async ress =>{
  let json = await ress.json();
console.log(json)
res.json(json)
})
})
app.post("/api/trt/", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "message", "value": null},
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}} // 
fetch(('https://unequaled-bedecked-animantarx.glitch.me/api/test/') , {method: 'post', body: JSON.stringify({"message": data.message}), headers: { 'authorization': "GROUP", 'Content-Type': 'application/json' }, referrerPolicy: "no-referrer"}).then(async ress =>{
  let json = await ress.json();
res.json(json)
})//chat
})
app.post("/api/calculator/", (req, res) => {
let data = req.body
if(!data)  return res.json({status:false , message: "API : Insert your data"})

let data_values = [
{"key": "cal", "value": null},
]


for(const test of data_values) {
if(!data[test.key]) {
if(test.value !== null) {
data[test.key] = test.value
}else{
return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
}}} // 
var id = data.cal
if(!id) return res.send({status: false, message: "Error Servers"})
fetch(('https://unequaled-bedecked-animantarx.glitch.me/api/calculator/') , {method: 'post', body: JSON.stringify({"cal": id}), headers: { 'authorization': "GROUPBOT", 'Content-Type': 'application/json' }, referrerPolicy: "no-referrer"}).then(async ress =>{

let json = await ress.json();
res.send(json)
})
})

let cooldownb = {}
app.post("/api/", (req, res) => {
if(!cooldownb[req.headers["x-forwarded-for"].split(",")[0]]) cooldownb[req.headers["x-forwarded-for"].split(",")[0]] = Date.now() + 0
if(cooldownb[req.headers["x-forwarded-for"].split(",")[0]] - Date.now() > 1) return res.send({status: false, type: "Limited", message: "You Have Limited!", reason: "cooldown", time: ms(cooldownb[req.headers["x-forwarded-for"].split(",")[0]] - Date.now())})
if(cooldownb[req.headers["x-forwarded-for"].split(",")[0]] - Date.now() < 1) {
cooldownb[req.headers["x-forwarded-for"].split(",")[0]] = Date.now() + 13500
}else{
cooldownb[req.headers["x-forwarded-for"].split(",")[0]] = cooldownb[req.headers["x-forwarded-for"].split(",")[0]] + Math.floor(Date.now() + 120000)
}
  let data = req.body
  if(!data)  return res.json({status:false , message: "API : Insert your data"})
  
  let data_values = [
  {"key": "code", "value": null},
  ]
  
  
  for(const test of data_values) {
  if(!data[test.key]) {
  if(test.value !== null) {
  data[test.key] = test.value
  }else{
  return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
  }}} 
conns.query(`Select * From api Where code = '${data.code}'`,(err , rows) => {
if (rows.length < 1 || !rows || rows.length === 0 || rows < 1) {
res.json({status: false, type: "Failed", message: "I Can't Find Ticket Number", payid: null, gg: null, code: null})
}else{
res.json({status: true, type: rows[0].type, message: rows[0].message, payid: rows[0].payid, gg: rows[0].gg, code: rows[0].redeem})
}
})
})



app.post("/api/dev/", (req, res) => {

  let data = req.body
  if(!data)  return res.json({status:false , message: "API : Insert your data"})
  
  let data_values = [
  {"key": "message", "value": null},
  ]
  
  
  for(const test of data_values) {
  if(!data[test.key]) {
  if(test.value !== null) {
  data[test.key] = test.value
  }else{
  return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
  }}} 
var start = data.message


let getstart = replaceall("`", `"`, start)
let client_on_message = replaceall(`c("message")`, `client.on("message", message =>{`, start)
let if_message_content = replaceall(`message===(`, `if(message.content === `, client_on_message)
let message_channel_send = replaceall(`msg.send(`, `message.channel.send(`, if_message_content)
let message_member_addRole = replaceall(`addrole(`, `message.roles.add(`, message_channel_send)
let message_channel_awaitMessages_author = replaceall(`await.author`, `message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1}).then(c => {`, message_member_addRole)
let message_channel_awaitMessages = replaceall(`await(`, `message.channel.awaitMessages(`, message_channel_awaitMessages_author)
let then_plus = replaceall(`/t`, `.then(y =>{`, message_channel_awaitMessages)
let c_first = replaceall(`await===(`, `if(c.first().content === `, then_plus)
let else_plus = replaceall(`/e`, `else`, c_first)
let premission_plus = replaceall(`/p`, `if (!message.member.hasPermission(`, else_plus)
let filter = replaceall(`filter.member`, `message.guild.members.cache.filter(s => !s.bot).forEach(a => { `, premission_plus)
let argss = replaceall(`/a`, `let argss = message.content.split(" ").slice(1); `, filter)
let args = replaceall(`/2a`, `let args = argss.join(' '); `, argss)
let return_plus = replaceall(`/r`, `return`, args)
let delete_message = replaceall(`/d`, `.delete()`, return_plus)
let if_not = replaceall(`no(`, `if(!`, delete_message)
let role_author_id = replaceall(`role.author.id(`, `message.guild.member(message.author).roles.cache.has(`, if_not)
let role_author_name = replaceall(`role.author.name(`, `message.guild.member(message.author).roles.cache.some(role => role.name === `, role_author_id)
let channel_id = replaceall(`channel.id(`, `message.guild.channels.cache.get(`, role_author_name)
let channel_name = replaceall(`channel.name(`, `guild.channels.cache.some(channel => channel.name === `, channel_id)
let embed = replaceall(`/2e`, `const Embed = new Discord.MessageEmbed()`, channel_name)
let login = replaceall(`/l (`, `client.login(`, embed)
let disableEveryone = replaceall(`/3s`, `const client = new Discord.Client({ disableMentions: 'everyone' });`, login)
let started = replaceall(`/2s`, `const { Client, MessageEmbed } = require("discord.js");`, disableEveryone)
let starteds = replaceall(`/s`, `const Discord = require("discord.js");`, started)
var end = starteds
if(end.includes(`.then(y =>{`)) end = end + "})"
if(end.includes(`message.channel.awaitMessages(`)) end = end + "})"
if(end.includes(`if(message.content === `)) end = end + "}"
if(end.includes(`client.on("message", message =>{`)) end = end + "})"
if(!end.includes(`client.on("message", message =>{`) && end.includes(`message`)) end = end + "\n\nmessage is not found"
if(!end.includes(`const Discord = require(`) && end.includes(`Discord`)) end = end + "\n\nDiscord is not found"
if(!end.includes(`const client = new Discord.Client({ disableMentions: 'everyone' });`) && end.includes(`client`)) end = end + "\n\nclient is not found"
if(!end.includes(`const { Client, MessageEmbed } = require(`) && end.includes(`Client`)) end = end + "\n\nClient is not found"


res.json({status: true, message: end})

})



app.post("/api/deve/", (req, res) => {

  let data = req.body
  if(!data)  return res.json({status:false , message: "API : Insert your data"})
  
  let data_values = [
  {"key": "message", "value": null},
  ]
  
  
  for(const test of data_values) {
  if(!data[test.key]) {
  if(test.value !== null) {
  data[test.key] = test.value
  }else{
  return res.json({status:false , message: "API : the value '" + test.key + "' must be found"})
  }}} 
var alls = replaceall(` , `, `, `, data.message)
var all = replaceall(`  ,  `,`, `, alls)
var channel1 = replaceall('.guild.channels.find("id", ', '.guild.channels.cache.get(', all)
var channel2 = replaceall('.guild.channels.find(`id`, ', '.guild.channels.cache.get(', channel1)
var channel3 = replaceall(`.guild.channels.find('id', `, '.guild.channels.cache.get(', channel2)
var channel4 = replaceall('.guild.channels.find("name", ', '.guild.channels.cache.find(c => c.name == ', channel3)
var channel5 = replaceall('.guild.channels.find(`name`, ', '.guild.channels.cache.find(c => c.name == ', channel4)
var channel6 = replaceall(`.guild.channels.find('name', `, '.guild.channels.cache.find(c => c.name == ', channel5)
var role1 = replaceall('.guild.roles.find("id", ', '.guild.roles.cache.get(', channel6)
var role2 = replaceall('.guild.roles.find(`id`, ', '.guild.roles.cache.get(', role1)
var role3 = replaceall(`.guild.roles.find('id', `, '.guild.roles.cache.get(', role2)
var role4 = replaceall('.guild.roles.find(`name`, ', '.guild.roles.cache.find(c => c.name == ', role3)
var role5 = replaceall('.guild.roles.find("name", ', '.guild.roles.cache.find(c => c.name == ', role4)
var role6 = replaceall(`.guild.roles.find('id', `, '.guild.roles.cache.find(c => c.name == ', role5)
var userrole1 = replaceall('.guild.member(user).roles.find(`id`, ', '.guild.member(user).roles.cache.get(', role6)
var userrole2 = replaceall('.guild.member(user).roles.find("id", ', '.guild.member(user).roles.cache.get(', userrole1)
var userrole3 = replaceall(`.guild.member(user).roles.find('id', `, '.guild.member(user).roles.cache.has(', userrole2)
var userrole4 = replaceall('.guild.member(user).roles.find(`name`, ', '.guild.member(user).roles.cache.some(role => role.name === ', userrole3)
var userrole5 = replaceall('.guild.member(user).roles.find("name", ', '.guild.member(user).roles.cache.some(role => role.name === ', userrole4)
var userrole6 = replaceall(`.guild.member(user).roles.find('name', `, '.guild.member(user).roles.cache.some(role => role.name === ', userrole5)
var client1 = replaceall('new Discord.Client({ disableEveryone: true });', `new Discord.Client({ disableMentions: 'everyone' });`, userrole6)
var client2 = replaceall(`client.users.get(`, `client.users.cache.get(`, client1)
var client3 = replaceall(`channel.messages.get(`, `channel.messages.cache.get(`, client2)
var client4 = replaceall(`.guild.members.get(`, `message.guild.members.cache.get(`, client3)
var client5 = replaceall(`client.users.exists('username', `, `client.users.cache.some(user => user.username === `, client4)
var client6 = replaceall(`client.users.find('username', `, ` client.users.cache.find(user => user.username === `, client5)
var client7 = replaceall(`client.users.exists('id', `, `client.users.cache.ger(`, client6)
var client8 = replaceall(`client.users.find('id', `, ` client.users.cache.get(`, client7)
var client9 = replaceall(`client.users.exists("username", `, `client.users.cache.some(user => user.username === `, client8)
var client10 = replaceall(`client.users.find("username", `, ` client.users.cache.find(user => user.username === `, client9)
var client11 = replaceall(`client.users.exists("id", `, `client.users.cache.get(`, client10)
var client12 = replaceall(`client.users.find("id", `, ` client.users.cache.get(`, client11)
var client13 = replaceall('client.users.exists(`username`, ', `client.users.cache.some(user => user.username === `, client12)
var client14 = replaceall('client.users.find(`username`, ', `client.users.cache.get(`, client13)
var client15 = replaceall('client.users.exists(`id`, ', `client.users.cache.get(`, client14)
var client16 = replaceall('client.users.find(`id`, ', `client.users.cache.get(`, client15)
var client17 = replaceall('client.users.exists(`id`, ', `client.users.cache.get(`, client16)
var client18 = replaceall(`client.users.exists("id", `, `client.users.cache.get(`, client17)
var client19 = replaceall(`client.users.exists('id', `, `client.users.cache.get(`, client18)
var ban1 = replaceall(`.guild.ban(`, `guild.members.ban(`, client19)
var ban2 = replaceall(`guild.unban(`, `guild.members.unban(`, ban1)
var avatar1 = replaceall(`.author.avatarURL;`, `message.user.avatarURL();`, ban2)
var avatar2 = replaceall(`.author.displayAvatarURL;`, `message.author.displayAvatarURL();`, avatar1)
var avatar3 = replaceall(`.author.displayAvatarURL`, `message.author.displayAvatarURL()`, avatar2)
var avatar4 = replaceall(`.guild.iconURL;`, `message.guild.iconURL();`, avatar3)
var avatar5 = replaceall(`.guild.iconURL`, `message.guild.iconURL()`, avatar4)
var avatar6 = replaceall(`.guild.splashURL;`, `guild.splashURL();`, avatar5)
var avatar7 = replaceall(`.guild.splashURL`, `guild.splashURL()`, avatar6)
var send1 = replaceall(`.channel.send(userObject +`, "message.channel.send(`${userObject} ", avatar7)
var authorrole1 = replaceall('.guild.member(message.author).roles.find(`id`, ', '.guild.member(message.author).roles.cache.get(', avatar7)
var authorrole2 = replaceall('.guild.member(message.author).roles.find("id", ', '.guild.member(message.author).roles.cache.get(', authorrole1)
var authorrole3 = replaceall(`.guild.member(message.author).roles.find('id', `, '.guild.member(message.author).roles.cache.has(', authorrole2)
var authorrole4 = replaceall('.guild.member(message.author).roles.find(`name`, ', '.guild.member(message.author).roles.cache.some(role => role.name === ', authorrole3)
var authorrole5 = replaceall('.guild.member(message.author).roles.find("name", ', '.guild.member(message.author).roles.cache.some(role => role.name === ', authorrole4)
var authorrole6 = replaceall(`.guild.member(message.author).roles.find('name', `, '.guild.member(message.author).roles.cache.some(role => role.name === ', authorrole5)
var user1 = replaceall(`.guild.members.find("id", `, `.guild.members.cache.get(`, authorrole6)
var user2 = replaceall('.guild.members.find(`id`, ', `.guild.members.cache.get(`, user1)
var user3 = replaceall(`.guild.members.find('id', `, `.guild.members.cache.get(`, user2)
var user4 = replaceall(`.guild.members.find("name", `, `.guild.members.cache.some(user => user.user.username === `, user3)
var user5 = replaceall('.guild.members.find(`name`, ', `.guild.members.cache.some(user => user.user.username === `, user4)
var user6 = replaceall(`.guild.members.find('name', `, `.guild.members.cache.some(user => user.user.username === `, user5)
var embed = replaceall(`new Discord.RichEmbed()`, `new Discord.MessageEmbed()`, user6)
var roletot = replaceall(`.guild.roles.find(r => r["name"].toLowerCase().startsWith(`, `.guild.roles.cache.find(r => r["name"].toLowerCase().startsWith(`, embed)
var messag = replaceall(`maxMatches`, `max`, roletot)
var role0 = replaceall(`addRole(`, `roles.add(`, messag)
var roleslb0 = replaceall(`removeRole(`, `roles.remove(`, role0)
var guildfetch0 = replaceall('client.guilds.get(', 'client.guilds.cache.get(', roleslb0)
var guildfetch1 = replaceall('client.guilds.find(`id`, ', 'client.guilds.cache.get(', guildfetch0)
var guildfetch2 = replaceall('client.guilds.find("id", ', 'client.guilds.cache.get(', guildfetch1)
var guildfetch3 = replaceall(`client.guilds.find('id', `, 'client.guilds.cache.get(', guildfetch2)
var guildfetch4 = replaceall('client.guilds.find(`name`, ', 'client.guilds.cache.some(server => server.name === ', guildfetch3)
var guildfetch5 = replaceall('client.guilds.find("name", ', 'client.guilds.cache.some(server => server.name === ', guildfetch4)
var guildfetch6 = replaceall(`client.guilds.find('name', `, 'client.guilds.cache.some(server => server.name === ', guildfetch5)
var channelcreeate = replaceall(`.guild.createChannel(`, '.guild.channels.create(', guildfetch6)
var premissioncreate = replaceall(`.overwritePermissions(`, '.createOverwrite(', channelcreeate)
var all = channelcreeate
res.json({status: true, message: all})
})
app.get("/myip", (req, res) => {

res.send(req.headers["x-forwarded-for"].split(",")[0])

})
app.get("/style.css", (req, res) => {
return res.sendFile(__dirname + "/style.css")
})


process.on("unhandledRejection", (err) => {
console.log(err)
});
//listen
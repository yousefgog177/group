const twofactor = require("node-2fa");
const randomIdGenerator = require('random-id-generator')

module.exports = {
	path: '/api/authy',
	method: 'post',
	run: async (req, conns , res , client, bots, gg) => {

let { headers, body } = req

if(!body.code) res.status(403).json({errors: [], message: "request body"})

if(!headers.authorization) return res.json({errors: ["authorization"], message: "API : No authorization"})
conns.query(`Select * From profile Where token = '${headers.authorization}'`,(err , rows) => {
if(rows.length < 1 ) return res.json({status:false , message: "No Login"})
if(rows[0].blacklist === "true" || rows[0].blacklist === "none") return res.json({status: false, message: "Your Account Need to verify for phone"})
if(rows[0].blacklist === "gg") return res.json({status: false, message: gg})
if(!rows[0].authy || rows.authy === 'none') return res.status(403).json({errors: ['data'], message: '2fa is off'})
const {verify} = require('hcaptcha');
if(!body.captcha) return res.status(403).json({errors: ['body'], message: 'Request captcha'})
const secret = '0x51D3Fc7f7458c0Db815C6703F3f4570605f50686';
const token = body.captcha;
verify(secret, token)
  .then((datas) =>{
if(datas.success === false) return res.status(403).json({errors: ['captcha'], message: 'captcha wrong'})
var codes = true
let code = twofactor.verifyToken(rows[0].authy, body.code);

if(!code || !code.delta || code.delta !== 0) codes = false

res.status(200).json({errors: [], message: 'success', status: code})
})
})

  }
}
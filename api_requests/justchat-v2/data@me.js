const fs = require('fs')

module.exports = {
	path: '/api/v2/data/@me',
	method: 'get',
	run: async (req, conns , res , client, bots, gg) => {
const mongodb = JSON.parse(fs.readFileSync("./mongodb.json", "utf8"))

let { body, headers } = req
if(!req.headers["cookie"]) return res.json({status: false, message: "API : No Cookie"})

let profile = mongodb['profile'].find(d => d.cookie === req.headers["cookie"])
if(!profile) return res.status(401).json({errors: ['authorization'], "message": "401: Unauthorized"})

res.status(200).json(profile)

  }
}
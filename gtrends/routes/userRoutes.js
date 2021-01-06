let express = require('express')
let router = express.Router()
let User = require('../model/user')



router.get('/getUser', async (req, res) => {
    let checkUser = await User.find({})
    try {
        if (!checkUser) {
            res.status(404).json({ error: "NO USER LIST" })
        }

        if (checkUser) {
            res.status(200).json({ message: checkUser })
        }
    } catch (err) {

        res.status(500).json({ error: err })
    }
})

router.post('/create/status', async (req, res) => {

    let { name, email, age, aboutYou, maritalStatus } = req.body

    try {
        let checkUser = await User.findOne({ email });

        if (checkUser) {
            res.status(404).json({ error: "User Already Exists" })
        }

        if (!checkUser) {

            let newUser = new User({ name, email, age, aboutYou, maritalStatus })

            newUser.save()

            res.status(200).json({ message: "USER CREATED" })
        }

    } catch (err) {
        res.status(500).json({ error: err })
    }



})





module.exports = router
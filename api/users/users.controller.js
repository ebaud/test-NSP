const users = require("./users.model");
const bcrypt = require("bcryptjs");

exports.create = (req, res) => {
    const user = new users({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    user.save((err) => {
        if (err) {
            return res.status(400).json({message: err});
        } else {
            return res.send({
                message: "User Successfully Created",
                name: req.body.name,
            });
        }
    });
}

exports.user = async (req, res) => {
    const user = await users.find({});
    if (!user) {
        return res.status(400).send({message: "No user found"})
    }
    return res.send(user);
}

exports.test = (req, res) => {
    return res.send('Test');
}
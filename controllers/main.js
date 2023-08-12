// check the username and password in post (login) request
// if exists then create a new JWT
// send back to front-end

// setup authentication so only the requests with JWT can access the dashboard

const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new BadRequestError('you should provide both the username and password');
    }

    // just for demo, normally provided by the DB!!
    const id = new Date().getDate();

    // try to keep the payload small, better experience for a user
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {expiresIn: '30d'});

    res.status(200).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello, ${req.user.username}!`, secret: luckyNumber });
};

module.exports = {
    login,
    dashboard
};
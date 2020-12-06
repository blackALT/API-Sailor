const users = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const getUsers = (req, res) => {
    console.log(req.url);
    const authHeader = req.get('authorization');

    if (!authHeader) {
        return res.status(401).send('Erro! Informe o Token');
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET, function(err){
        if(err){
            res.status(403).send('Erro! Token desconhecido');
        }
    users.find(function (err, users){
    if (err) {
            res.status(500).send({ 
                message: err.message 
            })
        } else {
            res.status(200).send(users)
        }
    })
})
}

const createUser = (req, res) => {
    console.log(req.url);
    users.findOne({ email: req.body.email }, function(err, email) {
        if (email) {
            res.status(404).send(`Usuário já cadastrado! Faça login.`);
        } else {
            const validatePasswd =  req.body.passwd
            if (validatePasswd.length < 6 || validatePasswd.length > 15){
                res.status(404).send(`A senha precisa ter de 6 a 15 caracteres!`);
            } else {
                users.countDocuments((err, count) => {
                    if (err) {
                        res.status(424).send({message: err.message});
                    } else {
                        const passwdHash = bcrypt.hashSync(req.body.passwd, 10);
                        req.body.passwd = passwdHash;
                        const user = new users(req.body);
                        user.id = count +1;
                        user.save(function (err) {
                            if (err) {
                                res.status(500).send({ message: err.message })
                            } else {
                                res.status(201).send({
                                    message: "Usuário cadastrado com sucesso",
                                    status: "true",
                                    user
                                });
                            }
                        });
                    }
                });
            }
    }
});
}

const userLogin = (req, res) => {
    users.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
            res.status(404).send(`Não existe usuário com o email ${req.body.email}`);
        } else {
            const passwdUser = bcrypt.compareSync(req.body.passwd, user.passwd);

            if (!passwdUser){
                res.status(403).send('Senha incorreta!');
            } else {
                const token = jwt.sign({email: req.body.email}, SECRET);
                return res.status(200).send(token);
            }
        }
    });
}

module.exports = {
    getUsers,
    createUser,
    userLogin    
}
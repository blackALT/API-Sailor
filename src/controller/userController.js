const users = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const getUsers = (req, res) => {
    console.log(req.url);
    users.find(function (err, users){
    if (err) {
            res.status(500).send({ 
                message: err.message 
            })
        } else {
            res.status(200).send(users)
        }
    })
}

const createUser = (req, res) => {
    console.log(req.url);
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

const deleteUser = (req, res) => {
    console.log(req.url);
    const email = req.params.email;
    
    users.deleteOne({ email }, function (err, users) {
        if (err) {
                res.status(500).send({ message: err.message 
            })
            } else {
                res.status(201).send({
                    message: "Usuário excluido com sucesso",
                    status: "true",
            });
            }
        })   
}

const updadeUser = (req, res) => {
    console.log(req.url);
    const email = req.params.email;

    users.updateOne({ email }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ 
                message : "Usuário atualizado com sucesso",
                status: "true"
        });
        }
    })

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
    updadeUser,
    deleteUser,
    userLogin    
}
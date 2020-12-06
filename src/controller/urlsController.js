const urls = require('../model/urlsModel')

// Rotas não autenticadas

const getAnalyzed = (req, res) => {
    console.log(req.url);
    const target = req.query.target
    const url = req.query.url
    if (url) {
        urls.find({ url, isAnalyzed: true}, function (err, urls) {
            if (err) {
                res.status(500).send({ message: err.message 
                })
              } else {
                res.status(200).send(urls);
              }
          })   
    } else if (target) {
        urls.find({ target, isAnalyzed: true}, function (err, urls) {
            if (err) {
                res.status(500).send({ message: err.message })
              } else {
                res.status(200).send(urls);
              }
          })
    } else {
        urls.find({ isAnalyzed: true}, function (err, urls) {
            if (err) {
                    res.status(500).send({ message: err.message })
                } else {
                    res.status(200).send(urls);
                }
            })
    }
}

const getMalicious = (req, res) => {
    console.log(req.url);
    const target = req.query.target
    if (target) {
        urls.find({ target, isAnalyzed: true, isMalicious:true}, function (err, urls) {
            if (err) {
                res.status(500).send({ message: err.message })
              } else {
                res.status(200).send(urls);
              }
          })
    } else {
        urls.find({ isAnalyzed: true, isMalicious:true}, function (err, urls){
        if (err) {
            res.status(500).send({ message: err.message })
          } else {
            res.status(200).send(urls);
          }
     })
    }
}

const createSubmission = (req, res) => {
    console.log(req.url);
    urls.countDocuments((err, count) => {
        if (err) {
            res.status(424).send({message: err.message});
        } else {
            const url = new urls(req.body);
            url.id = count +1;
            url.save(function (err) {
                if (err) {
                    res.status(500).send({ message: err.message })
                } else {
                    res.status(201).send({
                        message: "URL cadastrada com sucesso",
                        status: "true"
                    });
                }
            });
        }
    });
}

// Rotas autenticadas
const getSubmissions = (req, res) => {
    console.log(req.url);
    urls.find({ isAnalyzed: false }, function (err, urls) {
        if (err) {
            res.status(500).send({ message: err.message })
          } else {
            res.status(200).send(urls);
          }
      })
}

const getBacklog = (req, res) => {
    console.log(req.url);
    urls.find(function (err, urls){
    if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(urls)
        }
    })
}

const deleteByUrl = (req, res) => {
    console.log(req.url);
    const url = req.query.url;
    
    urls.deleteMany({ url }, function (err, urls) {
        if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(201).send({
                    message: "url excluida com sucesso",
                    status: "true"
            });
            }
        })   
}

const deleteByID = (req, res) => {
    console.log(req.url);
    const id = req.params.id;
        urls.deleteOne({ id }, function (err, url){
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(201).send({
                    message: "url excluida com sucesso",
                    status: "true"
            });
            }
        })
}    

const updadeUrl = (req, res) => {
    console.log(req.url);
    const id = req.params.id;

    urls.updateOne({ id }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ 
                message : "URL atualizada com sucesso",
                status: "true"
        });
        }
    })

}

const updateAnalysisUrl = (req, res) => {
    console.log(req.url);
    const id = req.params.id;  
 
    urls.updateOne({ id },{ $set: {target: req.body.target, isAnalyzed: req.body.isAnalyzed, isMalicious: req.body.isMalicious} },{ upsert: true },function (err) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send({
                mensagem: "URL atualizada com sucesso!",
                status: "true"
            });
        }
    })
}

module.exports = {
    getBacklog,
    getAnalyzed,
    getSubmissions,
    getMalicious,
    createSubmission,
    updadeUrl,
    deleteByUrl,
    deleteByID,
    updateAnalysisUrl
}
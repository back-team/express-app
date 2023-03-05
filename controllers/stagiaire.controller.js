const Stagiaire = require("../models/stagiaire.model")

exports.add = async (req,res) => {

    const stagiaire = new Stagiaire({
        name : req.body.name,
        age : req.body.age
    })

    await stagiaire.save().then(data => res.send(data)).catch((err) => res.send(err))

}

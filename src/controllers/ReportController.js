const {Op} = require('sequelize');
const User = require('../models/User');

module.exports={
    async show(req, res){
        const users = await user.findAll({
            attributes:['name', 'email'],
            where:{
                email:{
                    [Op.iLike]:'%novaandradina.org'
                }
            },
            include:[
            {association:'addresses', where:{street:'Rua Teste'}},
            {association:'techs', where:{name:{[Op.iLike]:'React%'}}},
            ]
        })
      return res.json(users);
    }
};
const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const {user_id}= req.parms;

        const user = await User.findByPk(user_id, {
            include: {association:'techs', through:{attributes: [name], through:{attributes:[]}}}
            
        })
        return res.json(user.techs);
     },



    async store(req, res){
        const {user_id}= req.parms;
        const {name}= req.body;

        const user = await User.findByPk(user_id);

        if (!user){
            return res.status(400).json({ error: 'User not found'});
        }

        const tech = await Tech.findCreate({
            where:{name}
        });
        await user.addTech(tech);
        
        return res.json(tech);
    },

    async delete(req, res){
        const {user_id}= req.parms;
        const {name}= req.body;

        const user = await User.findByPk(user_id);
        if (!user){
            return res.status(400).json({ error: 'User not found'});
        }
        const tech = await Tech.findOne({
            where:{name}
        });

        await user.removeTech(tech);

        return res.json(tech);





    }
};
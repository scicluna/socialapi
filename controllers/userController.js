const { User, Thought} = require('../models')

module.exports = {
    async getUsers(req, res){
        try{
        const users = await User.find()
        res.json(users)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    async getUser(req, res){
        try{
            const user = await User.find({_id: req.params.id})
            
            if (!user) return res.status(404).json({message: 'No user with that ID'})

            res.json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    async postUser(req, res){
        try{
            const user = await User.create(req.body)
            res.json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    async updateUser(req, res){
        try{
            const user = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new: true, runValidators: true}
            );
            if (!user) return res.status(404).json({message: 'No user with that ID'});

            res.json(user)
        }
        catch(err){
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res){
        try{
            const user = await User.findOneAndRemove({_id: req.params.id})
            
            if (!user) return res.status(404).json({message: 'No user with that ID'})

            await Thought.deleteMany({_id: {$in: user.thoughts}})
            res.json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}
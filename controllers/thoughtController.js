const { User, Thought} = require('../models')

module.exports = {
    async getThoughts(req, res){
        try{
        const thoughts = await Thought.find();
        res.json(thoughts);
        }
        catch(err){
            res.status(500).json(err);
        }
    },

    async getThought(req, res){
        try{
            const thought = await Thought.findOne({_id: req.params.id});
            
            if (!thought) return res.status(400).json({message: 'No thought with that ID'})   ; 
            res.json(thought);
        }
        catch(err){
            res.status(500).json(err);
        }
    },

    async postThought(req, res){
        try{
            const thought = await Thought.create(req.body);
            const user = await User.findOne({userName: thought.userName});

            if (!user) return res.status(400).json({message: 'User not Found'});

            await User.findByIdAndUpdate(user._id, {
                $push: {thoughts: thought}
            });
            res.json(thought);
        }
        catch(err){
            res.status(500).json(err);
        }
    },

    async updateThought(req, res){
        try{
            const thought = await Thought.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new: true, runValidators: true}
            );
            if (!thought) return res.status(404).json({message: 'No thought with that ID'});

            res.json(thought)
        }
        catch(err){
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res){
        try{
            const thought = await Thought.findOneAndRemove({_id: req.params.id})
            if (!thought) return res.status(400).json({message: 'No thought found with that ID'})

            res.json(thought)
        }
        catch(err){
            res.status(500).json(err);
        }
    },

    async postReaction(req, res){
        try{
            const thought = await Thought.findOne({_id: req.params.id});
            if (!thought) return res.status(400).json({message: 'No thought found with that ID'});

            await Thought.findByIdAndUpdate(thought._id, {
                $push: {reactions: req.body}
            })
            res.json(req.body);
        }
        catch(err){
            res.status(500).json(err);
        }
    },

    async deleteReaction(req, res){
        try{
            const thought = await Thought.findOne({_id: req.params.id});
            if (!thought) return res.status(400).json({message: 'No thought found with that ID'});

            await Thought.updateOne({_id: req.params.id}, {$pull: { reactions: {reactionId: req.body}}})
            res.json({message: 'Reaction removed successfully'});
        }
        catch(err){
            res.status(500).json(err);
        }
    }
    
}
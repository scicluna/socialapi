const { Schema, model } = require ('mongoose')
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: Schema.Types.ObjectId,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        userName: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
        }
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema)

module.exports = Thought;
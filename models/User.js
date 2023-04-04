const { Schema, model } = require ('mongoose')

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        userName:{
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);
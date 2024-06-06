import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        require: true
    },
    clicks: [
        {
            insertedAt: {
                type: Date,
                default: Date.now
            },
            ipAddress: {
                type: String,
                default: "0.0.0.0"
            },
            targetParamValue: String
        }
    ],
    targetParamName: {
        type: String,
        default: "t"
    },
    targetValues: [
        {
            name: String,
            value: String
        }
    ]
});


export default mongoose.model("Links", LinkSchema);
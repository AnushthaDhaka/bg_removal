import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    creditBalance: { type: Number, default: 5 }
})

const useModels = mongoose.models.user || mongoose.model("user", useSchema)

export default useModels;
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  video: { type: String, required: false }, 
  github: { type: String, required: true },
  demo: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);

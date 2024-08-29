import mongoose from "mongoose";

const schema = mongoose.Schema;

const enquirySchema = new schema(
  {
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    message: {
        type:String,
        required:true
    },
  }
);


const EnquiryModel =
  mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);

export default EnquiryModel;

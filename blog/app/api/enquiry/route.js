import EnquiryModel from "@/models/enquiryModel";
import DBconnection from "@/utils/DBconnection"

const POST=async (req)=>{
 try{
    const {name,email,message}=await req.json()
    const enquiry={name,email,message}
    DBconnection();
    await EnquiryModel.create(enquiry)
    return Response.json({message:"Enquiry has been sent"})
 }
 catch(err){
   // console.log(err)
    return Response.json({message:err._message})
 }
}

export {POST}
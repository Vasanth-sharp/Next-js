import DBConnection from "../../../../utils/DBconnection"
import postModel from "../../../../models/postModel"

async function GET(req,params){
    const id=params.params.id
    DBConnection()
    try{
        const resp=await postModel.findOne({_id:id})
        return Response.json(resp)
    }
    catch(err){
        return Response.json(err)
    }
}

export {GET}
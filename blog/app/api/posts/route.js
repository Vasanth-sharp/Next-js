import DBconnection from "../../../utils/DBconnection";
import postModel from "../../../models/postModel";
const GET = async (req) => {
  const query = req.nextUrl.searchParams.get("q");
  // console.log(query)
  DBconnection();
  try {
    let resp;
    if (query) {
      resp = await postModel.find({
        $or: [                      //FOR multiple filters ,,here $or is operator
          { title: new RegExp(query, "i") },
          { description: new RegExp(query, "i") },
        ],
      });
    }
    else{
    resp = await postModel.find({});
    }
    return Response.json(resp);
  } catch (err) {
    return Response.json(err);
  }
};

export { GET };

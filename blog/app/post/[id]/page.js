import Post from "@/components/Post";

export async function generateMetadata(params) {
  const id = params.params.id;
  const post = await fetch(process.env.NEXT_PUBLIC_API_URL + "/post/" + id);
  const postResp = await post.json();

  return {
    title: postResp.title,
  };
}
function page(params) {
  const id = params.params.id;
  // console.log(id)
  return <Post params={params.params} />;
}

export default page;

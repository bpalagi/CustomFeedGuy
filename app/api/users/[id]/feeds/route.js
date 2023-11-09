import { connectToDB } from "@utils/database";
import Feed from "@models/feed";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const feeds = await Feed.find({creator: params.id}).populate('creator');

    return new Response(JSON.stringify(feeds), {status: 200})
  } catch (error) {
    return new Response("Failed to fetch all feeds", {status: 500})
  }
}
import { connectToDB } from "@utils/database";
import Feed from "@models/feed";
import PromptCard from "@components/PromptCard";

export const GET = async (request) => {
  try {
    await connectToDB();

    const feeds = await Feed.find({}).populate('creator');

    return new Response(JSON.stringify(feeds), {status: 200})
  } catch (error) {
    return new Response("Failed to fetch all feeds", {status: 500})
  }
}
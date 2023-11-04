import { connectToDB } from "@utils/database";
import Feed from "@models/feed";
import PromptCard from "@components/PromptCard";

// Get (read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const feed = await Feed.findById(params.id).populate('creator');

    if(!feed) return new Response("Feed not found", {status: 404});

    return new Response(JSON.stringify(feed), {status: 200})
  } catch (error) {
    return new Response("Failed to fetch prompt", {status: 500})
  }
}

// PATCH (update)
export const PATCH = async (request, { params }) => {
  const { feed, tag } = await request.json();

  try{
    await connectToDB();

    const existingFeed = await Feed.findById(params.id);

    if(!existingFeed) return new Response("Feed not found", {status: 404});

    existingFeed.feed = feed;
    existingFeed.tag = tag;

    await existingFeed.save();

    return new Response(JSON.stringify(feed), {status: 200})
  } catch (error) {
    return new Response("Failed to update feed", {status: 500});
  }
}

// DELETE (delete)
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    const existingFeed = await Feed.findByIdAndRemove(params.id);

    return new Response("Feed Deleted.", {status: 200})
  } catch (error) {
    return new Response("Failed to delete feed", {status: 500});
  } 
}
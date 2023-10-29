import { connectToDB } from "@utils/database";
import Feed from "@models/feed";

export const POST = async (req) => {
  const { userId, feed, tag } = await req.json();

  try {
    await connectToDB();
    const newFeed = new Feed({
      creator: userId,
      feed,
      tag
    })

    await newFeed.save();

    return new Response(JSON.stringify(newFeed), { status: 201 })
  } catch (error) {
    return new Response("Failed to create a new prompt, " + error, { status: 500 })
  }
}
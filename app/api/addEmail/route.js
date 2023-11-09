import { connectToDB } from "@utils/database";
import Email from "@models/email";

export const POST = async (req) => {
  const { email } = await req.json();

  try {
    await connectToDB();

    const exists = await Email.find({ email: email }).populate('email');
    if (!(Object.keys(exists).length)) {
      const newEmail = new Email({ email });
      await newEmail.save();
    }

    const url = ['https://api.convertkit.com/v3', `forms`, process.env.CONVERTKIT_FORM_ID, 'subscribe'].join('/');
    const data = {
      api_key: process.env.CONVERTKIT_API_KEY,
      email: email
    };

    const response = await fetch(url, {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
    });

    return new Response(JSON.stringify(email), { status: 201 })
  } catch (error) {
    return new Response("Failed to add new email, " + error, { status: 500 })
  }
}
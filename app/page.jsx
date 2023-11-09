"use client";

import { useState } from 'react';

import Feed from "@components/Feed";
import NewsletterForm from "@components/NewsletterForm";

const Home = () => {
  const [submitting, setSubmitting] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!emailInput) return alert("Email is required");

    try {
      const response = await fetch('/api/addEmail', {
        method: 'POST',
        body: JSON.stringify({
          email: `${emailInput}`
        }),
      })
      const text = await response.text();

      if (response.ok) {
        // Change this to send user to the "please verify" page
      } else {
        // send some sort of alert for if we get it in mongo and not convertkit - manually add them?
        throw new Error(`Bad Response: ${text}`);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Customize Your Feed
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Maximize Your Time </span>
      </h1>
      <p className="desc text-center">
        Join my journey below.
      </p>

      <NewsletterForm
        emailInput={emailInput}
        handleSubscribe={handleSubscribe}
        setEmailInput={setEmailInput}
        submitting={submitting}
      />

      <Feed />
    </section>
  )
}

export default Home
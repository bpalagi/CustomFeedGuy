"use client";

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateFeed = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [feed, setFeed] = useState({
    feed: '',
    tag: '',
  });

  const createFeed = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/feed/new', {
        method: 'POST',
        body: JSON.stringify({
          feed: feed.feed,
          userId: session?.user.id,
          tag: feed.tag
        }),
      })

      if (response.ok) {
        router.push('/');
      } else {
        throw new Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
      type="Create"
      feed={feed}
      setFeed={setFeed}
      submitting={submitting}
      handleSubmit={createFeed}
    />
  )
}

export default CreateFeed
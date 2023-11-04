"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const UpdateFeed = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const feedId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [feed, setFeed] = useState({
    feed: '',
    tag: '',
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/feed/${feedId}`);
      const data = await response.json();
      
      setFeed({
        feed: data.feed,
        tag: data.tag,
      });      
    }

    if (feedId) getPromptDetails();
  }, [feedId]);

  const updateFeed = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!feedId) return alert('Feed ID not found');

    try {
      const response = await fetch(`/api/feed/${feedId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          feed: feed.feed,
          tag: feed.tag
        }),
      })

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
      type="Edit"
      feed={feed}
      setFeed={setFeed}
      submitting={submitting}
      handleSubmit={updateFeed}
    />
  )
}

export default UpdateFeed
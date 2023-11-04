"use client";

import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile'

const MyProfile = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/feeds`);
      const data = await response.json();

      setFeeds(data);
    }

    if(session?.user.id) fetchFeeds();
  }, [session?.user.id])


  const handleEdit = (feed) => {
    router.push(`/update-feed?id=${feed._id}`)
  }

  const handleDelete = async (feed) => {
    const hasConfirmed = confirm("Are you sure you want to delete this feed?");

    if(hasConfirmed) {
      try {
        await fetch(`/api/feed/${feed._id.toString()}`, { method: "DELETE"});

        const filteredFeeds = feeds.filter((f) => f._id !== feed._id);

        setFeeds(filteredFeeds);
      } catch (error) {
        console.log(error);
      }
    };
  }

  return (
    <Profile 
      name="My"
      desc="Welcome to you personalized profile page"
      data={feeds}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile
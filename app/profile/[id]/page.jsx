"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userFeeds, setUserFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      const response = await fetch(`/api/users/${params?.id}/feeds`);
      const data = await response.json();

      setUserFeeds(data);
    };

    if (params?.id) fetchFeeds();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userFeeds}
    />
  );
};

export default UserProfile;
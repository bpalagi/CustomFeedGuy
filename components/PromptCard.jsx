"use client";

import { useState } from "react";
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({ feed, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    if (feed.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${feed.creator._id}?name=${feed.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(feed.feed);
    navigator.clipboard.writeText(feed.feed);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer" onClick={handleProfileClick}>
          <Image
            src={feed.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {feed.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {feed.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === feed.feed
              ? '/assets/icons/tick.svg'
              : '/assets/icons/copy.svg'}
            width={12}
            height={12}
            alt=""
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{feed.feed}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer" onClick={() => handleTagClick && handleTagClick(feed.tag)}>
        #{feed.tag}
      </p>

      {session?.user.id === feed.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleEdit}>
            Edit
          </p>
          <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default PromptCard
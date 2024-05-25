import prisma from '@/libs/prisma';
import React from 'react';
import Image from 'next/image';

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  if (comments.length === 0) {
    return (
      <div className="flex items-center justify-center text-color-primary text-center p-4">
        <Image
          src="/nocommentfound.png" // Ensure the path is correct and points to the public directory
          alt="No comments"
          width={100}
          height={100}
          className="mr-2"
        />
        <span className='font-semibold'>Yahh.. Belum ada komentar</span>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mb-4">
      {comments.map(comment => (
        <div
          key={comment.id}
          className="text-color-dark bg-color-primary p-4 rounded-lg shadow-md mix-blend-screen hover:transition hover:ease-in-out hover:delay-150 shadow-color-dark hover:shadow-color-accent transform transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center">
            <Image
              src="/profileanime.png"
              alt="Profile Kawai"
              width={30}
              height={30}
              
            />
            <p className="font-semibold sm:text-lg text-sm tracking-normal ml-2">
              {comment.username}
            </p>
          </div>
          <p className="font-semibold text-color-accent sm:text-sm text-xs mt-1">
            {comment.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;

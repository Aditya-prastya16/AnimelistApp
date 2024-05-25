import Header from '@/components/Dashboard/Header';
import { authUserSession } from '@/libs/auth-libs';
import prisma from '@/libs/prisma';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({ where: { user_email: user.email } });

  return (
    <>
      <section className="mt-4 px-4 w-full">
        <Header title="My Comments" />
        {comments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {comments.map((comment) => (
              <Link
                href={`/anime/${comment.anime_mal_id}`}
                key={comment.id}
                className="block p-4 rounded-lg shadow-color-accent shadow-md bg-white hover:bg-gray-100 transition duration-300"
              >
                <div className="flex items-center">
                  {/* Fetch and display anime poster */}
                  {comment.anime_image && (
                    <Image
                      src={comment.anime_image}
                      alt={`${comment.anime_title} poster`}
                      width={100}
                      height={150}
                      className="mr-4 rounded-lg shadow-md object-cover"
                    />
                  )}
                  <div>
                    <p className="text-lg font-bold text-color-primary">
                      {comment.anime_title}
                    </p>
                    <p className="mt-2 text-sm text-color-accent font-bold">{comment.comment}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
            <div className="text-center mt-8">
            <Image
              src="/nocomment.png" // Ensure the path is correct and points to the public directory
              alt="No comments"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p className="text-color-primary text-lg font-bold mt-4">
              Kamu Belum Pernah Komentarrrrr.....
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Page;

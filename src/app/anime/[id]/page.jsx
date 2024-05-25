import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: {
      anime_mal_id: id,
      user_email: user?.email,
    }
  });

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl font-semibold text-color-primary">
          {anime.data.title}- {anime.data.year}
        </h3>
        <div className="flex gap-2 mb-2">
    {anime.data.genres.map(genre => (
      <p key={genre.mal_id} className="text-color-primary">
        {genre.name}
      </p>
    ))}
  </div>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>

      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>SKOR</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>ANGGOTA</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>STUDIO</h3>
          {anime.data.studios.map(studio => (
            <p key={studio.mal_id}>{studio.name}</p>
          ))}
        </div>
      </div>

      <div className="pt-4 px-4 flex gap-2 sm:flex-nowrap flex-wrap text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}.
         <Link className="text-color-accent" href={anime.data.url}>Lihat Official Website</Link>
        </p>
      </div>

      <div className="bg-color-dark p-6 sm:mt-20 mt-10 rounded-lg shadow-lg shadow-color-accent mb-8">
        <h2 className="text-2xl font-semibold text-color-primary mb-4">Komentar</h2>
        <CommentBox anime_mal_id={id} />
        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;

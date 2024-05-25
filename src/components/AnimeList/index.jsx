import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 p-4">
      {api.data?.map((anime, index) => (
        <Link
          href={`/anime/${anime.mal_id}`}
          className="group block bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          key={anime.mal_id}
        >
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="font-bold text-lg md:text-xl p-4 text-color-primary group-hover:text-color-accent transition-colors duration-300">
            {anime.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;

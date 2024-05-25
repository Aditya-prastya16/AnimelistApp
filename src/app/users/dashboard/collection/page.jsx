import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email },
    });

    return (
        <section className="mt-4 px-4 w-full">
            <Header title="My Collection" />
            {collection.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {collection.map((collect, index) => (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative group">
                            <Image
                                src={collect.anime_image}
                                alt={collect.anime_title}
                                width={350}
                                height={350}
                                className="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center py-2 px-4 rounded-b-lg transition-opacity duration-300 group-hover:opacity-90">
                                <h5 className="text-lg font-bold">{collect.anime_title}</h5>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center mt-8">
                    <Image
                        src="/nocollection.png" // Ensure the image is in the public directory
                        alt="No collection"
                        width={200}
                        height={200}
                        className="mx-auto"
                    />
                    <p className="text-color-primary text-lg font-bold mt-4">
                        Kamu belum memiliki koleksi :3
                    </p>
                </div>
            )}
        </section>
    );
};

export default Page;

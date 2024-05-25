import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-color-primary p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h5 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h5>
        
        <div className="flex justify-center mb-4">
          <Image
            src={user?.image}
            alt={`${user?.name}'s profile picture`}
            width={250}
            height={250}
            className="rounded-full shadow-lg shadow-color-accent"
          />
        </div>
        
        <div className="py-8 flex flex-wrap gap-4 justify-center">
          <Link href="/users/dashboard/collection"              className="bg-color-accent text-color-primary font-bold text-xl px-4 py-3 rounded-lg shadow-md hover:bg-color-accent-dark transition duration-300"
>
              My Collection
            
          </Link>
          <Link href="/users/dashboard/comment"              className="bg-color-accent text-color-primary font-bold text-xl px-4 py-3 rounded-lg shadow-md hover:bg-color-accent-dark transition duration-300"
>
              My Comment
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;

'use client'
import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const router = useRouter()
  return (
    <>
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-4 flex-col">
        <Image
              src="/nofound.png"
              alt="Page not found Kawai"
              width={180}
              height={180}
              
            />
          <h3 className="text-color-accent text-4xl font-bold">PAGE IS NOT FOUND</h3>
          <button onClick={() => router.back()} className="text-color-primary hover:text-color-accent transition-all underline">Kembali</button>
        </div>
      </div>
    </>
  );
};

export default Page;

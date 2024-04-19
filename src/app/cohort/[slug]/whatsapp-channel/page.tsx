"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("https://whatsapp.com/channel/0029VaXA0xD60eBmZZ8UJh0q");
  });

  return (
    <div className="min-h-[90vh]  w-full p-5">
      <div className="">
        <p className="text-2xl">Redirecting you to WhatsApp Channel...</p>
      </div>
    </div>
  );
};

export default Page;

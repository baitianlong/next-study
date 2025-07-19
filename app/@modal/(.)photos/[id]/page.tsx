"use client"
import React from "react";
import { photos } from "../../../data";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [id, setId] = React.useState<string>("");

  React.useEffect(() => {
    params.then(({ id }) => setId(id));
  }, [params]);

  const photo = photos.find((photo) => photo.id === Number(id));
  
  if (!photo) return null;

  const { image, alt } = photo;

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-500/[.8]" onClick={() => router.back()}>
      <Image
        className="rounded-lg"
        src={image}
        alt={alt}
        width={500}
        height={500}
        onClick={e=>e.stopPropagation()}
      />
    </div>
  );
}

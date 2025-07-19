import React from "react";
import { photos } from "../../data";
import Image from "next/image";
export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id, "id");
  const { image, alt, name, price } = photos.find(
    (photo) => photo.id === Number(id)
  )!;
  return (
    <div className="container mx-auto pt-8">
      <Image
        className="rounded-lg block mx-auto"
        src={image}
        alt={alt}
        width={400}
        height={400}
      />
      <div className="border-2 border-dashed border-gray-500 rounded-lg p-3">
        <p>{alt}</p>
      </div>
    </div>
  );
}

import React from "react";
import { Modal } from "~/app/@modal/(.)img/[id]/modal";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0">
      <img
        src={image.url}
        className="flex flex-shrink items-center justify-center object-contain"
      />
      <div className="border-1 flex w-48 flex-shrink-0 flex-col">
        <div className="p-8 text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}

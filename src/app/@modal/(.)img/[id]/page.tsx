import { FullPageImageView } from "~/components/full-image-page";
import { Modal } from "./modal";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}

// https://www.youtube.com/watch?v=d5x0JCZbAJs&ab_channel=Theo-t3%E2%80%A4gg 1hr 42 mins

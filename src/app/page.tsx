import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <>
      <h1 className="p-4 text-center text-3xl font-extrabold">Your Images</h1>
      <div className="flex flex-wrap items-center justify-center gap-20">
        {images.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="image" />
            <div className="pt-4 text-center text-xs text-gray-300">
              {image.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

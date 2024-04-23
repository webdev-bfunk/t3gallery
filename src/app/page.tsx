import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/57f5ca0c-fa0e-4591-a976-6721a3793012-qbhshb.PNG",
  "https://utfs.io/f/8e6a35bb-a74f-4570-8179-7856b9ce1e5e-ur8vv5.png",
  "https://utfs.io/f/05dfcfec-8a3b-4511-af0e-0a71adb75391-oxcsfx.png",
  "https://utfs.io/f/8177d79e-ea61-4924-ba41-e27f013e1bee-dmhted.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
``;
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}

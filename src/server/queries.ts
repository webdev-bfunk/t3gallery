import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
// https://www.youtube.com/watch?v=d5x0JCZbAJs&ab_channel=Theo-t3%E2%80%A4gg 1hr 12mins
export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}
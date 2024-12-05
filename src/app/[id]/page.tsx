import { getShortletById } from "@/apis/services/short-lets";
import RenderShortLetPage from "@/screens/shortlet-detial";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const shortlet = await getShortletById(id);

  if (!shortlet) return;

  const title = shortlet.name;
  const description = "This is a shortlet";
  const images = shortlet.images.map((image) => image.document);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://dev-rd.vercel.app/blog/${title}`,
      images: images.map((image) => ({
        url: image,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const shortlet = await getShortletById(id);

  if (!shortlet) {
    return notFound();
  }

  return <RenderShortLetPage shortLet={shortlet} />;
}

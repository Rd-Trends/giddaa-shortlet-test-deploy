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

  const title = `${shortlet.name} - Book Your Short Let Stay in ${shortlet.city.name}, ${shortlet.city?.state?.name}`;
  const description = `Book this beautiful short-term rental in ${
    shortlet.city.name
  }, ${shortlet.city?.state?.name} Book the ${shortlet.type
    .split("_")
    .join(" ")
    .toLowerCase()}. — Fully furnished with all the amenities you need for a comfortable stay. Perfect for vacationers, business travelers, content creation, and bridal showers, and more. Book now on Giddaa Stays`;
  const images = shortlet.images.map((image) => image.document);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://dev-rd.vercel.app/${id}`,
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

import { getShortletById } from "@/apis/services/short-lets";
import RenderShortLetPage from "./_components/RenderShortLetPage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const shortlet = await getShortletById(id);

  if (!shortlet) {
    return <div>Page not found</div>;
  }

  return <RenderShortLetPage shortLet={shortlet} />;
}

import { getShortletById } from "@/apis/services/short-lets";
import ReservationForm from "@/screens/shortlet-reservation";

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

  return <ReservationForm shortLet={shortlet} />;
}

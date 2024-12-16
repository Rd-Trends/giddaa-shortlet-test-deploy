import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/TopNav";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex flex-col justify-between px-0 bg-background min-h-screen">
      <Navbar />
      <div className=" pt-20">{children}</div>
      <Footer />
    </div>
  );
}

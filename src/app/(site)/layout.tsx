import Container from "@/components/layouts/Container";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/TopNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex flex-col justify-between px-0 bg-background min-h-screen">
      <Navbar />
      <Container className=" pt-[7rem] pb-10">{children}</Container>
      <Footer />
    </div>
  );
}

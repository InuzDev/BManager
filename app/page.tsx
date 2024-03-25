import Workstation from "@/Pages/Workstation/Workstation";
import Footer from "@/components/footer";
import SidebarLayout from "@/layout/sidebar";

export default function Home() {
  return (
<>
    <main className="flex-1">
      <SidebarLayout />
      <Workstation />
    </main>
    <footer>
      <Footer />
    </footer>
</>
  );
}

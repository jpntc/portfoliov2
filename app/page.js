import Image from "next/image";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
export default function Home() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-600  p-10  lg:py-24 overflow-hidden  text-white">
      <Navbar />
      <main>
        <Body />
      </main>
    </div>
  );
}

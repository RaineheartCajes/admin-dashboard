import { User } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
   <nav className="h-16 border-b border-black flex items-center justify-between px-5 bg-white text-black sticky top-0 z-50">
  {/* Group logo and text together */}
  <div className="flex items-center gap-2">
    <Image 
      src="/logo.png" 
      alt="My Website Logo"
      width={50}
      height={50}
    />
    <div className="font-bold text-xl tracking-tight">
      ADMIN DASHBOARD
    </div>
  </div>

  <div className="flex items-center gap-4">
    <button className="p-2 rounded-full hover:bg-black hover:text-white transition-colors border border-black">
      <User size={20} />
    </button>
  </div>
</nav>
  );
}

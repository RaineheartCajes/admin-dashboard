import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-black flex items-center justify-between px-6 bg-white text-black sticky top-0 z-50">
      <div className="font-bold text-xl tracking-tight">ADMIN DASHBOARD</div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-black hover:text-white transition-colors border border-black">
          <User size={20} />
        </button>
      </div>
    </nav>
  );
}

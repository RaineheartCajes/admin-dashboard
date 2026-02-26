import { LayoutDashboard, Users, FolderKanban, Settings, LogOut } from "lucide-react";

const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/" },
    { icon: <Users size={20} />, label: "Employee", href: "/employee" },
    { icon: <FolderKanban size={20} />, label: "Projects", href: "/projects" },
    { icon: <Settings size={20} />, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
    return (
        <aside className="w-64 border-r border-black h-[calc(100vh-4rem)] bg-white text-black flex flex-col justify-between p-4 hidden md:flex">
            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-black hover:text-white transition-all group font-medium border border-transparent hover:border-black"
                    >
                        <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                        {item.label}
                    </a>
                ))}
            </nav>

            <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-all font-medium border border-transparent hover:border-red-600">
                <LogOut size={20} />
                Logout
            </button>
        </aside>
    );
}

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                <p className="text-gray-500">Track and manage all ongoing and upcoming projects.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 bg-white border border-black rounded-xl border-dashed flex flex-col items-center justify-center min-h-[200px] hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform">+ New Project</div>
                    <p className="text-sm text-gray-400">Click to initialize a new workspace</p>
                </div>

                <div className="p-6 bg-white border border-black rounded-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest">Active</div>
                    <h3 className="text-xl font-bold mb-2">Alpha Initiative</h3>
                    <p className="text-sm text-gray-500 mb-6">Core system refactoring and infrastructure upgrade.</p>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-black h-full w-[65%]" />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] font-bold uppercase">
                        <span>Progress</span>
                        <span>65%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

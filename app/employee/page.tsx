export default function EmployeePage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Employee Management</h1>
                <p className="text-gray-500">Manage your organization's employees here.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Placeholder cards for a premium feel */}
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-6 bg-white border border-black rounded-xl hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-4" />
                        <div className="h-8 w-full bg-gray-100 rounded animate-pulse" />
                    </div>
                ))}
            </div>

            <div className="border border-black rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4 bg-gray-50/50">
                <div className="p-4 rounded-full bg-white border border-black italic font-serif">Empty State</div>
                <p className="max-w-[400px] text-gray-500 text-sm">No employee records found. Start by adding a new employee to your organization.</p>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium border border-black">
                    Add Employee
                </button>
            </div>
        </div>
    );
}

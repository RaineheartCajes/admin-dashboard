export default function SettingsPage() {
    return (
        <div className="space-y-6 max-w-4xl">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-gray-500">Configure your application preferences and account settings.</p>
            </div>

            <div className="space-y-8 bg-white border border-black rounded-xl p-8">
                <section className="space-y-4">
                    <h3 className="text-lg font-bold border-b border-black pb-2">Account Configuration</h3>
                    <div className="grid gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold uppercase tracking-tight">Display Name</label>
                            <input
                                type="text"
                                placeholder="Admin User"
                                className="px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold uppercase tracking-tight">Email Address</label>
                            <input
                                type="email"
                                placeholder="admin@example.com"
                                className="px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all"
                            />
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-lg font-bold border-b border-black pb-2">System Preferences</h3>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                            <p className="font-bold">Two-Factor Authentication</p>
                            <p className="text-xs text-gray-500">Add an extra layer of security to your account.</p>
                        </div>
                        <div className="w-12 h-6 bg-black rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                        </div>
                    </div>
                </section>

                <div className="pt-4 flex justify-end">
                    <button className="px-8 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-bold border border-black uppercase tracking-widest text-xs">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

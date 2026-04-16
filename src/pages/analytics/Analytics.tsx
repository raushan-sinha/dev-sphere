import { SEO } from "../../components/ui";

export default function Analytics() {
    return (
        <>
            <SEO
                title="DevSphere Analytics | Performance & Insights Dashboard"
                description="Analyze performance metrics, user engagement, and system insights through an interactive and data-driven analytics dashboard."
            />

            <section className="p-6 md:p-10 mt-10 space-y-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                            Analytics Overview
                        </h1>
                        <p className="text-sm opacity-70 mt-1">
                            Monitor performance, track engagement, and gain insights across your platform.
                        </p>
                    </div>

                    <button className="px-4 py-2 text-sm rounded-xl border hover:scale-[1.03] transition">
                        Export Report
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Total Users", value: "24,532", growth: "+12.5%" },
                        { title: "Active Sessions", value: "1,342", growth: "+8.2%" },
                        { title: "Conversion Rate", value: "3.8%", growth: "+1.1%" },
                        { title: "Bounce Rate", value: "42%", growth: "-2.4%" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-5 rounded-2xl border backdrop-blur-sm hover:shadow-md transition"
                        >
                            <p className="text-sm opacity-70">{item.title}</p>
                            <h2 className="text-2xl font-semibold mt-2">{item.value}</h2>
                            <span className="text-xs mt-1 inline-block opacity-60">
                                {item.growth} from last week
                            </span>
                        </div>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid lg:grid-cols-3 gap-6">

                    {/* Traffic Chart */}
                    <div className="lg:col-span-2 p-6 rounded-2xl border hover:shadow-md transition">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-medium">Traffic Overview</h3>
                            <select className="text-sm border rounded-lg px-2 py-1">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                            </select>
                        </div>

                        <div className="h-56 flex items-center justify-center text-sm opacity-50">
                            Chart Placeholder
                        </div>
                    </div>

                    {/* Device Stats */}
                    <div className="p-6 rounded-2xl border hover:shadow-md transition">
                        <h3 className="text-lg font-medium mb-4">Device Distribution</h3>

                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span>Desktop</span>
                                <span>62%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Mobile</span>
                                <span>28%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tablet</span>
                                <span>10%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activity Section */}
                <div className="grid lg:grid-cols-2 gap-6">

                    {/* Recent Activity */}
                    <div className="p-6 rounded-2xl border hover:shadow-md transition">
                        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>

                        <ul className="space-y-4 text-sm">
                            {[
                                "User signed up",
                                "New project created",
                                "Payment completed",
                                "User upgraded plan",
                            ].map((activity, i) => (
                                <li key={i} className="flex justify-between opacity-80">
                                    <span>{activity}</span>
                                    <span className="text-xs opacity-60">2 mins ago</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Top Pages */}
                    <div className="p-6 rounded-2xl border hover:shadow-md transition">
                        <h3 className="text-lg font-medium mb-4">Top Performing Pages</h3>

                        <div className="space-y-4 text-sm">
                            {[
                                { page: "/home", views: "12.4k" },
                                { page: "/projects", views: "9.1k" },
                                { page: "/blog", views: "6.7k" },
                                { page: "/analytics", views: "4.3k" },
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between opacity-80">
                                    <span>{item.page}</span>
                                    <span>{item.views}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
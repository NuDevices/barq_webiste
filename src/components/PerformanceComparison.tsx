import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const PerformanceComparison = () => {
    const data = [
        {
            name: 'Performance (TOPS)',
            'NU Devices': 20,
            'Cloud GPU': 15,
            'Edge GPU': 8,
        },
        {
            name: 'Power Usage (W)',
            'NU Devices': 5,
            'Cloud GPU': 300,
            'Edge GPU': 75,
        },
        {
            name: 'Latency (ms)',
            'NU Devices': 1,
            'Cloud GPU': 100,
            'Edge GPU': 10,
        },
    ];

    return (
        <div className="bg-gray-900/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Performance Comparison</h3>
            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                            itemStyle={{ color: '#9CA3AF' }}
                        />
                        <Legend />
                        <Bar dataKey="NU Devices" fill="#4ADE80" />
                        <Bar dataKey="Cloud GPU" fill="#6B7280" />
                        <Bar dataKey="Edge GPU" fill="#4B5563" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-6 text-sm text-gray-400 text-center">
                * Based on standard benchmarks under typical workloads
            </div>
        </div>
    );
};
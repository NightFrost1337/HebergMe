import React from 'react';
import { Cpu, HardDrive, Activity } from 'lucide-react';

export default function InstanceStats({ cpu, ram, storage, bandwidth }) {
    const stats = [
        { icon: Cpu, label: 'CPU Usage', value: cpu, color: 'bg-blue-500' },
        { icon: Activity, label: 'RAM Usage', value: ram, color: 'bg-green-500' },
        { icon: HardDrive, label: 'Storage', value: storage, color: 'bg-purple-500' }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-2">
                        <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
                            <Icon className={`h-5 w-5 ${color.replace('bg-', 'text-')}`} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{label}</p>
                            <p className="font-semibold">{value}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
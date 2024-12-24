import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Filter } from 'lucide-react';
import Header from '@/components/nav/Header';
import Sidebar from '@/components/nav/Sidebar';
import InstanceStats from '@/components/InstanceStats';
import QuickActions from '@/components/QuickActions';
import { vpsInstances } from '@/lib/mock-data';

export default function Instances() {
    const [selectedInstance, setSelectedInstance] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const manageInstanceAction = (action) => {
        console.log(`Performing ${action} on instance`);
    };

    const filteredInstances = vpsInstances.filter(instance =>
        instance.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <h2 className="text-3xl font-bold text-gray-800">VPS Instances</h2>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                            >
                                <Plus className="h-5 w-5" />
                                <span>New Instance</span>
                            </motion.button>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        placeholder="Search instances..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
                                >
                                    <Filter className="h-5 w-5 text-gray-600" />
                                    <span>Filter</span>
                                </motion.button>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {filteredInstances.map((instance) => (
                                <motion.div
                                    key={instance.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-white rounded-lg shadow-md overflow-hidden"
                                >
                                    <div className="p-6 space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-semibold">{instance.name}</h3>
                                                <p className="text-gray-500">{instance.ip}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                instance.status === 'Running' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-red-100 text-red-800'
                                            }`}>
                                                {instance.status}
                                            </span>
                                        </div>

                                        <InstanceStats
                                            cpu={`${Math.floor(Math.random() * 100)}%`}
                                            ram={`${Math.floor(Math.random() * 100)}%`}
                                            storage={instance.storage}
                                        />

                                        <QuickActions
                                            status={instance.status}
                                            onAction={manageInstanceAction}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
};
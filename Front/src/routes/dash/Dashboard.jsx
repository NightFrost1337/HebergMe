import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/nav/Header';
import Sidebar from '@/components/nav/Sidebar';
import Card from '@/components/Card';
import { vpsInstances } from '@/lib/mock-data';
import { useAuth } from "@/lib/hooks/useAuth";

export default function Dashboard() {
    const { user } = useAuth();

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-800">Your VPS Instances</h2>
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            initial="hidden"
                            animate="show"
                        >
                            {vpsInstances.map((instance) => (
                                <motion.div
                                    key={instance.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <Card {...instance} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

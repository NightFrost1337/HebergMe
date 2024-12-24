import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white p-4"
        >
            <motion.h1 
                className="text-6xl font-bold mb-4 text-center"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 120 }}
            >
                VPS Hosting Solutions
            </motion.h1>
            <motion.p 
                className="text-xl mb-8 text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                High-performance virtual private servers for your applications
            </motion.p>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-2">Powerful</h3>
                    <p>State-of-the-art hardware for optimal performance</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-2">Scalable</h3>
                    <p>Easily upgrade resources as your needs grow</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-2">Reliable</h3>
                    <p>99.9% uptime guarantee with 24/7 support</p>
                </div>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link 
                    to="/dash/dashboard"  
                    className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition duration-300"
                >
                    Go to Dashboard
                </Link>
            </motion.div>
        </motion.div>
    );
};
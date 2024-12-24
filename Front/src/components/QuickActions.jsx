import React from 'react';
import { motion } from 'framer-motion';
import { Power, RefreshCw, Terminal, Settings } from 'lucide-react';

export default function QuickActions({ onAction, status }) {
    const actions = [
        { 
            icon: Power, 
            label: status === 'Running' ? 'Stop' : 'Start',
            color: status === 'Running' ? 'bg-red-500' : 'bg-green-500',
            action: 'toggle'
        },
        { 
            icon: RefreshCw, 
            label: 'Restart', 
            color: 'bg-orange-500',
            action: 'restart'
        },
        { 
            icon: Terminal, 
            label: 'Console', 
            color: 'bg-blue-500',
            action: 'console'
        },
        { 
            icon: Settings, 
            label: 'Settings', 
            color: 'bg-gray-500',
            action: 'settings'
        }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {actions.map(({ icon: Icon, label, color, action }) => (
                <motion.button
                    key={label}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onAction(action)}
                    className={`${color} text-white p-4 rounded-lg flex flex-col items-center justify-center space-y-2`}
                >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm font-medium">{label}</span>
                </motion.button>
            ))}
        </div>
    );
};
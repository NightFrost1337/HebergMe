import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/nav/Header';
import Sidebar from '@/components/nav/Sidebar';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="mt-2 text-gray-600">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const faqData = [
    {
        question: "How do I upgrade my VPS?",
        answer: "You can upgrade your VPS through your dashboard. Simply select the 'Upgrade' option for your instance and follow the prompts. If you need assistance, our support team is always ready to help."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various cryptocurrency payments including Bitcoin and Ethereum. If you need an alternative payment method, please contact our support team."
    },
    {
        question: "Is there a money-back guarantee?",
        answer: "Yes, we offer a 30-day money-back guarantee for all new accounts. If you're not satisfied with our service within the first 30 days, you can request a full refund, no questions asked."
    },
    {
        question: "How do I contact live support?",
        answer: "You can contact our live support team 24/7 through the chat widget on our website, by email at support@vpshostingexample.com, or by phone at +1 (555) 123-4567. We aim to respond to all inquiries within 1 hour."
    },
    {
        question: "What operating systems do you support?",
        answer: "We support a wide range of operating systems including various Linux distributions (Ubuntu, CentOS, Debian, Fedora) and Windows Server editions. If you need a specific OS that's not listed, please contact our support team to discuss your requirements."
    }
];

export default function Support() {
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
                        <h2 className="text-3xl font-bold text-gray-800">Support</h2>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">How can we help you?</h3>
                            <p className="mb-4">
                                Welcome to our support page. If you have any questions or issues,
                                please use the chatbot below or check our FAQ section.
                            </p>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                
                                {/* CHATBOT */}
                                
                            </motion.div>
                        </div>
                        <motion.div
                            className="bg-white rounded-lg shadow-md p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                            <div className="space-y-2">
                                {faqData.map((item, index) => (
                                    <FAQItem key={index} question={item.question} answer={item.answer} />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

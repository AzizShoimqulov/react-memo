import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const tabData = [
    { title: "Asosiy", content: "Xush kelibsiz! Ushbu platformada siz yangi yangiliklar, xizmatlar, va interaktiv imkoniyatlardan foydalanishingiz mumkin. Har kuni yangilanadigan kontent sizga moslashtirilgan.Biz bilan bog‘lanish uchun support@example.com ga yozing. Telegram va WhatsApp orqali ham mavjudmiz." },
    { title: "Yangiliklar", content: "So‘nggi yangiliklar: Bugun biz yangi API integratsiyasini ishga tushirdik. Bu sizga tizim bilan tezroq va samaraliroq ishlash imkonini beradi.Xush kelibsiz! Ushbu platformada siz yangi yangiliklar, xizmatlar, va interaktiv imkoniyatlardan foydalanishingiz mumkin. Har kuni yangilanadigan kontent sizga moslashtirilgan." },
    { title: "Kontakt", content: "Biz bilan bog‘lanish uchun support@example.com ga yozing. Telegram va WhatsApp orqali ham mavjudmiz." },
    { title: "Haqida", content: "Saytimiz 2023-yilda ishga tushirilgan va hozirda 10 000 dan ortiq foydalanuvchiga ega. Biz foydalanuvchilarimiz uchun doimiy ravishda xizmatlarimizni yaxshilab boramiz." },
    { title: "Profil", content: "Shaxsiy profilingizda siz ma'lumotlaringizni tahrirlashingiz, rasm yuklashingiz va xavfsizlik sozlamalarini o‘zgartirishingiz mumkin." },
    { title: "Statistika", content: "Bu bo‘limda siz so‘nggi foydalanuvchi faolligini, trafik tahlillarini va boshqa ko‘rsatkichlarni ko‘rishingiz mumkin." },
];

export default function VerticalTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const tabsRef = useRef([]);
    const [underlineStyle, setUnderlineStyle] = useState({ top: 0, height: 0 });

    useEffect(() => {
        const currentTab = tabsRef.current[activeTab];
        if (currentTab) {
            setUnderlineStyle({
                top: currentTab.offsetTop,
                height: currentTab.offsetHeight,
            });
        }
    }, [activeTab]);

    return (
        <div className="flex w-full h-screen bg-white border border-gray-300">
            {/* Chapdagi vertical tabs */}
            <div className="relative w-52 border-r border-gray-300 bg-gray-100 overflow-y-auto">
                <div className="flex flex-col relative">
                    {tabData.map((tab, index) => (
                        <button
                            key={index}
                            ref={(el) => (tabsRef.current[index] = el)}
                            onClick={() => setActiveTab(index)}
                            className={`text-left px-4 py-3 text-sm transition-colors duration-200 w-full ${
                                activeTab === index ? 'text-blue-700 font-semibold bg-white' : 'text-gray-700'
                            }`}
                        >
                            {tab.title}
                        </button>
                    ))}

                    <motion.div
                        className="absolute left-0 w-[3px] bg-blue-600 rounded"
                        animate={{
                            top: underlineStyle.top,
                            height: underlineStyle.height,
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                </div>
            </div>

            {/* O'ngdagi content */}
            <div className="flex-1 p-6 overflow-y-auto text-gray-800 text-base leading-relaxed">
                {tabData[activeTab].content}
            </div>
        </div>
    );
}

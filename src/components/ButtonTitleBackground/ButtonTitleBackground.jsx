// "use client"
// import { useRouter } from "next/navigation";
// import { DynamicButton } from "../Button/DynamicButton";
// import TitleDescription from "../TitleDescription/TitleDescription";
// export const ButtonTitleBackground = ({ data = {} }) => {
//     const router = useRouter()
//     const {
//         bgImage,
//         titleProps,
//         descriptionProps,
//         horizontalLine,
//         button1,
//         button2,

//     } = data;

//     return (
//         <div
//             style={{ background: "var(--bg-navy-gradient)" }}
//             className="w-full py-20 relative overflow-hidden"
//         >
//             {/* Top Left Background Image */}
//             {bgImage && (
//                 <div
//                     className="absolute top-0 left-0 pointer-events-none overflow-hidden"
//                     style={{
//                         width: '470px',
//                         height: '470px',
//                     }}
//                 >
//                     <img
//                         src={bgImage}
//                         alt=""
//                         className="w-full h-full object-contain"
//                         style={{
//                             opacity: 0.3
//                         }}
//                     />
//                 </div>
//             )}

//             {/* Bottom Right Background Image */}
//             {bgImage && (
//                 <div
//                     className="absolute bottom-0 right-0 pointer-events-none overflow-hidden"
//                     style={{
//                         width: '470px',
//                         height: '470px',
//                     }}
//                 >
//                     <img
//                         src={bgImage}
//                         alt=""
//                         className="w-full h-full object-contain"
//                         style={{
//                             transform: 'rotate(180deg)',
//                             opacity: 0.3
//                         }}
//                     />
//                 </div>
//             )}

//             {/* Content Wrapper */}
//             <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
//                 <div className="max-w-3xl">
//                     {/* Title */}
//                     {titleProps && (
//                         <div className="mb-3 sm:mb-4">
//                             <TitleDescription {...titleProps} />
//                         </div>
//                     )}

//                     {/* Horizontal Line */}
//                     {horizontalLine && (
//                         <div className="w-16 sm:w-24 md:w-32 h-[1px] mb-3 sm:mb-4 bg-white/80 mx-auto" />
//                     )}

//                     {/* Description */}
//                     {descriptionProps && (
//                         <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mb-6">
//                             <TitleDescription {...descriptionProps} />
//                         </div>
//                     )}

//                     {/* Buttons */}
//                     {(button1 || button2) && (
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
//                             {button1 && (
//                                 <div className="w-auto sm:w-auto">
//                                     <DynamicButton
//                                         onClick={() => router.push(button1.link)}
//                                         {...button1} />
//                                 </div>
//                             )}

//                             {button2 && (
//                                 <div className="w-auto sm:w-auto">
//                                     <DynamicButton
//                                         onClick={() => router.push(button2.link)}
//                                         {...button2} />
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };





















"use client"
import { useRouter } from "next/navigation";
import { DynamicButton } from "../Button/DynamicButton";
import TitleDescription from "../TitleDescription/TitleDescription";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ButtonTitleBackground = ({ data = {} }) => {
    const router = useRouter();

    const {
        bgImage,
        titleProps,
        descriptionProps,
        horizontalLine,
        button1,
        button2,
    } = data;

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(prev => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{ background: "var(--bg-navy-gradient)" }}
            className="w-full py-20 relative overflow-hidden"
        >
            {/* ✅ animated peal background overlay */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ background: "var(--color-peal)" }}
                animate={{ opacity: toggle ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* ✅ TOP LEFT PATTERN IMAGE (animated) */}
            {bgImage && (
                <motion.div
                    className="absolute top-0 left-0 pointer-events-none overflow-hidden z-10"
                    style={{
                        width: "470px",
                        height: "470px",
                    }}
                    animate={{
                        x: toggle ? "calc(100vw - 100%)" : "0px",
                    }}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                >
                    <img
                        src={bgImage}
                        alt=""
                        className="w-full h-full object-contain"
                        style={{ opacity: 0.3, clipPath: "inset(0 0 50% 0)" }}

                    />
                </motion.div>
            )}

            {/* ✅ BOTTOM RIGHT PATTERN IMAGE (animated) */}
            {bgImage && (
                <motion.div
                    className="absolute bottom-0 right-0 pointer-events-none overflow-hidden z-10"
                    style={{
                        width: "470px",
                        height: "470px",
                    }}
                    animate={{
                        x: toggle ? "calc(-100vw + 100%)" : "0px",
                    }}
                    transition={{ duration: 1.3, ease: "easeInOut" }}
                >
                    <img
                        src={bgImage}
                        alt=""
                        className="w-full h-full object-contain"
                        style={{
                            clipPath: "inset(0 0 50% 0)",
                            transform: "rotate(180deg)",
                            opacity: 0.3,
                        }}
                    />
                </motion.div>
            )}

            {/* Content Wrapper (UNCHANGED) */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6">
                <div className="max-w-3xl">
                    {titleProps && (
                        <div className="mb-3 sm:mb-4">
                            <TitleDescription {...titleProps} />
                        </div>
                    )}

                    {horizontalLine && (
                        <div className="w-16 sm:w-24 md:w-32 h-[1px] mb-3 sm:mb-4 bg-white/80 mx-auto" />
                    )}

                    {descriptionProps && (
                        <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mb-6">
                            <TitleDescription {...descriptionProps} />
                        </div>
                    )}

                    {(button1 || button2) && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                            {button1 && (
                                <div className="w-auto sm:w-auto">
                                    <DynamicButton
                                        onClick={() => router.push(button1.link)}
                                        {...button1}
                                    />
                                </div>
                            )}

                            {button2 && (
                                <div className="w-auto sm:w-auto">
                                    <DynamicButton
                                        onClick={() => router.push(button2.link)}
                                        {...button2}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

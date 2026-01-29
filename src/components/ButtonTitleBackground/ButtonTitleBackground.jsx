"use client"
import { useRouter } from "next/navigation";
import { DynamicButton } from "../Button/DynamicButton";
import TitleDescription from "../TitleDescription/TitleDescription";
export const ButtonTitleBackground = ({ data = {} }) => {
    const router = useRouter()
    const {
        bgImage,
        titleProps,
        descriptionProps,
        horizontalLine,
        button1,
        button2,
        
    } = data;

    return (
        <div
            style={{ background: "var(--bg-navy-gradient)" }}
            className="w-full py-20 relative overflow-hidden"
        >
            {/* Top Left Background Image */}
            {bgImage && (
                <div
                    className="absolute top-0 left-0 pointer-events-none overflow-hidden"
                    style={{
                        width: '470px',
                        height: '470px',
                    }}
                >
                    <img
                        src={bgImage}
                        alt=""
                        className="w-full h-full object-contain"
                        style={{
                            opacity: 0.3
                        }}
                    />
                </div>
            )}

            {/* Bottom Right Background Image */}
            {bgImage && (
                <div
                    className="absolute bottom-0 right-0 pointer-events-none overflow-hidden"
                    style={{
                        width: '470px',
                        height: '470px',
                    }}
                >
                    <img
                        src={bgImage}
                        alt=""
                        className="w-full h-full object-contain"
                        style={{
                            transform: 'rotate(180deg)',
                            opacity: 0.3
                        }}
                    />
                </div>
            )}

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
                <div className="max-w-3xl">
                    {/* Title */}
                    {titleProps && (
                        <div className="mb-3 sm:mb-4">
                            <TitleDescription {...titleProps} />
                        </div>
                    )}

                    {/* Horizontal Line */}
                    {horizontalLine && (
                        <div className="w-16 sm:w-24 md:w-32 h-[1px] mb-3 sm:mb-4 bg-white/80 mx-auto" />
                    )}

                    {/* Description */}
                    {descriptionProps && (
                        <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mb-6">
                            <TitleDescription {...descriptionProps} />
                        </div>
                    )}

                    {/* Buttons */}
                    {(button1 || button2) && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                            {button1 && (
                                <div className="w-auto sm:w-auto">
                                    <DynamicButton
                                        onClick={() => router.push(button1.link)}
                                        {...button1} />
                                </div>
                            )}

                            {button2 && (
                                <div className="w-auto sm:w-auto">
                                    <DynamicButton
                                        onClick={() => router.push(button2.link)}
                                        {...button2} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};





















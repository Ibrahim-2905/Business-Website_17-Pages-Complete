"use client"
import React from 'react';
import { Share2, Facebook, Linkedin, Twitter, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedButton from '../Button/Button';



export default function BlogArticle() {
    const router = useRouter()
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className='flex flex-col py-3 justify-center items-center px-4'>
                <h3 style={{ fontWeight: "400" }} className="text-xl sm:text-2xl font-poopin text-charcoalGray mb-4 text-center">Listen To This Article</h3>
                <div className=''>
                    <AnimatedButton textColor='text-white' bgColor='bg-charcoalGray' padding='px-6' rounded='rounded-sm' text='Listen' />
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Article Content */}
                    <article className="flex-1 max-w-3xl w-full">
                        {/* Article Header */}
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-gray-600 mb-4">
                                <span>Jan 15, 2025</span>
                                <div className="flex gap-3">
                                    <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                                    <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-700" />
                                    <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                                </div>
                            </div>

                            <h1 style={{ fontWeight: "500" }} className="text-2xl sm:text-3xl font-poopin text-charcoalGray mb-4">
                                Beyond Setup — Towards Scalable Excellence
                            </h1>

                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                                Setting up cloud infrastructure can initially feel straightforward—spin up a few servers,
                                configure some basic security settings, and you're on your way. But as organizations grow
                                and cloud usage increases, the real challenge isn't just getting things running—it's maintaining
                                efficiency, security, and control at scale. This is where a structured approach becomes essential.
                            </p>

                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                At Unique, we've developed a comprehensive framework built on three pillars to guide organizations
                                toward cloud excellence.
                            </p>
                        </div>

                        {/* Section */}
                        <section className="mb-8">
                            <h2 style={{ fontWeight: "500" }} className="text-xl sm:text-2xl font-poopin text-charcoalGray mb-4">
                                A Clean-Centric Approach to Scalability
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For many organizations, growth can feel like chasing a moving target. Infrastructure that worked
                                yesterday may not meet tomorrow's needs. Our clean-centric approach focuses on creating systems
                                that naturally accommodate growth without constant overhauls or firefighting. By implementing
                                flexible, well-defined, scalable techniques, organizations can handle workloads, performance bottlenecks,
                                and unexpected surges while staying ahead of cloud expenses and maintaining secure patterns at scale.
                            </p>
                        </section>

                        {/* Section */}
                        <section className="mb-8">
                            <h2 style={{ fontWeight: "500" }} className="text-xl sm:text-2xl font-poopin text-charcoalGray mb-4">
                                Driving Efficiency with Our Unique Approach
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                At Unique Works, we take a dual-driver approach—focusing on both infrastructure automation and
                                cost optimization. Automation accelerates deployment and system management but doesn't necessarily
                                translate into cost savings. Separately, proper optimization techniques can identify savings
                                opportunities and recurring cost expenses, or implementing better solutions in a way that doesn't
                                sacrifice our approach to building our infrastructure specific needs.
                            </p>
                        </section>

                        {/* Key Benefits Section */}
                        <section className="mb-8">
                            <h2 style={{ fontWeight: "500" }} className="text-xl sm:text-2xl font-poopin text-charcoalGray mb-4">
                                Key Benefits of Working with Us:
                            </h2>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2 mt-1">•</span>
                                    <span>Foundation and lift-off: Leverage our deep experience in modern cloud platforms to establish
                                        a solid infrastructure foundation for greenfield deployments or modernization initiatives.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2 mt-1">•</span>
                                    <span>Ongoing optimization: Continuous refinement of your infrastructure based on actual usage
                                        patterns, technological advancements, and evolving business requirements.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2 mt-1">•</span>
                                    <span>Expertise without overhead: Our team leads across multiple industries, including fintech,
                                        healthcare, retail, and more.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Final Section */}
                        <section className="mb-8">
                            <h2 style={{ fontWeight: "500" }} className="text-xl sm:text-2xl font-poopin text-charcoalGray mb-4">
                                Ready to Take Your Business to New Heights?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The big journey toward robust and scalable cloud infrastructure begins with understanding where
                                you are now and where you need to be. Whether you're just starting your cloud journey or are ready
                                to optimize what you've built, our framework provides a clear roadmap. We offer many days of free
                                scalability, effectiveness, and cost reviews.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                At Unique Works, we don't just set up infrastructure—we partner with you to build cloud environments
                                that support your business objectives, now and in the future. If you'd like to explore how our three-pillar
                                approach can help your organization, let's start a conversation. We're here to help you move from
                                simply running in the cloud to truly excelling in it, including fintech, healthcare, retail, and more.
                            </p>
                        </section>
                    </article>

                    {/* Sidebar */}
                    <aside className="hidden lg:block w-75 flex-shrink-0">
                        <div className="sticky top-8">
                            <div className="p-4">
                                <div className="text-xs font-semibold text-gray-500 tracking-wide mb-2">QUICK LINKS</div>
                                <div className="flex flex-col gap-2 font-poppins text-darkOrange">
                                    <p onClick={() => router.push("/insight")} className="flex cursor-pointer gap-1 hover:underline">
                                        Blogs <ChevronRight className="w-4 h-4" />
                                    </p>

                                    <p onClick={() => router.push("/insight")} className="flex cursor-pointer items-center gap-1 hover:underline">
                                        Case Study <ChevronRight className="w-4 h-4" />
                                    </p>

                                    <p onClick={() => router.push("/insight")} className="flex cursor-pointer items-center gap-1 hover:underline">
                                        E Book <ChevronRight className="w-4 h-4" />
                                    </p>
                                </div>

                                <h3 style={{ fontWeight: "500" }} className="text-base font-poopin text-charcoalGray mb-4 mt-8">You may like</h3>

                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=150&fit=crop"
                                        alt="Team collaboration"
                                        className="w-full h-28 object-cover rounded-md mb-3"
                                    />
                                    <h4 className="font-semibold text-gray-900 text-sm mb-2 leading-tight">
                                        5 ways that help you launch your product faster using cloud infrastructure
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        Discover effective strategies to accelerate your product launch using modern cloud infrastructure in 2025 →
                                    </p>
                                    <button onClick={() => router.push("/insight")} className="flex items-center gap-2 text-darkOrange font-medium text-sm hover:gap-3 transition-all duration-300 group mt-2">
                                        <span>{'Read More'}</span>
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Mobile Sidebar Content */}
                <div className="lg:hidden mt-8 border-t pt-8">
                    <div className="text-xs font-semibold text-gray-500 tracking-wide mb-3">QUICK LINKS</div>
                    <div className="flex flex-col gap-2 font-poppins text-darkOrange mb-8">
                        <p onClick={() => router.push("/insight")} className="flex cursor-pointer gap-1 hover:underline">
                            Blogs <ChevronRight className="w-4 h-4" />
                        </p>

                        <p onClick={() => router.push("/insight")} className="flex cursor-pointer items-center gap-1 hover:underline">
                            Case Study <ChevronRight className="w-4 h-4" />
                        </p>

                        <p onClick={() => router.push("/insight")} className="flex cursor-pointer items-center gap-1 hover:underline">
                            E Book <ChevronRight className="w-4 h-4" />
                        </p>
                    </div>

                    <h3 style={{ fontWeight: "500" }} className="text-base font-poopin text-charcoalGray mb-4">You may like</h3>

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop"
                            alt="Team collaboration"
                            className="w-full h-48 sm:h-56 object-cover rounded-md mb-3"
                        />
                        <h4 className="font-semibold text-gray-900 text-base mb-2 leading-tight">
                            5 ways that help you launch your product faster using cloud infrastructure
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            Discover effective strategies to accelerate your product launch using modern cloud infrastructure in 2025 →
                        </p>
                        <button onClick={() => router.push("/insight")} className="flex items-center gap-2 text-darkOrange font-medium text-sm hover:gap-3 transition-all duration-300 group">
                            <span>{'Read More'}</span>
                            <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </main>

            {/* Share Button - Mobile */}
            <button className="lg:hidden fixed bottom-8 right-4 sm:right-8 bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-700 z-50">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
        </div>
    );
}
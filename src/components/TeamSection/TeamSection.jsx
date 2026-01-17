// import Image from "next/image";
// import TitleDescription from "../TitleDescription/TitleDescription";

// export function TeamSection({ title = "Meet Our Team", teamMembers }) {
//     return (
//         <section 
//          style={{ background: "var(--bg-navy-gradient)" }}
//          className="relative w-full py-5 overflow-hidden ">
//             {/* Network pattern background */}
//             <div className="absolute inset-0 opacity-30">

//             </div>

//             <div className="relative z-10 max-w-6xl mx-auto">
//                 {/* Title */}
//                 <div className="text-center py-10">
//                     <TitleDescription title={title} titleColor="text-white" />
//                 </div>

//                 {/* Team Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {teamMembers.map((member, index) => (
//                         <div key={index} className="flex flex-col">
//                             {/* Card with geometric background */}
//                             <div className="relative rounded-lg overflow-hidden mb-4 aspect-[4/5]">

//                                 {/* Member Image */}
//                                 <Image
//                                     src={member.image || "/placeholder.svg"}
//                                     alt={member.name}
//                                     fill
//                                     className="object-cover object-top"
//                                 />

//                             </div>

//                             {/* Member Info */}
//                             <div className="text-center">
//                                 <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
//                                 <p className="text-white text-xl mb-2">{member.title}</p>
//                                 <p style={{fontWeight:"300"}} className="text-white text-md leading-relaxed font-open-sans">{member.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }






















import Image from "next/image";
import TitleDescription from "../TitleDescription/TitleDescription";

export function TeamSection({ title = "Meet Our Team", teamMembers }) {
    return (
        <section
            style={{ background: "var(--bg-navy-gradient)" }}
            className="relative w-full py-10 overflow-hidden"
        >
            {/* Section Title */}
            <div className="text-center py-10">
                <TitleDescription title={title} titleColor="text-white" />
            </div>

            {/* Team Grid */}
            <div className="px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col rounded-md overflow-hidden h-[500px]  bg-white"
                    >
                        {/* Member Image */}
                        <div className="relative w-full h-[60%] overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover object-top"
                            />
                        </div>

                        {/* Content */}
                        <div
                            className="flex flex-col justify-center items-center text-center h-[40%] px-4"
                            style={{ background: "var(--bg-navy-gradient)" }}
                        >
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                                <p className="text-white text-xl mb-2">{member.title}</p>
                                <p style={{ fontWeight: "300" }} className="text-white text-md leading-relaxed font-open-sans">{member.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

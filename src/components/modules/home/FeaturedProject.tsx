// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const projects = [
//   {
//     title: "Plant Store",
//     desc: "An e-commerce web app for indoor plants built with HTML & Bootstrap.",
//     img: "/indorPlant.PNG",
//   },
//   {
//     title: "Food App",
//     desc: "A secure, scalable  food app built using react & tailwind css & firebase.",
//     img: "/foodApp.PNG",
//   },
// ];
// const FeaturedProject = () => {
//   return (
//     <section id="projects" className="py-20 bg-[#f9f9f9] text-center px-6">
//       <h2 className="text-3xl font-bold mb-8 text-green-600">
//         Featured Projects
//       </h2>
//       <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//         {projects.map((p, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-2xl shadow-md overflow-hidden"
//           >
//             <Image
//               src={p.img}
//               alt={p.title}
//               className="h-48 w-full object-cover"
//             />
//             <div className="p-5 text-left">
//               <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
//               <p className="text-gray-600 mb-4">{p.desc}</p>
//               <a
//                 href="#"
//                 className="text-green-600 font-medium hover:underline"
//               >
//                 View Details
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Link href="/project">
//         <Button className="bg-green-600 text-white px-6 py-3 mt-14 w-50 rounded-lg hover:bg-green-700 transition">
//           All Project
//         </Button>
//       </Link>
//     </section>
//   );
// };

// export default FeaturedProject;

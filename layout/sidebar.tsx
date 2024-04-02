"use client"
import Workstation from "@/app/Workspace/page";
import HeadPage from "@/components/header";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";

const SidebarItems = [
   {
      href: '/',
      title: 'Home'
   },
   {
      href: '/about',
      title: 'About'
   },
   {
      href: '/Projects',
      title: 'Projects'
   }
]

const SidebarLayout = () => {
   return (
      <>
         <div className="min-h-screen flex flex-col">
            {/* Sidebar here :3 */}
            <HeadPage title="home" />
            <div className="flex flex-col md:flex-row flex-1">
               <aside className="bg-neutral-900 w-full md:w-60">
                  <nav>
                     <ul>
                        {SidebarItems.map(({href, title}) => (
                           <li className="m-2" key={title}>
                              <Link className={`flex p-2 bg-neutral-600 rounded hover:bg-neutral-700 cursor-pointer`} href={href}>
                                 {title}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </nav>
               </aside>
               <main className="container place-content-center">
                  <Workstation/>
               </main>
            </div>
         </div>
      </>
   )
}

export default SidebarLayout
"use client"
import HeadPage from "@/components/header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
   page: string,
}

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
      href: '/projects',
      title: 'Projects'
   }
]

const SidebarLayout = () => {
   const router = useRouter();
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
                              <Link href={href} legacyBehavior>
                                 {/* TODO Fix ${router.pathname} */}
                                 <a className={`flex p-2 bg-neutral-600 rounded hover:bg-neutral-700 cursor-pointer ${router.pathname === href && 'bg-slate-200 text-white'}`} href={href}>{title}</a>
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </nav>
               </aside>
               {/* <main className="flex-1">{children}</main> */}
            </div>
         </div>
      </>
   )
}

export default SidebarLayout
import React from 'react'

interface Props {
   title: string,
}

export default function HeadPage({title}: Props) {
   return (
   <header className="bg-neutral-600 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
      ProBusiness - {title}
   </header>
   )
}
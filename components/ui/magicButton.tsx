"use client";

import React from 'react'

const MagicButton = ({title, handleClick, otherClasses,position, icon
}:{title:string; position:string; icon: React.ReactNode; handleClick?: () =>void; otherClasses?:string  }) => {
  return (
<button
      className="relative inline-flex h-12 w-[90%] max-w-xs md:w-60 min-w-[200px] md:mt-10 overflow-hidden rounded-3xl p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  )
}

export default MagicButton
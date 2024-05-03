import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={"/"} className='font-bold text-1xl bg-gradient-to-t from-indigo-400 to-cyan-400
    text-transparent bg-clip-text hover:cursor-pointer'>Codeg6 | PageFom-Dynamic</Link>
  )
}

export default Logo
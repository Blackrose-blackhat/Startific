import { Loader2 } from 'lucide-react'
import React from 'react'
import {ClipLoader} from "react-spinners"
const Loader = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center align-middle items-center'>
        <ClipLoader />
    </div>
  )
}

export default Loader
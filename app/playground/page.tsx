import TimeLine from '@/app/playground/layout/timeline/TimeLine'
import React from 'react'
import Viewer from './layout/viewer/Viewer'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col min-h-screen bg-foreground-900'>
       <div className='flex flex-1'>
        <div className='w-[600px] bg-foreground-800 '>

        </div>
        <div className='flex-1'>
            <Viewer/>
        </div>
        </div> 
       <div className='flex'>
           <TimeLine/> 
       </div>
    </div>
  )
}

export default page
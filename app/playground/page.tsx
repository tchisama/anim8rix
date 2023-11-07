"use client"
import TimeLine from '@/app/playground/layout/timeline/TimeLine'
import React ,{useEffect} from 'react'
import Viewer from './layout/viewer/Viewer'
import { useTheme } from 'next-themes'
import Controlers from './layout/controlers/Controlers'

type Props = {}

const Page = (props: Props) => {
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setTheme("dark")
	}, [setTheme])
  return (
    <div className='flex flex-col min-h-screen'>
       <div className='flex flex-1'>
            <div className='w-[600px] bg-foreground-50 '>
                <Controlers/>
            </div>
            <div className='flex-1 p-2'>
                <Viewer/>
            </div>
        </div> 
       <div className='flex'>
           <TimeLine/> 
       </div>
    </div>
  )
}

export default Page
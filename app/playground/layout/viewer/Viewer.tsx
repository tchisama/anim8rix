"use client"
import React,{useEffect} from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";

type Props = {}

const Viewer = (props: Props) => {
    const {theme, setTheme} =useTheme()
    useEffect(() => {
        setTheme("dark")
    }, [])
    
  return (
        <div className="flex w-full h-full gap-2">
            <Navbar/>
            <div className="flex-1 h-full flex items-center justify-center">
                <button>hello world</button>
            </div>
        </div>  
  )
}

export default Viewer
"use client"
import React,{useEffect} from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { useTheme } from "next-themes";

type Props = {}

const Viewer = (props: Props) => {
    const {theme, setTheme} =useTheme()
    useEffect(() => {
        setTheme("dark")
    }, [])
    
  return (
        <div className="flex w-full flex-col">
        </div>  
  )
}

export default Viewer
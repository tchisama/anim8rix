import React from 'react'
import { Button } from '@nextui-org/react';

import {PiCursorFill,PiPlusBold} from "react-icons/pi";

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='p-2 flex h-fit flex-col w-fit gap-2 bg-foreground-50 rounded-2xl'>
        <Button isIconOnly><PiCursorFill/></Button>
        <Button isIconOnly><PiPlusBold/></Button>
    </div>
  )
}

export default Navbar
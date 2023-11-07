import React from 'react'

import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

type Props = {}

const Controlers = (props: Props) => {
  return (
    <div>
          <Tabs variant="underlined" aria-label="Options">
                <Tab key="controlers" title="Controlers">
                </Tab>
                <Tab key="code" title="Code">
                </Tab>
          </Tabs>
    </div>
  )
}

export default Controlers
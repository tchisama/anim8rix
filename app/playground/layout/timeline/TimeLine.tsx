"use client"
import { Timeline, TimelineEffect, TimelineRow ,TimelineState} from '@xzdarcy/react-timeline-editor';
import React ,{useRef,useState} from 'react'
import "./timeline.css";
import { FaPlay , FaBackwardFast,FaForwardFast } from 'react-icons/fa6';
import { Button } from '@nextui-org/react';
const defaultEditorData: TimelineRow[] = [
  {
    id: "0",
    actions: [
      {
        id: "action00",
        start: 0,
        end: 2,
        effectId: "effect0",
      },
      {
        id: "action01",
        start: 1,
        end: 3,
        effectId: "effect1",
      },
    ],
  },
  {
    id: "1",
    actions: [
      {
        id: "action10",
        start: 1.5,
        end: 5,
        effectId: "effect1",
      }
    ]
  }
]

const mockEffect: Record<string, TimelineEffect> = {
    effect0: {
      id: "effect0",
      name: "效果0",
    },
    effect1: {
      id: "effect1",
      name: "效果1",
    },
};
  

type Props = {}

const TimeLine = (props: Props) => {
    const [data, setData] = useState(defaultEditorData);
    const domRef = useRef<HTMLDivElement|null>(null);
    const timelineState = useRef<TimelineState|null>(null);
    return (
      <div className='w-full border-t bg-foreground-200 border-foreground-100'>

        <div className='p-1 bg-foreground-50 px-4'>
            <Button variant='light' isIconOnly>
              <FaBackwardFast/>
            </Button>
            <Button variant='light' isIconOnly>
              <FaPlay/>
            </Button>
            <Button variant='light' isIconOnly>
              <FaForwardFast/>
            </Button>
        </div>

      <div className="timeline-editor-example7">
        <div className='flex flex-col'>
          <div className='text-foreground-200 h-[42px]'>
          </div>
        <div
          ref={domRef}
          style={{ overflow: 'overlay' }}
          onScroll={(e) => {
            const target = e.target as HTMLDivElement;
            if (!timelineState.current) {
                return
            }
            timelineState.current.setScrollTop(target.scrollTop);
          }}
          className={'timeline-list'}
        >
          {data.map((item) => {
            return (
              <div className="timeline-list-item" key={item.id}>
                <div className="text">{`row${item.id}`}</div>
              </div>
            );
          })}
        </div>
        </div>
        <Timeline
          ref={timelineState}
          onChange={setData}
          editorData={data}
          effects={mockEffect}
          onScroll={({ scrollTop }) => {
            if (!domRef.current) {
                return
            }
            domRef.current.scrollTop = scrollTop;
          }}
        />
      </div>
      </div>
    )
}

export default TimeLine
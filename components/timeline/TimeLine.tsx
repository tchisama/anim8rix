"use client"
import { Timeline, TimelineEffect, TimelineRow ,TimelineState} from '@xzdarcy/react-timeline-editor';
import React ,{useRef,useState} from 'react'
import "./timeline.css";
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
    ],
}
,
{
    id: "2",
    actions: [
      {
        id: "action20",
        start: 1.5,
        end: 5,
        effectId: "effect1",
      }
    ]
},
{
    id: "3",
    actions: [
      {
        id: "action30",
        start: 1.5,
        end: 5,
        effectId: "effect1",
      }
    ]
},
{
    id: "4",
    actions: [
      {
        id: "action40",
        start: 1.5,
        end: 5,
        effectId: "effect1",
      }
    ]
},
{
    id: "5",
    actions: [
      {
        id: "action50",
        start: 1.5,
        end: 5,
        effectId: "effect1",
      }
    ]
}
,
{
    id: "6",
    actions: [
      {
        id: "action60",
        start: 1.5,
        end: 5,
        effectId: "effect1",
      }
    ]
}
,{
    id: "7",
    actions: [
      {
        id: "action70",
        start: 1.5,
        end: 5,
        effectId: "effect1",
      }
    ]
},
{
    id: "8",
    actions: [
      {
        id: "action80",
        start: 1.5,
        end: 5,
        effectId: "effect1",
      }
    ]
}, {
    id: "9",
    actions: [
      {
        id: "action90",
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
      <div className="timeline-editor-example7">
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
    )
}

export default TimeLine
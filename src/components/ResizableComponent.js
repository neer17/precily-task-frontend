import React from 'react'
import { ResizableBox } from 'react-resizable'

export default function ResizableComponent({ width, height }) {
  return (
    <ResizableBox
      width={width}
      height={height}
      minConstraints={[100, 100]}
      maxConstraints={[800, 500]}
      axis={'both'}
      style={{
        backgroundColor: '#f8f4f4',
        margin: '10px',
      }}
    >
      <div className="main-container">
        <div className="text-container">
          Magna nulla aute in aliquip. Aliqua in laborum deserunt aliquip
          commodo aute aliquip id aliqua excepteur fugiat ad. Laborum aliquip
          minim est consequat esse nostrud magna ex ex consectetur exercitation
          do veniam. Nulla id dolor ex elit enim minim adipisicing ipsum
          proident anim qui deserunt enim. Quis ut amet quis cupidatat. Ad
          excepteur sunt cupidatat aliquip anim ex officia irure Lorem
          incididunt anim deserunt qui amet. Reprehenderit culpa reprehenderit
          velit commodo do ad elit ex irure enim incididunt aliquip laborum eu.
          Consectetur ipsum deserunt Lorem velit fugiat consequat officia. Amet
          exercitation do elit tempor. Aliqua cillum Lorem cupidatat fugiat. Non
          laborum deserunt mollit aliquip dolore. Lorem amet exercitation
          cupidatat magna in tempor occaecat ipsum duis laborum mollit deserunt.
          Ex est ut pariatur id do.
        </div>
        <div className="btn-container">
          <div className="add-btn">Add</div>
          <div className="update-btn">Update</div>
          <div className="count">Count: {}</div>
        </div>
      </div>
    </ResizableBox>
  )
}

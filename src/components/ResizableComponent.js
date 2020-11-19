import React from 'react'
import { ResizableBox } from 'react-resizable'
import ContentEditable from 'react-contenteditable'

export default class ResizableComponent extends React.Component {
  constructor(props) {
    super(props)
    this.contentEditable = React.createRef()
    this.state = {
      html: `Magna nulla aute in aliquip. Aliqua in laborum deserunt aliquip
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
    Ex est ut pariatur id do.`,
      showSaveBtn: false,
      count: 0,
    }
  }

  handleChange = evt => {
    this.setState({
      html: evt.target.value,
      showSaveBtn: true,
    })
  }

  addContent = () => {
    this.contentEditable.current.focus()
    this.setState({
      html: '',
      showSaveBtn: true,
    })
  }

  updateContent = () => {
    this.contentEditable.current.focus()
    this.setState({
      showSaveBtn: true,
    })
  }

  render = () => {
    const { width, height } = this.props
    const { showSaveBtn, count } = this.state
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
            <div className="text-container--editable">
              <ContentEditable
                innerRef={this.contentEditable}
                html={this.state.html}
                disabled={false}
                onChange={this.handleChange}
                tagName="article"
              />
            </div>
            {showSaveBtn && (
              <div className="text-container--save-btn">Save</div>
            )}
          </div>
          <div className="btn-container">
            <div className="add-btn" onClick={this.addContent}>
              Add
            </div>
            <div className="update-btn" onClick={this.updateContent}>
              Edit
            </div>
            <div className="count">Count: {count}</div>
          </div>
        </div>
      </ResizableBox>
    )
  }
}

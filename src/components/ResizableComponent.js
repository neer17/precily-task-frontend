import React from 'react'
import { ResizableBox } from 'react-resizable'
import ContentEditable from 'react-contenteditable'

import { uploadContent, getData } from '../utils/contactServer'
import { initialString } from './../utils/strings'

/* 
* Resizable component, fetching data on mounting and updating data on "save"
*/
export default class ResizableComponent extends React.Component {
  constructor(props) {
    super(props)
    this.contentEditable = React.createRef()
    this.state = {
      html: initialString,
      showSaveBtn: false,
      count: 0,
      disableSaveBtn: false,
      executionTime: 0,
    }
  }

  // side effect: fetching data 
  componentDidMount() {
    const key = this.props.id
    getData(key)
      .then(({ count, content }) => {
        if (content)
          this.setState({
            count,
            html: content,
          })
      })
      .catch(console.error)
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
    })
  }

  updateContent = () => {
    this.contentEditable.current.focus()
  }

  // uploading data to db, update state
  upload = () => {
    this.setState(
      {
        disableSaveBtn: true,
      },
      async () => {
        const data = {
          key: this.props.id,
          content: this.state.html,
        }
        const { count, executionTime } = await uploadContent(data)
        this.setState({
          disableSaveBtn: false,
          count,
          executionTime,
        })
      }
    )
  }

  render = () => {
    const { width, height } = this.props
    const { showSaveBtn, count, executionTime } = this.state
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
              <div className="text-container--save-btn" onClick={this.upload}>
                Save
              </div>
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
          <div>{`Execution Time: ${executionTime}ms`}</div>
        </div>
      </ResizableBox>
    )
  }
}

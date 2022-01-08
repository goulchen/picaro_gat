import Modal from "react-bootstrap/Modal"
import React, { useRef, useEffect } from "react"
import VideoPlayer from "./videoplayer"
import './VideoModal.scss'

const VideoModal = props => {
  const {URI,title,description} = props.video_data
  const styleBlack = { backgroundColor: "black", color: "white", border: 0 }
  const parentRef = useRef(null)
  const [heightModal, setHeightModal] = React.useState(null)
  useEffect(() => {
    if (props.show && parentRef.current) {
      setHeightModal(parentRef.current.offsetWidth * 0.56)
    }
  }, [parentRef, props.show])

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={styleBlack} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <div className="title">{title}</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ ...styleBlack, padding: 0, height: heightModal }}>
        <div ref={parentRef}>
          {props.show? <VideoPlayer src={URI} height={heightModal} /> : ""}
        </div>
      </Modal.Body>
      <Modal.Footer style={{...styleBlack, justifyContent: "flex-start"}}>
        <div className="description">{description}</div>
      </Modal.Footer>
    </Modal>
  )
}
export default VideoModal

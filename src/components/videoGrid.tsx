import * as React from "react"
import PropTypes from "prop-types"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import Container from "react-bootstrap/Container"
// import Colonne from "react-bootstrap/Col"
// import Row from "react-bootstrap/Row"
// import Button from "react-bootstrap/Button"
import {  GatsbyImage, getImage } from "gatsby-plugin-image"
import VideoModal from "./VideoModal"
import useGetVideoQuery from "../queries/videoQueries"

import "./VideoGrid.scss"

const VideoGrid = () => {
  const data = useGetVideoQuery()

  const [modalShow, setModalShow] = React.useState(false)
  const [videoData, setVideoData] = React.useState({
    URI: "",
    title: "",
    description: "",
  })
  const handleClick = data => {
    setModalShow(true)
    setVideoData(data)
  }
  return (
    <div>
      <VideoModal
        onHide={() => setModalShow(false)}
        show={modalShow}
        video_data={videoData}
      />
      <div className="parentDiv">
        {data.allVideo.nodes.map(video => {
          const imageNode = data.allFile.nodes.filter(node => node.parent.id == video.id)[0]
          const image = getImage(imageNode)
          return (
            <div key={video.link}>
              <button
                className={"col"}
                onClick={handleClick.bind(null, {
                  URI: video.link,
                  title: video.name,
                  description: video.description,
                })}
              >
                <GatsbyImage image={image} alt={video.name} />
              </button>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

VideoGrid.propTypes = {
  aProp: PropTypes.string,
}

VideoGrid.defaultProps = {
  aProp: ``,
}

export default VideoGrid

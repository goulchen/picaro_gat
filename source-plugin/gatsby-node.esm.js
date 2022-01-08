/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
import vimeo_request from './helper/client_vimeo'
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

// import { vimeo_request } from `./helper/client_vimeo`

exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")

// constants for your GraphQL Post and Author types
const POST_NODE_TYPE = `Post`
const VIDEO_NODE_TYPE = `Video`
exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
  getCache,
  _auth

}) => {
  
  const { createNode } = actions
  const videoDataBody = await vimeo_request()
  console.log(videoDataBody.data)
  // loop through data and create Gatsby nodes
  videoDataBody.data.forEach(async video =>{
    const videoId = createNodeId(`${VIDEO_NODE_TYPE}-${video.uri}`)
    let fileNode
    createNode({
      ...video,
      id: videoId,
      parent: null,
      children: [],
      internal: {
        type: VIDEO_NODE_TYPE,
        content: JSON.stringify(video),
        contentDigest: createContentDigest(video),
      },
    })
    fileNode = await createRemoteFileNode({
        url: video.pictures.base_link,
        parentNodeId: videoId,
        getCache,
        createNode,
        createNodeId,
        auth: _auth,
        
      })

  }
  )
  return
}




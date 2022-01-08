import {Vimeo} from "vimeo";

const ACCESS_TOKEN = "32760a4870df03c47ee6d65ea0fc87be";
const CLIENT_ID = "df9daf252c1d8eff572dcdf7650dc883d06ce0c9";
const CLIENT_SECRET = "Es39IQalqgjccwIPmXol0QDHFxGqizDswrsfIvYUY1L9U7Oa1W9qRlyjI38qc4CjBEKyPnWsRKxKP+j2m7M2nO6LNr8wMRD+/ML5Pska/EoXT2o1vxjMy3CUZXF/rviw";

const vimeo_request = async () => {
  return new Promise(function (resolve, reject) {
    var client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);
    client.request(
      /*options*/ {
        path: "/users/goulchenlemeur/albums/9142071/videos",
        query: {
          // fields: "uri,name,description",
          sort: "manual",
          // fields: 'metadata.connections.videos'
        },
      },
      /*callback*/ function (error, body, status_code, headers) {
        if (error) {
          console.log("error");
          reject(error);
        } else {
          console.log("body");
          resolve(body);
        }
      }
    );
  });
  // console.log(data)
  // return data
};

export default vimeo_request;
// module.exports.vimeo_request = vimeo_request
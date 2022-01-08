import {Vimeo} from "vimeo";
let ACCESS_TOKEN, CLIENT_ID, CLIENT_SECRET, PATH

try{
  var passwords = require('../../.passwords.json');
   ACCESS_TOKEN = passwords.vimeo.ACCESS_TOKEN ;
   CLIENT_ID = passwords.vimeo.CLIENT_ID;
   CLIENT_SECRET = passwords.vimeo.CLIENT_SECRET;
   PATH = passwords.vimeo.PATH;
  }catch(e) {
    // console.log(e)
     ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;
     CLIENT_ID = process.env.VIMEO_CLIENT_ID;
     CLIENT_SECRET = process.env.VIMEO_CLIENT_SECRET;
     PATH = process.env.VIMEO_CLIENT_PATH;
    }

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
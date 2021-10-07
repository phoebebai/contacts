//This class is used to post images to the image endpoint
import axios from "axios";
import config from "../config";

export default function uploadImage(base64EncodedImageList) {
  return axios.post(
    config.IMAGE_API_URL + "/upload", JSON.stringify({
      data: base64EncodedImageList
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
}

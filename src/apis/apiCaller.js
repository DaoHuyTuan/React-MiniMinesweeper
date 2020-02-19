import axios from "axios";
const METHOD_GET = "GET";

async function requestAPI(method, url, headers = {}, dataBody, isNotReject) {
    return fetch('http://example.com/movies.json')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
    });
  }
  export default {
    get(url, dataBody, headers = {}, isNotReject) {
      return requestAPI(METHOD_GET, url, headers, dataBody, isNotReject);
    },
  };
  
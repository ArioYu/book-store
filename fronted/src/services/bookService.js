
import {postRequest, postRequest_v2} from "../utils/ajax";


export const getBooks = (callback) => {
    const url = "http://localhost:8080/getBooks";
    postRequest(url,callback);
};

export const getBook = (id, callback) => {
    const data = {id: id};
    const url = "http://localhost:8080/getBook";
    postRequest_v2(url, data, callback);

};
"use strict";

class HttpService {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    async get(endpoint) {
        return _sendRequest("GET", this._baseUrl + endpoint);
    }

    async post(endpoint) {
        return _sendRequest("POST", this._baseUrl + endpoint);
    }
}

function _sendRequest(accessMethod, url, body) {
    return new Promise((resolve, reject) => {
        const request = _createRequest(accessMethod, url);
        request.send(body);
        request.onload  = function() {
            if (request.status >= 200 && request.status < 300) {
                resolve(JSON.parse(request.response));
            }
            else {
                reject(request.response);
            }
        };
    });
}

function _createRequest(accessMethod, url) {
    const request = new XMLHttpRequest();
    request.open(accessMethod, url, true);
    return request;
};

export default HttpService;
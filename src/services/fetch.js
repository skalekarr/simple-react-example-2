import 'isomorphic-fetch';

function parseJSONResponse(response) {
    return response.json();
}

function getResponse(response) {
    return response;
}

export default function fetchData() {
    return global.fetch('./../pizza.json')
        .then(parseJSONResponse)
        .then(getResponse);
}


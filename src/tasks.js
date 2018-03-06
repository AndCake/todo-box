import fetch from '../lib/fetch';

function btoa(text) {
    return Buffer.from(text).toString('base64');
}

export async function load(data, ctx) {
    let credentials = ctx.request.body || {};
    if (!credentials.url) {
        return Promise.resolve('');
    }
    return fetch(credentials.url, {
        headers: {
            'Authorization': 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        }
    }).then(data => data.text()).then(list => ({tasks: list})).catch(e => console.error(e));
}

export async function save(devnull, ctx) {
    let {credentials, data} = ctx.request.body || {};
    if (!credentials) {
        return Promise.reject('Unable to connect due to missing credentials.');
    }
    return fetch(credentials.url, {
        method: 'PUT',
        body: data,
        headers: {
            'Authorization': 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        }
    }).then(res => res.status === '204' ? data : res.text()).then(list => ({tasks: list})).catch(error => (console.error('ERROR OCCURRED WHILE UPLOADING: ', error), {tasks:data}));
}
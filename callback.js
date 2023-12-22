// callback practices from here -->
const fetch = require('node-fetch')
let root = 'https://jsonplaceholder.typicode.com/todos/1'

function imgDownload(api,callback) {
    let images = '';
    fetch(api).then(res=> {
        console.log('Api Response::',res)
        images += res;
        callback();
    }).catch(err=> console.log(err));
    document.body.innerHTML = images;
}
function callback(error,image){
    if(error)
        console.log("There is error in downloading");
    else
        console.log("downloading finished");
}

imgDownload(root, callback);

console.log("download started");

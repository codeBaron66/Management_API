const form = document.querySelector('#form');
const fileName = document.querySelector('#filename');
const fileInput = document.getElementById('chooseFile');

form.addEventListener('submit', createMedia);

const resp = [];

function uploadParts(){
    let URL = `https://api.jwplayer.com/v2/uploads/${resp[0].upload_id}/parts?page=1&page_length=50`;
    fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': resp[0].upload_token
        }
    })
    .then(response => response.json())
    .then(response => console.log(response))
}

function createMedia(e){
    e.preventDefault();
    let URL = 'https://api.jwplayer.com/v2/sites/site_id/media/';
    fetch(URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'API_KEY'
        },
        body: JSON.stringify({
            upload: {
                'method': 'multipart',
                'mime_type': 'video/mp4',
            },
            metadata: {
                'title': fileName.value,
                'description': 'uploading using APIv2',
                'category': 'Careers',
                'language': 'en'
            }
        })
    })
    .then(response => response.json())
    .then(function(res){
        let id = res["upload_id"];
        let token = res["upload_token"]
        resp.push({
            "upload_id": id,
            "upload_token": token
        });
    });
    setTimeout(function(){
        uploadParts();
    }, 1000);
}

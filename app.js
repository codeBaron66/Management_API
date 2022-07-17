const form = document.querySelector('#form');
const fileName = document.querySelector('#filename');
const fileInput = document.getElementById('chooseFile');

form.addEventListener('submit', createMedia);
const resp = [];

function uploadMedia(){
    fetch(resp[0], {
        method: "PUT",
        headers: {
            'Content-Type': 'video/mp4',
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
                'method': 'direct',
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
        let upLink = res["upload_link"];
        resp.push(upLink)
        uploadMedia();
    });
}

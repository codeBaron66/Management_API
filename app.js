const form = document.querySelector('#form');
const fileName = document.querySelector('#filename');
const fileInput = document.getElementById('chooseFile');
const URL = 'https://api.jwplayer.com/v2/sites/CivsmZGh/media/';

form.addEventListener('submit', createMedia);

// function getMediaParts(f){
//     alert("fjfw");
//     const mediaID = f.id; 
//     console.log(mediaID);
// }
const resp = [];

function createMedia(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("fileName", fileInput.files[0]);

    fetch(URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'gG_69lS7o52T-G8dc-Y4tmInVlVKbWQybHBNbEZUZG5OdFJ6aExjbnB6Vm5kak0xbHIn'
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
        console.log(resp)
    });
    // .then();
    //     let id = res[0]["upload_id"]
    //     let token = res[0]["upload_token"]
    //     resp.push({
    //         "upload_id": id,
    //         "upload_token": token

    //     console.log(resp);
    // })
};


// .then(response => response.json())
//     .then(response => console.log(response.id))
//     .catch(err => console.error(err))
//     getMediaParts(this.response);

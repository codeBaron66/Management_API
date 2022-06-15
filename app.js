const form = document.querySelector("#form").addEventListener("submit", getFormData); 
const taskInput = document.querySelector('#filenName');

const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'key': 'firstkey',
      'Authorization': 'gG_69lS7o52T-G8dc-Y4tmInVlVKbWQybHBNbEZUZG5OdFJ6aExjbnB6Vm5kak0xbHIn'
    },
    body: JSON.stringify({
      upload: {
        'method': 'fetch',
        'mime_type': 'video/mp4',
        'source_url': 'https://cdn.jwplayer.com/videos/xLfyEXIR-794g9pAg.mp4'
      },
      metadata: {
        'title': 'APIVID',
        'description': 'uploading using APIv2',
        'category': 'Careers',
        'language': 'en',
        'external_id': 'ThisID'
      }
    })
  };

function getFormData(e){
    console.log(e);


    // e.preventDefault();
};

// function postVid (){
//     fetch('https://api.jwplayer.com/v2/sites/xLfyEXIR/media/', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// };
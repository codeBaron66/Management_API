const form = document.querySelector('#form');
const taskInput = document.querySelector('#filename');
const fileInput = document.querySelector('input[type="file"]');
// const file = fileInput.files[0];
// file instanceof File;
// file instanceof Blob;
// const fd = new FormData();


// loadEventListeners();

// function loadEventListeners(){
//     form.addEventListener('submit', getFormData); 
// };


fileInput.addEventListener('change', (e) => {

    const fd = new FormData();
  
    // add all selected files
    e.target.files.forEach((file) => {
      fd.append(e.target.name, file, file.name); 
      console.log(e.target.name, file, file.name); 
    });
});
// function getFormData(e){
//     e.target.files.forEach((file) => {
//         fd.append(e.target.name, file, file.name);  
//       });
//     e.preventDefault();
// };













// const options = {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'key': 'firstkey',
//       'Authorization': 'gG_69lS7o52T-G8dc-Y4tmInVlVKbWQybHBNbEZUZG5OdFJ6aExjbnB6Vm5kak0xbHIn'
//     },
//     body: JSON.stringify({
//       upload: {
//         'method': 'multipart',
//         'mime_type': 'video/mp4',
//         'source_url': 'https://cdn.jwplayer.com/videos/xLfyEXIR-794g9pAg.mp4'
//       },
//       metadata: {
//         'title': 'APIVID',
//         'description': 'uploading using APIv2',
//         'category': 'Careers',
//         'language': 'en',
//         'external_id': 'ThisID'
//       }
//     })
//   };


// function postVid (){
//     fetch('https://api.jwplayer.com/v2/sites/xLfyEXIR/media/', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// };


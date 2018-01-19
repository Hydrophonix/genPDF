const div = document.getElementById('link');
let data = {};

const xhr = new XMLHttpRequest();

xhr.open('PUT', '/test', true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = () => {
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
    console.log('error');
  } else {
    const data = JSON.parse(xhr.responseText);
    if (data.status !== 'success') {
      console.log('error');
    }
  }
};

div.addEventListener('click', function () {
  const inp = document.getElementsByTagName('input');
  Array.from(inp, item => data[item.name] = item.value);
  console.log(2);
  // console.log(Array.from(inp, item => item.value));
  console.log(data);
  xhr.send(JSON.stringify(data));
})

console.log(1);
// Array.from(document.getElementsByClassName('delete-button'), item => {
//   const id = item.getAttribute('name');
//   item.addEventListener('click', function() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('DELETE', id, true);
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState != 4) return;
//       if (xhr.status != 200) {
//         console.log('error');
//       } else {
//         const data = JSON.parse(xhr.responseText);
//         if (data.status !== 'success') {
//           console.log('error');
//         } else {
//           window.location.reload();
//         }
//       }
//     };
//     xhr.send();
//   });
// });

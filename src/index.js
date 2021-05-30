console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchDogs() {
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderDogs(json))
}

function renderDogs() {

}

document.addEventListener("DOMContentLoeaded", function() {
  fetchDogs();
})
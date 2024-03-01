window.onload = function () {
    let movie1 = localStorage.getItem('movie1')
    movie1 = JSON.parse(movie1);
    const title = document.querySelector('.title');
    title.innerText = `${movie1.title}`;
    const original = document.querySelector('.original-title');
    original.innerText = `${movie1.original_title}`;
    const overview = document.querySelector('.overview');
    overview.innerText = `${movie1.overview}`;
    const pop = document.querySelector('.pop');
    const popularityInt = movie1.popularity.toString().split('.')[0]; // 소수점 앞 부분만 추출
    pop.innerText = `⭐ : ${popularityInt} / 1000`;
    
    const release = document.querySelector('.release');
    release.innerText = `${movie1.release_date}`;

    const img = document.querySelector('img');
    img.src = movie1.image;


    localStorage.clear();
}


const sub = () => {
  let ta_input = document.getElementById('textarea-input').value;
  let reviewDiv = document.getElementById('review-list');
  reviewDiv.innerHTML += `<div id="review-list" class="review-list">
    <div <div class="review-content p-5 mb-3 rounded">${ta_input}</div>
      </div>`;
}

const iii = () =>{
  console.log('hi');
}
const iiii = () =>{
  console.log('hi');
}
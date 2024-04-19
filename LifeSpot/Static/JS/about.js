let likeCounter = '';

const rateButton = document.getElementById('rateButton');
const likeButton = document.getElementById('likeCounter');

function Comment() {

    this.name = prompt("Как вас зовут ?")
    if (this.name == null) {
        this.empty = true
        return
    }

    this.comment = prompt("Оставьте отзыв")
    if (this.comment == null) {
        this.empty = true
        return
    }

    this.date = new Date().toLocaleString()
}


function rateProject() {

    let review = new Comment()

    if (review.empty) {
        return;
    }

    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if (enableLikes) {
       
        let reviewWithRating = Object.create(review)
        
        reviewWithRating.rate = 0;

        writeOnPage(reviewWithRating)

    } else {
        
        writeOnPage(review)
    }

   


}

function addLike(id) {

    let element = document.getElementById(id);
  
    let array = element.innerText.split(' ')

    let resultNum = parseInt(array[array.length - 1], 10);

    resultNum += 1

    array[array.length - 1] = `${resultNum}`

    element.innerText = array.join(' ')
}

const writeOnPage = review => {

    

    if (review.hasOwnProperty('rate')) {

        let commentId = Math.random();

        likeCounter += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`
    }

    document.getElementsByClassName('rates')[0].innerHTML += `
    
        <div class="name">
            ${review["name"]}
        </div>
        <div class="comment">
            ${review["comment"]}
        </div>
        <div class="date">
            ${review['date']}${likeCounter}
        </div>
    `
}



const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let slideIndex = 0;
let startX;
let isDragging = false;

const slides = document.querySelectorAll('.slides img');

function showSlide(n) {

    prevButton.style.display = 'block'
    nextButton.style.display = 'block'


    if (n >= slides.length - 1) {
        nextButton.style.display = 'none'
    }
    if (n == 0) { prevButton.style.display = 'none' }


    slides.forEach(slide => slide.style.display = 'none');

    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(slideIndex += 1);

    console.log(slideIndex)
}

function prevSlide() {
    showSlide(slideIndex -= 1);

    console.log(slideIndex)
}

function handleStart(event) {
    startX = event.clientX;
    isDragging = true;
}


function handleMove(event) {
    if (!isDragging) return;
    const diffX = event.clientX - startX;
    if (diffX > 50 && slideIndex != 0) {
        prevSlide();
        isDragging = false;
    } else if (diffX < -50 && slideIndex != slides.length - 1) {
        nextSlide();
        isDragging = false;
    }
}

function handleEnd() {
    isDragging = false;
}




showSlide(slideIndex);

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
document.querySelector('.slider').addEventListener('mousedown', handleStart);
document.addEventListener('mousemove', handleMove);
document.addEventListener('mouseup', handleEnd);



rateButton.addEventListener('click', rateProject);
likeButton.addEventListener('click', addLike);




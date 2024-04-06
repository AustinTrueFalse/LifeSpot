


const rateButton = document.getElementById('rateButton');



function rateProject() {


    let review = {
        name: '',
        comment: '',
        date: ''
    }


    review["name"] = prompt("Напишите свое имя")
    if (review["name"] == null) {
        return
    }

    review["comment"] = prompt("Напишите свой отзыв")

    if (review["comment"] == null) {
        return
    }

    review["date"] = new Date().toLocaleString()

   
    writeOnPage(review)

    console.log(review["name"])
    console.log(review["comment"])
    
}

const writeOnPage = review => {


    document.getElementsByClassName('rates')[0].innerHTML += `

    
        <div class="name">
            ${review["name"]}
        </div>
        <div class="comment">
            ${review["comment"]}
        </div>
        <div class="date">
            ${review["date"]}
        </div>
    
    
    `

}






rateButton.addEventListener('click', rateProject);
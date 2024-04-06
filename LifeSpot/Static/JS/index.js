
let session = new Map();


function checkAge() {

    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate)
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

const subsctiptionAlert = function() {
    alert("Подпишитесь, на нас, пожалуйста")
}



function handleSession() {

    session.set("startDate", new Date().toLocaleString())
    session.set("userAgent", window.navigator.userAgent)


    for (let result of session) {
        console.log(result)
    }

    const intervalId = setInterval(subsctiptionAlert, 5000)

    const timeoutId = setTimeout(function () {
        clearInterval(intervalId)
    }, 5000)

}

let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}


const inputParseFunction = function () {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
}

function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction() /* Захват переменной теперь происходит с помощью замыкания */.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}
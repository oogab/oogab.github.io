// 이렇게 많이 안쓰고 만들 수 있는 방법이 없을까?
const engineer = document.querySelector("#engineer")
const artist = document.querySelector("#artist")
const leader = document.querySelector("#leader")

const esorbit = document.querySelector(".earth-orbit")
const vnorbit = document.querySelector(".venus-orbit")
const mcorbit = document.querySelector(".mercury-orbit")

const earth = document.querySelector(".earth")
const venus = document.querySelector(".venus")
const mercury = document.querySelector(".mercury")

engineer.addEventListener('mouseover', function () {
    esorbit.classList.add("orbit-hover")
    earth.classList.add("planet-hover")
})
engineer.addEventListener('mouseout', function () {
    esorbit.classList.remove("orbit-hover")
    earth.classList.remove("planet-hover")
})

artist.addEventListener('mouseover', function () {
    vnorbit.classList.add("orbit-hover")
    venus.classList.add("planet-hover")
})
artist.addEventListener('mouseout', function () {
    vnorbit.classList.remove("orbit-hover")
    venus.classList.remove("planet-hover")
})

leader.addEventListener('mouseover', function () {
    mcorbit.classList.add("orbit-hover")
    mercury.classList.add("planet-hover")
})
leader.addEventListener('mouseout', function () {
    mcorbit.classList.remove("orbit-hover")
    mercury.classList.remove("planet-hover")
})

const vwork = document.querySelector(".view-work")
const varrow = document.getElementById("view-arrow")

// 여기 화살표 방향 전환을 부드럽게 하고 싶다.
// 그럼 결국 화살표를 이미지 파일로 두고 css hover에서 transition을 걸어야 하나?
vwork.addEventListener('mouseover', function () {
    varrow.classList.replace('fa-arrow-right', 'fa-arrow-down')
})
vwork.addEventListener('mouseout', function () {
    varrow.classList.replace('fa-arrow-down', 'fa-arrow-right')
})

//Get the button:
const mybutton = document.getElementById("myBtn");
const rocket = document.getElementById("top-button")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

mybutton.addEventListener('mouseover', function () {
    rocket.setAttribute('src', './img/rocket-flying.svg')
})

mybutton.addEventListener('mouseout', function () {
    rocket.setAttribute('src', './img/rocket-flying-white.svg')
})

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
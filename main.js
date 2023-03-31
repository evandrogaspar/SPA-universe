const linkHome = document.querySelector(".linkHome")
const linkUniverse = document.querySelector(".linkUniverse")
const linkExplorer = document.querySelector(".linkExplorer")
const btnHome = document.querySelector(".btnHome")
const body = document.querySelector("body")


linkHome.addEventListener('click', () => {
  linkHome.classList.add('active')
  linkUniverse.classList.remove('active')
  linkExplorer.classList.remove('active')
  body.classList.remove('bgUniverse')
  body.classList.remove('bgExplorer')
})

linkUniverse.addEventListener('click', () => {
  linkUniverse.classList.add('active')
  linkHome.classList.remove('active')
  linkExplorer.classList.remove('active')
  body.classList.add('bgUniverse')
  body.classList.remove('bgExplorer')
})

linkExplorer.addEventListener('click', () => {
  linkExplorer.classList.add('active')
  linkHome.classList.remove('active')
  linkUniverse.classList.remove('active')
  body.classList.add('bgExplorer')
  body.classList.remove('bgUniverse')
})


const routes ={
  "/": "./pages/home.html",
  "/universe" : "./pages/universe.html",
  "/explorer" : "./pages/explorer.html",
}


function route(event){
event = event || window.event
event.preventDefault()

window.history.pushState({}, "", event.target.href)

handle()
}

function handle(){
  const { pathname } = window.location
  const route = routes[pathname]

  fetch(route)
  .then((data) => data.text())
  .then((html => {
    document.querySelector("#app").innerHTML = html
  }))
}

handle()

window.onpopstate = () => handle()

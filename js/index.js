import { Router } from "./route.js"

const linkHome = document.querySelector(".linkHome")
const linkUniverse = document.querySelector(".linkUniverse")
const linkExplorer = document.querySelector(".linkExplorer")
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


const router = new Router()
router.add("/", "./pages/home.html")
router.add("/universe", "./pages/universe.html")
router.add("/explorer", "./pages/explorer.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


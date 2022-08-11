import { cars } from "./cars.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = cars()
}
renderAllHTML()

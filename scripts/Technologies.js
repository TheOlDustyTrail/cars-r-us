import { getTechnology, setTechnology } from "./database.js"
const techs = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const selectTechnologies = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
            <option value="0">Select a technology package</option>
            ${techs.map(
        (tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        }
    ).join("")
        }
        </select>
    `
}
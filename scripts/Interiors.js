import { getInterior, setInterior } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "int") {
            setInterior(parseInt(event.target.value))
        }
    }
)


const interiors = getInterior()

export const selectInteriors = () => {
    return `<h2>Interiors</h2>
        <select id="int">
            <option value="1">Select a seat type</option>
            ${interiors.map(
        (interior) => {
            return `<option value="${interior.id}">${interior.seatType}</option>`
        }
    ).join("")
        }
        </select>
    `
}
import { getInterior } from "./database.js"




const interiors = getInterior()

export const selectInteriors = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
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
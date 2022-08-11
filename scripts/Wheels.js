import { getWheels } from "./database.js"


const wheels = getWheels()

export const selectWheels = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
            <option value="1">Select a wheel type</option>
            ${wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    ).join("")
        }
        </select>
    `
}
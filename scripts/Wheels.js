import { getWheels, setWheels } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

const wheels = getWheels()

export const selectWheels = () => {
    return `<h2>Wheels</h2>
        <select id="wheel">
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
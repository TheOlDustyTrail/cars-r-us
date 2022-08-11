import { getPaintColor, setPaint } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

const paints = getPaintColor()
export const selectPaint = () => {
    return `<h2>Paints</h2>
        <select id="paint">
            <option value="1">Select a paint color</option>
            ${paints.map(
        (paint) => {
            return `<option value="${paint.id}">${paint.name}</option>`
        }
    ).join("")
        }
        </select>
    `
}
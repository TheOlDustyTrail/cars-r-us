import { getPaintColor } from "./database.js"

const paints = getPaintColor()
export const selectPaint = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
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
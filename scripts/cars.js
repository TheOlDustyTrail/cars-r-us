import { selectTechnologies } from "./Technologies.js"
import { selectWheels } from "./Wheels.js"
import { selectPaint } from "./Paints.js"
import { selectInteriors } from "./Interiors.js"

export const cars = () => {
    return `
    <h1>Cars R US</h1>
    <article class="choices">
    <section class="choices__tech options">
        
        ${selectTechnologies()}
    </section>
    <section class="choices__wheel options">
        
        ${selectWheels()}
    </section>
    <section class="choices__paint options">
        
        ${selectPaint()}
    </section>
    <section class="choices__interior options">
        
        ${selectInteriors()}
    </section>
</article>

    `
}
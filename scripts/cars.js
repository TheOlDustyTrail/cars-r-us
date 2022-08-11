import { selectTechnologies } from "./Technologies.js"
import { selectWheels } from "./Wheels.js"
import { selectPaint } from "./Paints.js"
import { selectInteriors } from "./Interiors.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("orderButton")) {
            addCustomOrder()
        }
    }
)
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
<article>
            <button id="orderButton">Place Car Order</button>
            
        </article>
        <article class="customOrders">
        <h2>Custom Jewelry Orders</h2>
        ${Orders()}
    </article>

    `
}
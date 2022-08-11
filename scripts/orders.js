import { getPaintColor, getInterior, getTechnology, getWheels, getOrders } from "./database.js"
const colors = getPaintColor()
const interiors = getInterior()
const wheels = getWheels()
const techs = getTechnology()


const buildOrderListItem = (order) => {
    const foundcolor = colors.find(
        (color) => {
            return color.id === order.paintColorId
        }
    )
    const foundInteriors = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    const foundTechs = techs.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )



    const totalCost = foundInteriors.price + foundWheels.price + foundTechs.price + foundcolor.price


    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        ${foundcolor.name} car with ${foundWheels.type}, ${foundInteriors.seatType} ,and the ${foundTechs.package}for a total cost of ${costString}
    </li>`
}

export const Orders = () => {



    const orders = getOrders()


    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


const database = {
    paintColor: [{
        id: 1,
        name: "Silver",
        price: 150
    },
    {
        id: 2,
        name: "Midnight Blue",
        price: 250
    },
    {
        id: 3,
        name: "Firebrick Red",
        price: 250
    },
    {
        id: 4,
        name: "Spring Green",
        price: 200
    }
    ],
    interior: [{
        id: 1,
        seatType: "Beige Fabric",
        price: 350
    },
    {
        id: 2,
        seatType: "Charcoal Fabric",
        price: 370
    },
    {
        id: 3,
        seatType: "White Leather",
        price: 360
    },
    {
        id: 4,
        seatType: "Black Leather",
        price: 340
    }],
    technology: [{
        id: 1,
        package: "Basic Package (basic sound system)",
        price: 150
    }, {
        id: 2,
        package: "Navigation Package (includes integrated navigation controls)",
        price: 250.87
    }, {
        id: 3,
        package: "Visibility Package (includes side and reat cameras)",
        price: 350.56
    }, {
        id: 4,
        package: "Ultra Package (includes navigation and visibility packages)",
        price: 500.99
    }],
    wheels: [{
        id: 1,
        type: "17-inch Pair Radial",
        price: 150
    }, {
        id: 2,
        type: "17-inch Pair Radial Black",
        price: 250
    }, {
        id: 3,
        type: "18-inch Pair Spoke Silver",
        price: 350
    }, {
        id: 4,
        type: "18-inch Pair Spoke Black",
        price: 400
    },],
    orders: [{
        id: 1,
        wheelsId: 4,
        paintColorId: 3,
        technologyId: 1,
        interiorId: 2,
        price: "",
        timeStamp: 1614659931693

    }], orderBuilder: {


    }
}
export const getPaintColor = () => {
    return database.paintColor.map(paint => ({ ...paint }))
}
export const getInterior = () => {
    return database.interior.map(int => ({ ...int }))
}
export const getTechnology = () => {
    return database.technology.map(tech => ({ ...tech }))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}
export const getOrders = () => {
    return database.orders.map(order => ({ ...order }))
}

export const setPaint = (id) => {
    database.orderBuilder.paintColorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}





export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}



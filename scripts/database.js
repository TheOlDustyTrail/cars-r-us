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
        id: 2,
        name: "Firebrick Red",
        price: 250
    },
    {
        id: 2,
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
        price: 250
    }, {
        id: 3,
        package: "Visibility Package (includes side and reat cameras)",
        price: 350
    }, {
        id: 4,
        package: "Ultra Package (includes navigation and visibility packages)",
        price: 500
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
        wheelsId: 1,
        paintColorId: 1,
        technologyId: 1,
        interiorId: 1,
        price: 1,
        timeStamp: 1
    }]
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




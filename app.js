const iceCream = [{
    name: 'Chocolate',
    price: 1.25,
    quantity: 0
}, 
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
}, 
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
}, 
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: .5,
    quantity: 0
}]

const vessels =[{
    name: 'Waffle Cone',
    price: 1,
    quantity: 0
},
{
    name: 'Waffle Bowl',
    price: 1.25,
    quantity: 0
},
{
    name: 'Basic Bowl',
    price: 0,
    quantity: 0
}]


function getToppings(toppingName){
    // console.log('this?', toppingName)
    const foundTopping = toppings.find(topping => topping.name == toppingName)
    foundTopping.quantity++
    // console.log(foundTopping)
    getToppingTotal()
    drawToppingCart()
}

function getVessels(vesselName){
    // console.log('Have a', vesselName)
    const foundVessel = vessels.find(vessel => vessel.name == vesselName)
    foundVessel.quantity++
    // console.log(foundVessel)
    getVesselTotal()
}
function getIceCream(iceCreamName){
    // console.log('would you like ', iceCreamName,'?')
    const foundIceCream = iceCream.find(iceCream => iceCream.name == iceCreamName)
    foundIceCream.quantity++
    // console.log(foundIceCream)
    getIceCreamTotal()
}

function getToppingTotal(){
    let toppingsTotal = 0
    toppings.forEach(topping => {
        const toppingTotal = topping.quantity * topping.price
        toppingsTotal += toppingTotal})
        console.log(toppingsTotal)
        return toppingsTotal
}
function getVesselTotal(){
    let vesselsTotal = 0
    vessels.forEach(vessel => {
        const vesselTotal = vessel.quantity * vessel.price
        vesselsTotal += vesselTotal})
        console.log(vesselsTotal)
        return vesselsTotal
}
function getIceCreamTotal(){
    let iceCreamTotals = 0
    iceCream.forEach(cone => {
        const iceCreamTotal = cone.quantity * cone.price
        iceCreamTotals += iceCreamTotal})
        console.log(iceCreamTotals)
        return iceCreamTotals
}

// FIXME ------ This is where I left off, trying to figure out how to show the stuff I put in the other functions to appear in the first 'cart'
// I wound up not being able to figure it out on my own and Whiteboard Wednesday is ongoing in tbe background
// I may come back and try and fix this later but I don't have much hope on my own, so for now I'm submitting it
function drawToppingCart(){
    let toppingContent = ''
    const toppingCart = document.getElementById('topping cart')
    toppingCart.innerText = toppingContent
}
function drawVesselCart(){

}
function drawIceCreamCart(){

}

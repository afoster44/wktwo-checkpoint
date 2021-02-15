let cheese = 0
let multiplied = 0
let autoMultiplied = 0
//we need to build an object for our upgrades

let shopUpgradesObj = {
    chisel: {
        price: 100,
        quantity: 0,
        multiplier: 1.5
    },
    moonDrill: {
        price: 200,
        quantity: 0,
        multiplier: 3
    }
}

//lets set up a function that will handle "buying" a chisel
function buyChisel(objKey) {
    let chiselElem = shopUpgradesObj[objKey]
    if (cheese >= chiselElem.price) {
        chiselElem.quantity++;
        chiselElem.price += 50;
        cheese -= chiselElem.price;
        multiplied += chiselElem.multiplier;
        drawInfoUpgrades();
        drawInfoWindow();
    }
}

//function for "buying" moon drill
function buyMoonDrill(objectKey) {
    let moonDrillElem = shopUpgradesObj[objectKey];
    if (cheese >= moonDrillElem.price) {
        moonDrillElem.quantity++;
        moonDrillElem.price += 100;
        cheese -= moonDrillElem.price;
        multiplied += moonDrillElem.multiplier;
        drawInfoUpgrades();
        drawInfoWindow();
    }
}

let autoUpgradesObj = {
    mobileLaser: {
        price: 500,
        quantity: 0,
        multiplier: 10
    },
    moonTiteDrill: {
        price: 1000,
        quantity: 0,
        multiplier: 30
    }
}

//functions for auto upgrades

function buyMobileLaser(autoObjKey) {
    let mobileLaserElem = autoUpgradesObj[autoObjKey]
    if (cheese >= mobileLaserElem.price) {
        mobileLaserElem.quantity++;
        mobileLaserElem.price += 250;
        cheese -= mobileLaserElem.price;
        autoMultiplied += mobileLaserElem.multiplier;
        drawInfoUpgrades();
        drawInfoWindow();
    }
}

function buyMoonTiteDrill(autoObjectKey) {
    let mtDrillElem = autoUpgradesObj[autoObjectKey]
    if (cheese >= mtDrillElem.price) {
        mtDrillElem.quantity++;
        mtDrillElem.price += 500;
        cheese -= mtDrillElem.price;
        autoMultiplied += mtDrillElem.multiplier;
        drawInfoUpgrades();
        drawInfoWindow();
    }
}







//we need a function to iterate over our shop object
//dont think we need this function at all for now
// let shopIndex = function iterateOverShop() {
//     for (let key in shopUpgradesObj) {
//         shopUpgradesObj[key];
//     }
// }

//first thing I don't want my click to only increment my global cheese
//count by one...I wan't it to go += 5 then my first item can give me a modifier of 2 or *2
function mine() {
    cheese += 5;
    cheese += multiplied
    console.log(cheese);
    drawInfoWindow()
}

function autoMine() {
    cheese += autoMultiplied
    drawInfoWindow();
}

//update function to dynamically add info to Total Cheese mined
function drawInfoWindow() {
    let cheeseMinedTotalElem = document.getElementById('cheese-mined').innerHTML = `
    <p id="cheese-mined">Cheese Mined: ${cheese}</p>
    `
    let totalMultiplier = document.getElementById('total-multiplier').innerHTML = `
    <p id="total-multiplier">Total Multiplier: ${multiplied}</p>
    `
    let totalAutoMultiplier = document.getElementById('total-auto-multiplier').innerHTML = `
    <p id="total-auto-multiplier">Total Auto Mining: ${autoMultiplied}</p>
    `
}


//this function supplies all of the information in our Upgrades window
function drawInfoUpgrades(keyInObj) {
    let template = ''
    template += document.getElementById('shop-card').innerHTML = `
    <h2>Upgrades</h2>
    <button class="btn btn-primary" onclick="buyChisel('chisel')" id="chisel-purchase"> Buy Chisel </button>
    <h5 class="chisel-quantity">Chisel Price: ${shopUpgradesObj['chisel'].price}  Chisel    Quantity: ${shopUpgradesObj['chisel'].quantity}  </h5>
    <button class="btn btn-success" onclick="buyMoonDrill('moonDrill')"> Buy Moon Drill </button>
    <h5 class="drill-quantity">Moon Drill Price: ${shopUpgradesObj['moonDrill'].price} Moon Drill   Quantity: ${shopUpgradesObj['moonDrill'].quantity} </h5>
    <button class="btn btn-primary" onclick="buyMobileLaser('mobileLaser')"> Buy Mobile
    Laser</button>
    <h5>Moon Laser Price: ${autoUpgradesObj['mobileLaser'].price}   Quantity: ${autoUpgradesObj['mobileLaser'].quantity}</h5>
    <button class="btn btn-success" onclick="buyMoonTiteDrill('moonTiteDrill')"> Buy Moon Tite Drill</button>
    <h5>MT Laser Price: ${autoUpgradesObj['moonTiteDrill'].price} Quantity: ${autoUpgradesObj['moonTiteDrill'].quantity}</h5>
    
    `
}
drawInfoUpgrades()

let mobileLaserInterval = setInterval(autoMine, 3000)
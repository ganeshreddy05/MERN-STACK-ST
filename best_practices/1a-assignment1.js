console.log("Functional Programming...");

// Ganesh Details DB
let GANESH_WALLET_BALANCE = 300000;
let GANESH_ADDRESSES = [
    {
        id: "GANESH001",
        flatNumber: "108",
        buildingName: "Green building",
        street: "Jaya prakash nagar",
        pincode: "500043",
        landmark: "near hanuman  temple",
        city: "hyderabad",
        state: "TG"
    }, 
    {
        id: "GANESH002",
        flatNumber: "201",
        buildingName: "PREMREDDY",
        street: "Nidzur",
        pincode: "518004",
        landmark: "near school",
        city: "Kurnool",
        state: "AP"
    }
]

// details of app 
let DISCOUNT_MAPPINGS = {
    "FIRSTORDER": 10,
    "XMAS30": 30
}

let DELIVERY_PARTNERS = [
    { id: "NAG12", name: "Nagesh", drops: [] },
    { id: "RAK23", name: "Rakesh", drops: [] }
] 

let ORDERS = [];

// FUNCTIONS 
function calculateTotal(orderItems) {
    let totalPrice = 0;
    for (let item in orderItems) {
        let price = orderItems[item].price * orderItems[item].quantity;
        totalPrice = totalPrice + price;
    }
    return totalPrice;
}

function applyDiscount(totalPrice, discountCoupon) {
    let discountCouponPercentage = DISCOUNT_MAPPINGS[discountCoupon];
    if (discountCouponPercentage) {
        return totalPrice - totalPrice * (discountCouponPercentage / 100);
    }
    return totalPrice;
}

function deductWallet(amount) {
    if (amount < GANESH_WALLET_BALANCE) {
        GANESH_WALLET_BALANCE = GANESH_WALLET_BALANCE - amount;
    }
}

function getAddress(addressId) {
    let deliveryAddress = null;
    for (let address of GANESH_ADDRESSES) {
        if (address.id === addressId) {
            deliveryAddress = address;
        }
        
    }
    return deliveryAddress;
}

function assignOrderToPartner(order) {
    order.deliveryPartner = "NAG12";
    for (let deliveryPartner of DELIVERY_PARTNERS) {
        if (deliveryPartner.id === "NAG12") {
            deliveryPartner.drops.push(order);
        }
    }
}

function createOrder(orderPrice, deliveryAddress) {
    let newOrder = {
        orderId: "001",
        orderPrice: orderPrice,
        deliveryAddress: deliveryAddress,
        status: "PLACED"
    };
    return newOrder;
}
 
//  MAIN FUNCTION 
function placeAnOrder(orderItems, discountCoupon, addressId) {
    let totalPrice = calculateTotal(orderItems);
    let payableAmount = applyDiscount(totalPrice, discountCoupon);
    deductWallet(payableAmount);
    let deliveryAddress = getAddress(addressId);
    let newOrder = createOrder(payableAmount, deliveryAddress);
    assignOrderToPartner(newOrder);
    ORDERS.push(newOrder);

    console.log("ORDERS: ", ORDERS);
    console.log("DELIVERY PARTNER: ", DELIVERY_PARTNERS);
    console.log("Ganesh Wallet Balance: ", GANESH_WALLET_BALANCE);
}

//  CART //
let GANESH_CART_ITEMS = [
    { name: "0 to 1", price: 200, quantity: 2, deliveryDateAndTime: "16-12-2025 10:30:00 AM" }, 
    { name: "Apple 17 pro max", price: 140000, quantity: 1, deliveryDateAndTime: "25-12-2025 9:00:00 AM" }
];

// MAIN FUNCTION
placeAnOrder(GANESH_CART_ITEMS, "XMAS30", "GANESH002");

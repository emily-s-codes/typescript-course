"use strict";
// interface Image {
//     imageUrl: string;
//     imageData: string;
//     altText: string
// }
Object.defineProperty(exports, "__esModule", { value: true });
const order1 = {
    orderNumber: 2,
    totalAmount: 23,
    productIds: [1, 2, 3],
    ccn: 4321432143214321
};
const order2 = {
    orderNumber: 7,
    totalAmount: 85.50,
    productIds: [1, 2, 3],
    ccn: 1234123412341234
};
const order3 = {
    orderNumber: 900,
    totalAmount: 23934,
    productIds: [3, 4, 5],
    email: 'me@menubar.com'
};
function processCreditCardOrder(order) {
    console.log("Contacting Credit Card Company for Order ", order.orderNumber);
}
function processPaypalOrder(order) {
    console.log("Contacting PayPal for Order ", order.orderNumber);
}
function isCreditCardOrder(order) {
    return 'ccn' in order;
}
;
function runOrders(orders) {
    orders.forEach(order => {
        if (isCreditCardOrder(order))
            processCreditCardOrder(order);
        else
            processPaypalOrder(order);
    });
}
console.log(runOrders([order1, order2, order3]));
//# sourceMappingURL=exercises.js.map
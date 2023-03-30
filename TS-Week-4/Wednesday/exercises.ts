// interface Image {
//     imageUrl: string;
//     imageData: string;
//     altText: string
// }

// interface Product {
//     name: string;
//     productId: number;
//     imageId?: number
// }

// interface Products {
//     [productId: number]: Product;
// }

// interface Images {
//     [imageId: number]: Image;
// }

// type ProductImage = Product & Image

// const images: Images = {
//     1: {
//         imageUrl: "https://testImages.com/book",
//         imageData: "This is a Book",
//         altText: "Sorry could not load this book",
//     },
//     2: {
//         imageUrl: "https://testImages.com/cd",
//         imageData: "This is a CD",
//         altText: "Sorry could not load this cd",
//     },
//     4: {
//         imageUrl: "https://testImages.com/calculator",
//         imageData: "This is a Calculator",
//         altText: "Sorry could not load this Calculator",
//     },
// };

// const products: Products = {
//     10: {
//         name: "book",
//         productId: 10,
//         imageId: 1,
//     },
//     11: {
//         name: "cd",
//         productId: 11,
//         imageId: 2,
//     },
//     12: {
//         name: "laptop",
//         productId: 12,
//     },
//     13: {
//         name: "calculator",
//         productId: 13,
//         imageId: 4,
//     },
// };



// let fetchedImageId: number;
// let result: ProductImage | Product;
// let productList: (ProductImage | Product)[] = [];
// function generateProducts(ids: number[]): (ProductImage | Product)[] {
//     ids.map(id => {
//         Object.keys(products).map(productId => {
//             let numericalId = Number(productId)
//             if (id === Number(productId)) {
//                 if (products[numericalId].imageId) {
//                     fetchedImageId = Number(products[numericalId].imageId)
//                     result = {
//                         name: products[numericalId].name,
//                         productId: numericalId,
//                         imageId: fetchedImageId,
//                         imageUrl: images[fetchedImageId].imageUrl,
//                         imageData: images[fetchedImageId].imageData,
//                         altText: images[fetchedImageId].altText
//                     }

//                 } else {
//                     result = {
//                         name: products[numericalId].name,
//                         productId: numericalId,
//                         imageId: fetchedImageId
//                     }
//                 }
//                 productList.push(result)
//             }
//         })
//     })
//     console.log(productList)
//     return productList
// }

// // UI: user selects product numbers and with a click calls 'generateProducts' with an array from selected product numbers. User is then shown a list of selected products including an image if available.
// generateProducts([10, 11, 12, 13])


interface Order {
    orderNumber: number,
    totalAmount: number,
    productIds: number[]
}

const order1: CreditCardOrder | PayPalOrder = {
    orderNumber: 2,
    totalAmount: 23,
    productIds: [1, 2, 3],
    ccn: 4321432143214321
}
const order2: CreditCardOrder | PayPalOrder = {
    orderNumber: 7,
    totalAmount: 85.50,
    productIds: [1, 2, 3],
    ccn: 1234123412341234
}
const order3: CreditCardOrder | PayPalOrder = {
    orderNumber: 900,
    totalAmount: 23934,
    productIds: [3, 4, 5],
    email: 'me@menubar.com'
}

interface Paypal {
    email: string
}

interface Creditcard {
    ccn: number
}

type CreditCardOrder = Order & Creditcard
type PayPalOrder = Order & Paypal

function processCreditCardOrder(order: CreditCardOrder): void {
    console.log("Contacting Credit Card Company for Order ", order.orderNumber);
}

function processPaypalOrder(order: PayPalOrder): void {
    console.log("Contacting PayPal for Order ", order.orderNumber);
}

function isCreditCardOrder(order: CreditCardOrder | PayPalOrder): order is CreditCardOrder {
    return 'ccn' in (order as CreditCardOrder);
};

function runOrders(orders: Order[]): string {
    orders.forEach(order => {
        if (isCreditCardOrder(order as CreditCardOrder))
            processCreditCardOrder(order as CreditCardOrder)
        else processPaypalOrder(order as PayPalOrder)
    })
    return 'Order processing'
}

console.log(runOrders([order1, order2, order3]))

export { }
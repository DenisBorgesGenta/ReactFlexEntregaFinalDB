 export const products = [
 
    {
id: 1,
name: 'pleasing Serum',
price: 50,
category: 'serums',
img: 'https://i.imgur.com/Vfgbtrk.jpeg',
stock: 3, 
description: 'serum para pieles sensibles'
},
{
id: 2,
name: 'pleasing Cleanser',
price: 50,
category: 'cleansers',
img: 'https://i.imgur.com/Vfgbtrk.jpeg',
stock: 3, 
description: 'serum para pieles sensibles'
},
{
id: 3,
name: 'pleasing Sunscreen',
price: 50,
category: 'sunscreens',
img: 'https://i.imgur.com/Vfgbtrk.jpeg',
stock: 3, 
description: 'serum para pieles sensibles'
},
]

export const getProducts = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise ((res, rej) => 
        setTimeout(() => {
            res(products.filter(prod => prod.category === category))
        }, 200)
    )
}


export const getProductsById = (id) =>{
    return new Promise((res, rej) =>
    setTimeout(() => {
        res(products.find(prod => prod.id.toString() === id))
    }, 200))
}

// // alert('hello world')


const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        img: 'https://img.drz.lazcdn.com/static/pk/p/81899d7cf8f37b4b4f259e820f8128c0.jpg_960x960q80.jpg_.webp',
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        img: 'https://images.samsung.com/is/image/samsung/p6pim/pk/feature/165630363/pk-feature--nbsp-543638120?$FB_TYPE_I_JPG$',
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7-4dRovEOr0UqkBfqsjDZj3idfVYLkLdcA&s",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        img: "https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-4.fill.size_2000x1125.v1723100793.jpg",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLrwEyxD_aVTaFJRvnf7xP3dA8PPW1MsmxA&s",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        img: "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20092024/sneako-02-grey-white-top-jpg-2_1726825725-363787272099.jpg",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCHlend4xJEgKT5Ows4AnOSwOV4cLz2L5VA&s",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        img: "https://bnbfootwear.pk/cdn/shop/files/88132_BLK_NEW.webp?v=1735134851",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFCdSVP_WYhdHJ38UklKOOv4hArrqahWpJA&s",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQxW4cj0pSEHhaJhsP8QM3gnM-kupsECimA&s",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvNGcbbrO-_PAQJ5-BWdnSHkUvfjr2ZYJig&s",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJB9DU9OwIPUqJSuJykrrwZmYvvN_Igphuw&s",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        img: "https://static.wixstatic.com/media/84aee5_b0658f89062c49f69a0f266b49fdfb1c~mv2.jpg/v1/fill/w_480,h_604,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84aee5_b0658f89062c49f69a0f266b49fdfb1c~mv2.jpg",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTG4eSBa0OIXfKqXZUPjocs1jKNv3Wt-Kf6g&s",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEloi87CXfRkWW2lrXu-pm3Dqmn6E_OLlOA&s",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTx4bb6V3KDR7r_1QmycezM4aC6rvxKes7vA&s",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        img: "https://copypencil.pk/cdn/shop/files/Highlighter-Pen-Eselon-Markers_grande.jpg?v=1684439198",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcI-O1aPPTaTXzgndj1IwAdeBJtwYGTKKOw&s",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0-pO_RSV4cLGyKjqpReb8GARfflpRVzBmw&s",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeBPOEyM8cWOoqVFEvPhao9jOW7903DboTg&s",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60jd52mOB4bvTlfBTP75U1yXwYFhWUGRjng&s",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6LjSdmI_5_fCxaqmtDmFePoKcJBnGFSH-g&s",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        img: "https://images-cdn.ubuy.co.id/633fef5b563b4024134bfcae-karcog-tree-bookshelf-4-tier-small-book.jpg",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVY9HqEBMY2IrZJrhJtqKL0ACnLh8i-x57rg&s",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        img: "https://img.drz.lazcdn.com/static/pk/p/988eb87e4755cc4587eb3264d95b6d6b.jpg_720x720q80.jpg",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        img: "https://www.fitnessfactory.com.pk/cdn/shop/files/1_2.jpg?v=1711543695&width=2048",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqiORyWZmQON04C2OwxUVvn0wQNCkrNtNhw&s",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        img: "https://hips.hearstapps.com/hmg-prod/images/woman-using-resistance-band-at-home-in-living-room-royalty-free-image-1679940066.jpg?crop=0.668xw:1.00xh;0.116xw,0&resize=980:*",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQbUdGk82lPkDM9t50qfHpK_BDUeML2oViA&s",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tli78hLNOklZDnPIZf9yji4BNYOCz8Nzvg&s",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPZXqWSOJYtxWtmLIgGh1FW1rN6XlVKP3Jg&s",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbf7XRJl-TE2Y7MjxOSvhwi6sD_VgxDfS_w&s",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        img: "https://www.whirlpool.com/is/image/content/dam/business-unit/whirlpool/en-us/marketing-content/site-assets/page-content/landing-pages/kitchen/refrigerators/refer-sclp-side-by-side-shop-set1.jpg?fit=constrain&fmt=png-alpha&wid=2875",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0r6suWlO2xyHyF-L3C7SNJ4FifR_OdlZMFQ&s",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];

console.log(products)

const div = document.querySelector('.container')

function renderItem(arr){
    div.innerHTML = ''

    arr.map(item => {
        div.innerHTML += `
        <div class = 'card'>
        <img src=${item.img} alt=""  width= "255px" height= "220px">
        <h3 style ="colour:red;">Name: ${item.name}</h3>
        <h3>Category: ${item.category}</h3>
        <h3>Price: ${item.price}</h3>
        
        </div>`
    })
}

renderItem(products)

function filterItem(items){
    console.log(items.innerHTML)
    const filterProduct = products.filter(item => item.category == items.innerHTML)
    console.log(filterProduct)
    renderItem(filterProduct)
}

// const fruits = [
//     "Apple",
//     "Banana",
//     "Orange",
//     "Mango",
//     "Pineapple",
//     "Grapes",
//     "Strawberry",
//     "Blueberry",
//     "Peach",
//     "Pear",
//     "Watermelon",
//     "Kiwi"
// ];

// console.log(fruits)
// const ul = document.querySelector('.list')

// const mapMethod = fruits.map((item , index) => {
//     ul.innerHTML += `<li>${item} ${index}</li>`
//     return item + 'meri marzi'
// })

// console.log(mapMethod)
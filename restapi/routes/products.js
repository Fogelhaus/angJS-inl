const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    res.status(200).json([
        { id: 1, productname: "Apple iPhone 7 32GB", category: "Mobile Telephone", company: "Apple", shortdescription: "32GB Black", price: 4299 , rating: 4, instock : 100, instockdate: new Date("2019-03-05"), quantity: 1  },
        { id: 2, productname: "Apple iPhone 7 64GB", category: "Mobile Telephone", company: "Apple", shortdescription: "64GB Black", price: 4799 , rating: 5, instock : 100, instockdate: new Date("2019-03-05"), quantity: 1   },
        { id: 3, productname: "Apple iPhone 8 64GB", category: "Mobile Telephone", company: "Apple", shortdescription: "64GB Black", price: 5299 , rating: 5, instock : 100, instockdate: new Date("2019-03-05"), quantity: 1   },
        { id: 4, productname: "Apple iPhone 8 128GB", category: "Mobile Telephone", company: "Apple", shortdescription: "128GB Black", price: 5999 , rating: 5, instock : 100, instockdate: new Date("2019-03-05"), quantity: 1   },
        { id: 5, productname: "Apple iPad 4", category: "Surfplatta", company: "Apple", shortdescription: "128GB Black", price: 4999 , rating: 5, instock : 10, instockdate: new Date("2019-03-26"), quantity: 1   },
        { id: 6, productname: "Apple iPhone X", category: "Mobile Telephone", company: "Apple", shortdescription: "128GB Black", price: 6299 , rating: 5, instock : 100, instockdate: new Date("2019-03-05"), quantity: 1   },
        { id: 7, productname: "Apple iPhone XS", category: "Mobile Telephone", company: "Apple", shortdescription: "128GB Black", price: 6399 , rating: 5, instock : 100, instockdate: new Date("2019-03-05"), quantity: 1   },
        { id: 8, productname: "Apple iPhone X+", category: "Mobile Telephone", company: "Apple", shortdescription: "256GB Black", price: 6999 , rating: 5, instock : 100, instockdate: new Date("2019-03-05"), quantity: 1   },
        { id: 9, productname: "HP Probook 640", category: "Laptop Computer",  company: "HP", shortdescription: "Core i5 8GB 256GB SSD 14 tum", price: 6799 , rating: 5, instock : 100, instockdate: new Date("2019-03-04"), quantity: 1   },
        { id: 10, productname: "Voxicon D27QO IPS", category: "Monitor",  company: "Voxicon", shortdescription: "27tum 2560 x 1440 16:9", price: 1595 , rating: 2, instock : 23, instockdate: new Date("2019-03-01"), quantity: 1   },
        { id: 11, productname: "Dell UltraSharp U2417H Infinity", category: "Monitor",  company: "Dell", shortdescription: "23.8tum 1920 x 1080 16:9", price: 1899 , rating: 4, instock : 49, instockdate: new Date("2019-03-02"), quantity: 1   },
        { id: 12, productname: "HP 250 G6", category: "Laptop Computer",  company: "HP", shortdescription: "Core i5 8GB 256GB SSD 15.6tum", price: 4599 , rating: 5, instock : 1, instockdate: new Date("2019-03-02"), quantity: 1  },
        { id: 13, productname: "Logitech MX Master for Business", category: "Mouse & Keyboard",  company: "Logitech", shortdescription: "Laser 1600dpi Mouse Black", price: 100 , rating: 5, instock : 0, instockdate: new Date("2019-03-01"), quantity: 1   },
        { id: 14, productname: "Lenovo ThinkCentre M710q Tiny", category: "Desktop Computer", company: "Lenovo", shortdescription: "Core i5 8GB 256GB SSD", price: 4799 , rating: 4, instock : 0, instockdate: new Date("2019-03-04"), quantity: 1   },
        { id: 15, productname: "Apple iPhone 6S", category: "Mobile Telephone", company: "Apple", shortdescription: "64GB Space Grey", price: 5599 , rating: 5, instock :44, instockdate: new Date("2019-03-02"), quantity: 1   },
        { id: 16, productname: "Intel Core i9 9900K", category: "Processor",  company: "Intel", shortdescription: "3.6GHz LGA1151 Socket", price: 4899 , rating: 3, instock : 99, instockdate: new Date("2019-03-05"), quantity: 1   },
        { id: 17, productname: "Logitech MX Master 2S", category: "Mouse & Keyboard", company: "Logitech", shortdescription: "Laser 4000dpi Mouse Grey", price: 899 , rating: 5, instock : 100, instockdate: new Date("2019-03-01"), quantity: 1   }
    ]);    
});

module.exports = route;
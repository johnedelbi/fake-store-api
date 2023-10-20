import { v4 as newId } from 'uuid';

let products = [
    {
        id: '1',
        name: 'acer predator',
        category: 'laptop',
        src: 'eeee'
    }
];

class Store {
    constructor(name, category, src) {
        this.id = newId();
        this.name = name;
        this.category = category;
        this.src = src;
    }

    addProduct = () => {
        products.push(this);
    };

    static getProducts = () => {
        return products;
    };
}

export default Store;

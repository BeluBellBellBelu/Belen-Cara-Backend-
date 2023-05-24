class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0

    addProduct(title, description, price, thumbnail, code, stock) {
        for(let i = 0; i < this.products.length;i++){
            if(this.products[i].code === code){
                console.log(`El codigo ${code} ya existe`);
                break;
            }
        }

        const infoProducto ={
            title, description, price, thumbnail, code, stock,
        }

        if(!Object.values(infoProducto).includes(undefined)){
        ProductManager.id++;
        this.products.push({
            ...infoProducto,
            id: ProductManager.id,
        });
    }else{
        console.log("Es necesario completar todos los campos")
    }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id){
        if(!this.products.find((producto) => producto.id === id)){
        console.log("Not Found")
    } else{
        console.log(this.products.find((producto) => producto.id === id))
    }
    }
}

const productos = new ProductManager();

productos.addProduct("title1", "description1", 500, "img1", "0051", 22);
productos.addProduct("title2", "description2", 12000, "img2", "0052", 18);
productos.addProduct("title3", "description3", 5000, "img3", "0053", 12);



//Producto encontrado
productos.getProductById(2)

//Producto no encontrado(Error)
productos.getProductById(8)

//Codigo repetido
productos.addProduct("title4", "description4", 4000, "img4", "0051", 5);

//Campos no completados
productos.addProduct("title5", "description5", 8000, "img4");

export class Product {
    id : number;
    name : string;
    description : string;
    price : number;
    imagUrl : string ;

    constructor (id:number, name:string, description = '', price = 0, imagUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOfAzEbzxq0EmBwldDnq66gxhVntmIQdgeg&usqp=CAU'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imagUrl = imagUrl
    }
}

export class Beer{

    private _id:number;
    private _name:string;
    private _categorie:string;
    private _alcoholDegre:number;
    private _contains:string;
    private _price:number;
    private _imgUrl:string;

    /**
     * 
     * @param id {number} identifiant unique d'une bière
     * @param name {string}
     * @param categorie { string }
     * @param alcoholDegre
     * @param contains 
     * @param price 
     * @param imgUrl 
     */

    constructor(id:number, name:string, categorie:string, alcoholDegre:number, contains:string, price:number, imgUrl:string){
        if (isNaN(id)){
            throw new TypeError('Identifier id must be a number');
        }
        this._id=id;
        this._name=name;
        this._categorie=categorie;
        this._alcoholDegre=alcoholDegre;
        this._contains=contains;
        this._price=price;
        this._imgUrl=imgUrl;
    }

    get id():number{
        return this.id;
    }
    get name():string{
        return this._name;
    }
    get categorie():string{
        return this._categorie;
    }
    get alcoholDegre():number{
        return this._alcoholDegre;
    }
    get contains():string{
        return this._contains;
    }
    get price():number{
        return this._price;
    }
    get imgUrl():string{
        return this._imgUrl;
    }

    /**
     * @returns {boolean} return true si degré d'alcool supérieur à 0.5
     */
    isAlcoolised():boolean{
        return this.alcoholDegre > 0.5;
    }
}

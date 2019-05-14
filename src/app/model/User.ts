export class User {

  private _id:number;
  private _firstName:string;
  private _lastName:string;
  private _email:string;
  private _password:string;
  private _userAdress:string;


  /**
   * @param id {number} identifiant unique d'un utilisateurr
   * @param firstName {string}
   * @param lastName {string}
   * @param email {string}
   * @param password {string}
   * @param adress {string}
   */
  constructor(id:number, firstName:string, lastName:string, email:string, password:string, adress?:string){
    if (isNaN(id)){
      throw new TypeError('Identifier id must be a number');
    }
    this._id=id;
    this._firstName=firstName;
    this._lastName=lastName;
    this._email=email;
    this._password=password;
    this._userAdress=adress;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }






}

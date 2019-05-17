
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const USERS = [
      { id: 0, firstName: 'John', lastName:'Rambo', 'johnRambo@gmail.com', '1234' },
      { id: 1, firstName: 'Alice', lastName:'Rabbit', 'alice-rabbit@gmail.com', '1234' },
      { id: 2, firstName: 'Sarah', lastName:'Connors', 'sarah.connors@gmail.com', '1234' },
      { id: 0, firstName: 'Bob', lastName:'Dylan', 'bob.dylan@gmail.com', '1234' },
    ];
    return { USERS };

    constructor(id:number, firstName:string, lastName:string, email:string, password:string, adress?:string){

    }
}

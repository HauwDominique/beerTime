import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class UsersDataService implements InMemoryDbService {

  constructor() { }

  createDb(): {} {

    let users = [
      {id: 0, firstName: 'John', lastName: 'Rambo', email: 'johnRambo@gmail.com', password: '1234'},
      {id: 1, firstName: 'Alice', lastName: 'Rabbit', email: 'alice-rabbit@gmail.com', password: '1234'},
      {id: 2, firstName: 'Sarah', lastName: 'Connors', email: 'sarah.connors@gmail.com', password: '1234'},
      {id: 3, firstName: 'Bob', lastName: 'Dylan', email: 'bob.dylan@gmail.com', password: '1234'},
    ];
    return {users};
  }


}

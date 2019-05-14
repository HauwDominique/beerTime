import {Injectable} from '@angular/core';
import {User} from "./model/User";

const USERS:User[]=[];


@Injectable({
  providedIn:'root',
})

export class UserService {

  getAllUsers(){
    return USERS;
  }

}



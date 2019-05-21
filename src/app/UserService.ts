import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {post} from "selenium-webdriver/http";
import {UsersDataService} from "./UsersData.service";


@Injectable({
  providedIn:'root',
})

export class UserService {

  SERVER_URL: string = "http://localhost:4200/list";

  constructor(private httpClient:HttpClient){}

  public getUsers(){
    return this.httpClient.get(this.SERVER_URL + 'users');
  }

  public getUser(userId){
    return this.httpClient.get(`${this.SERVER_URL + 'users'}/${userId})`)
  }

  public createUser(user: {id:number, firstName:string, lastName:string, email: string, password: string}){
    return this.httpClient.post(`${this.SERVER_URL + 'users'}`, post)
  }

  public deleteUser(userId){
    return this.httpClient.delete(`${this.SERVER_URL + 'users'}/${userId}`)
  }

  public updateUser(user: {id:number, firstName:string, lastName:string, email: string, password: string}){
    return this.httpClient.put(`${this.SERVER_URL + 'users'}/${user.id}`, post)
  }

}



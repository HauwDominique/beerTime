import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * Méthode pour créer un utilisateur dans firebase
   * @param email
   * @param password
   */
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  /**
   * méthode pour connecter un utilisateur déjà éxistant
   * @param email
   * @param password
   */
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  /**
   * Méthode pour déconnecter un utilisateur
   */
  signOutUser() {
    firebase.auth().signOut();
  }

}

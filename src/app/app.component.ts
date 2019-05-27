import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * Point d'entrée de l'arbre de composant Angular
 * Gère le titre de la page
 * met en oeuvre la route
 */

export class AppComponent {
  title = 'beerTime';

  constructor(){
    const config={
      apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      authDomain: "booksdom-bdd.firebaseapp.com",
      databaseURL: "https://booksdom-bdd.firebaseio.com",
      projectId: "booksdom-bdd",
      storageBucket: "booksdom-bdd.appspot.com",
      messagingSenderId: "725121349485",
      appId: "1:725121349485:web:17f6e9de5a37ea7e"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
    }
  }



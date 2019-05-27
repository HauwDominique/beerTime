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
      authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      projectId: "XXXXXX",
      storageBucket: "XXXXXXX",
      messagingSenderId: "XXXXXXX",
      appId: "1:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
    }
  }



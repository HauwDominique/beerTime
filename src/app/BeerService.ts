import { Beer } from './model/Beer';
import { Injectable } from '@angular/core';


const BEERS:Beer[]= [
    new Beer(1, 'blonde', 'Chtite Blonde', 2.5, 'Une bière au gout prononcé.', 3.5, '/assets/img/blueBeer.jpeg'),
    new Beer(2, 'blonde', 'Solaire', 2.5, 'Une bière tonic et rafraichissante.', 2.5, '/assets/img/desperado.jpeg'),
    new Beer(3, 'brune', 'Grande brune', 2.5, 'Une bière ambrée au gout de noisette.', 4.5, '/assets/img/EveryBodyBeer.jpeg'),
    new Beer(4, 'brune', 'Tombeuse', 5, 'Une bière parfumée de miel et de citron.', 3, '/assets/img/ginetteBeer.jpeg'),
    new Beer(5, 'blonde', 'Sans alcool', 0, 'Une bière qui ne vous fera pas tourner la tête.', 3.5, '/assets/img/odonBeer.jpeg'),
    new Beer(6, 'brune', 'Quebec', 5, 'Une bière canadienne inoubliable..', 4.5, '/assets/img/canadianBeer.jpeg'),
];

@Injectable({
    providedIn:'root',
})

export class BeerService{

    getAllBeers():Beer[]{
        return BEERS;
    }
}

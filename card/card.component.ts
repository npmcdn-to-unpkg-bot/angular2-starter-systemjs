import {Component, Input} from '@angular/core';

@Component({
	selector: 'card',
	templateUrl: './card/card.html',
})
export class Card {
  
  @Input() user; 
  
  getUserAvatarGradient(url: string): string{
    return  `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 34%, rgba(0,0,0,0.2) 66%, rgba(0,0,0,0.2) 83%, rgba(0,0,0,0.6)), url("${url}")`;
  }
  

}
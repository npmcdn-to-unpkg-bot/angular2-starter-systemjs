import {Component} from '@angular/core';
import {Card} from '../card/card.component.ts';

@Component({
	selector: 'app',
	template: `<card [user]="user"></card>`,
	styleUrls: ['styles.css'],
	directives: [Card]
})
export class App {
  
  public user = {
    name: 'Ivan Ivanov',
    avatarUrl: 'https://avatars.slack-edge.com/2016-03-20/28057182053_d45b3e823cfc6a87b24b_512.jpg'
  };
  
}
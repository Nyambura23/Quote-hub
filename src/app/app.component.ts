import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes:Quote[] = [
{id:1, name:'Chop life, problem no dey finish'},
{id:2, name:'Jispoil, You deserve it'},
{id:3, name:'Silence is golden, duct tape is silver'},
{id:4, name:'If you dont survive at first, skydiving is is not for you'},
];

// constructor(){
// this.quotes = [ 'Chop life, problem no dey finish','It is what it is', 'Such is life' ]
// }

  // quote = 'Chop life, problem no dey finish'
}

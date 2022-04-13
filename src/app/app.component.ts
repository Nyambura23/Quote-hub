import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes:string[];

constructor(){
this.quotes = [ 'Chop life, problem no dey finish','It is what it is', 'Such is life' ]
}

  // quote = 'Chop life, problem no dey finish'
}

import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Chop life, problem no dey finish', 'The streets', new Date(2022,4,14)),
    new Quote(2, 'Jispoil, You deserve it', 'A Kenyan Proverb', new Date(2022,4,14)),
    new Quote(3, 'Silence is golden, duct tape is silver',' Case Files', new Date(2022,4,14)),
    new Quote(4, 'If you dont survive at first, skydiving is is not for you', 'Wise man',new Date(2022,4,14)),
    ];
    
    toggleDetails(index: any){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    deleteQuote(isRead: any, index: any){
      if (isRead) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}

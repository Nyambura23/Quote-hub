import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Chop life, problem no dey finish', 'The streets',0,0, new Date(2022,1,14),),
    new Quote(2, 'Jispoil, You deserve it', 'A Kenyan Proverb',0,0, new Date(2022,2,14)),
    new Quote(3, 'Silence is golden, duct tape is silver','From Case Files',0,0, new Date(2022,3,14)),
    new Quote(4, 'If you dont survive at first, skydiving is is not for you', 'One Wise man',0,0,new Date(2022,4,14)),
    ];

    addNewQuote(quote: any){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
    
    toggleDetails(index: any){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    deleteQuote(isRead , index){
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

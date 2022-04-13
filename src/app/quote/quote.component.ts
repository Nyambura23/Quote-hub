import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Chop life, problem no dey finish', 'The streets'),
    new Quote(2, 'Jispoil, You deserve it', 'A Kenyan Proverb'),
    new Quote(3, 'Silence is golden, duct tape is silver',' Case Files'),
    new Quote(4, 'If you dont survive at first, skydiving is is not for you', 'Wise man'),
    ];
    
  constructor() { }

  ngOnInit(): void {
  }

}

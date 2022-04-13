import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Chop life, problem no dey finish', description:'The streets'},
    {id:2, name:'Jispoil, You deserve it', description:'A Kenyan Proverb'},
    {id:3, name:'Silence is golden, duct tape is silver', description:' Case Files'},
    {id:4, name:'If you dont survive at first, skydiving is is not for you', description:'Wise man'},
    ];
    
  constructor() { }

  ngOnInit(): void {
  }

}

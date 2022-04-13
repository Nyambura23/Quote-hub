import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Chop life, problem no dey finish'},
    {id:2, name:'Jispoil, You deserve it'},
    {id:3, name:'Silence is golden, duct tape is silver'},
    {id:4, name:'If you dont survive at first, skydiving is is not for you'},
    ];
    
  constructor() { }

  ngOnInit(): void {
  }

}

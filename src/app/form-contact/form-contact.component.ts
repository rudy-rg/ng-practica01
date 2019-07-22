import { QuotesService } from '../servicios/quotes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {


  public loading:boolean;
  public quote:string;
  public author:string;


  constructor(private service:QuotesService) { }

  ngOnInit() {
    this.getQuotes();
  }

  getQuotes(){
    
    this.loading = true;
    return this.service.getQuotes()
    
    .subscribe( data => {
       this.quote = data.quote;
       this.author = data.author;
       this.loading = false;
      return data;
    });
  }
}

import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

// @Injectable({
//   providedIn: 'root'
// })

export class QuotesService {
  
  private url:string;

  constructor( private http: HttpClient ) {
    this.url = "http://quotes.stormconsultancy.co.uk/random.json";
    //url:string = "";

   }

  getQuotes() : Observable<any>{
    return this.http.get( this.url);
  }
}

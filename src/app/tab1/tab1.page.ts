import { Component } from '@angular/core';
import { PrdouctService } from '../services/prdouct.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  paises:any[] = [];

  constructor(
    public http:PrdouctService
  ) {
    this.http.getAll().subscribe(
      result => {
        this.paises = result;
        console.log(result);
        
      },
      error => {

      }
    );
  }


}

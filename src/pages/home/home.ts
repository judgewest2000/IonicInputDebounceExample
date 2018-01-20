import { NavController } from 'ionic-angular';

import {Component}   from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listItems: string[]=[];

  textInput = new FormControl('');

  constructor(public navCtrl: NavController) {

   this.textInput
   .valueChanges
   .debounceTime(500)
   .subscribe(value =>{
    this.listItems.push(value);
   });
   
  }

}

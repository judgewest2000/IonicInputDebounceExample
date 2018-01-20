import { NavController } from 'ionic-angular';

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  textInput = new FormControl('');

  listItems = ['pepsi', 'coke', 'dr pepper', '7up', 'mountain dew', 'sprite'];

  currentSearchValue = '';

  get filteredItems() {
    return this.listItems.filter(li => this.stringTools.contains(li, this.currentSearchValue));
  }

  stringTools = {
    contains: (source: string, lookupValue: string) => {
      if (source === undefined || source === null) {
        return false;
      }

      return source.toLowerCase().indexOf(lookupValue.toLowerCase()) !== -1;
    }
  }



  constructor(public navCtrl: NavController) {

    this.textInput
      .valueChanges
      .debounceTime(500)
      .subscribe(value => this.currentSearchValue = value);

  }
}

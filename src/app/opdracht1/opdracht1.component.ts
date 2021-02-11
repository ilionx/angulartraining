import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-opdracht1',
  templateUrl: './opdracht1.component.html',
  styleUrls: ['opdracht1.component.scss']
})
export class Opdracht1Component {

  constructor(ar: ActivatedRoute) {
    console.log(ar);
  }

}

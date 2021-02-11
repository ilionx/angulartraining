import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {

  naam: Observable<string>;

}

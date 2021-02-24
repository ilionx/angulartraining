import {Component} from '@angular/core';
import {WizardService} from '../../shared/service/wizard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  totalPrice: Observable<number>;

  constructor(wizardService: WizardService) {
    this.totalPrice = wizardService.getTotalPrice();
  }

}

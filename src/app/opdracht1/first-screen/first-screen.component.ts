import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html'
})
export class FirstScreenComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({name: ''});
  }

  onSubmit(): void {
    this.router.navigate(['/opdracht1/second-screen']);
  }
}

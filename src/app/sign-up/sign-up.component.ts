import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
  }

  logIn() {
  }

}

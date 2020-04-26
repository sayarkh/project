import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { mockUser} from '../mock-users';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {SpecialistService} from '../specialist.service';
import {Specialist} from '../specialist';

@Component({
  selector: 'app-my-specialists',
  templateUrl: './my-specialists.component.html',
  styleUrls: ['./my-specialists.component.css']
})
export class MySpecialistsComponent implements OnInit {
  savedSpecialists: Specialist[];
  categories: Category[];
  userSpecialists: Specialist[];
  @Input() specialist: Specialist;

  constructor(
    private categoryService: CategoryService,
    private specialistService: SpecialistService) {
  }

  ngOnInit(): void {
    this.getSpecialists();
    this.getCategories();
  }

  getSpecialists() {
    this.savedSpecialists = mockUser.saved;
    this.userSpecialists = mockUser.user_specialists;
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe((category) => {
        this.categories = category;
      });
  }

  newRecipe() {
    mockUser.user_specialists.push(this.specialist);
  }
  delete(specialist: Specialist) {
  }
}

import {Component, OnInit, Input} from '@angular/core';
import {mockUser} from '../mock-users';
import {CategoryService} from '../category.service';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  @Input() user: User;
  job: User;

  constructor(
    private categoryService: CategoryService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.job = mockUser;
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser()
      .subscribe((user) => {
        this.user = user;
      });
  }

  logOut() {
    localStorage.clear();
    this.userService.logged = false;
  }

  save(): void {
    this.userService.updateUser(this.user);
  }


}

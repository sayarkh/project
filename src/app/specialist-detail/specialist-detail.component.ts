import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {SpecialistService} from '../specialist.service';
import {mockUser} from '../mock-users';
import {Specialist} from '../specialist';

@Component({
  selector: 'app-specialist-detail',
  templateUrl: './specialist-detail.component.html',
  styleUrls: ['./specialist-detail.component.css']
})
export class SpecialistDetailComponent implements OnInit {

  selectedItem: Specialist;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private specialistService: SpecialistService
  ) { }

  ngOnInit(): void {
    this.findSpecialist();
    console.log(this.selectedItem.city.split('+'));
  }

  findSpecialist() {
    let id = this.route.snapshot.paramMap.get('specialistId');
    id = id.substr(1);
    this.specialistService.getSpecialist(id).subscribe(specialist => this.selectedItem = specialist);
  }

  back(): void {
    this.location.back();
  }

  save() {
    alert('saved');
  }

  send(): void {
    const id = (document.getElementById('comment') as HTMLInputElement).value;
    this.selectedItem.comments.push({
      id: 4,
      author: mockUser,
      title: 'comment',
      text: id,
      likes: 0
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {Specialist} from "../specialist";

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  savedSpecialists: Specialist[];
  constructor() { }

  ngOnInit(): void {
  }

  remove(specialist: Specialist): void {
  }
}

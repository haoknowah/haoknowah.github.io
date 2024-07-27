import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Skill
{
  name: string;
  exp: number;
}
const SKILL: Skill[] = [
  {name: 'Java', exp: 3},
  {name: 'Angular', exp: 1},
  {name: 'Spring', exp: 2},
  {name: 'Python', exp: 1},
  {name: 'Debugging', exp: 3},
  {name: 'Git', exp: 2},
  {name: 'Customer Service', exp: 7},
  {name: 'HTML', exp: 1},
  {name: 'Maven', exp: 2},
  {name: 'Typescript', exp: 1},
  {name: 'Microservices', exp: 1}
];
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  displayedColumns: string[] = ['Skill', 'Years of Experience'];
  dataSource = SKILL;
  constructor() { }

  ngOnInit(): void {
  }

}

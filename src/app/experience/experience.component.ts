import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Skill
{
  name: string;
  exp: number;
}
const SKILL: Skill[] = [

]
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  displayedColumns: string[] = ['skill', 'Years of Experience'];
  dataSource = SKILL;
  constructor() { }

  ngOnInit(): void {
  }

}

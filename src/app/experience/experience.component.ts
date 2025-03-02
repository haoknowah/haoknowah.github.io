import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Skill
{
  name: string;
  exp: number;
}
export interface Attribute
{
  name: string;
  value: number;
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
  attributes: Attribute[] = [
    {name: 'Strength', value: 14},
    {name: 'Dexterity', value: 14},
    {name: 'Constitution', value: 14},
    {name: 'Intelligence', value: 16},
    {name: 'Wisdom', value: 12}
  ];
  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort((a, b) => a.name.localeCompare(b.name));
  }

}

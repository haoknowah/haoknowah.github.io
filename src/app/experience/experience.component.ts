import { Component, OnInit } from '@angular/core';

export interface Skill
{
  name: string;
  exp: number;
}
export interface Attribute
{
  name: string;
  value: string;
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
    {name: 'Hard Work', value: '5/5'},
    {name: 'Problem Solving', value: '4/5'},
    {name: 'Dependability', value: '5/5'},
    {name: 'Obedience', value: '5/5'},
    {name: 'Humor', value: '4/5'}
  ];
  constructor() { }
  age: number = 0;
  rowHeight: number = 30;
  ngOnInit(): void {
    this.dataSource.sort((a, b) => a.name.localeCompare(b.name));
    var birth = new Date("1997-08-06");
    this.age = Math.floor((new Date().getTime() - birth.getTime())/(3.154 * (10 ** 10)));
    this.rowHeight = 30 + (1800 - window.innerWidth)/10;
  }
  onResize(event: any)
  {
    this.resize(event.target.innerWidth);
  }
  resize(width: number)
  {
    this.rowHeight = 30 + (1800 - width)/10;
  }
}

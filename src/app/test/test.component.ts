import { Component, OnInit } from '@angular/core';

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
export interface Attribute
{
  name: string;
  value: string;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['Skill', 'Years of Experience'];
  dataSource = SKILL;
  attributes: Attribute[] = [
      {name: 'Hard Work', value: '5/5'},
      {name: 'Problem Solving', value: '4/5'},
      {name: 'Dependability', value: '5/5'},
      {name: 'Obedience', value: '5/5'},
      {name: 'Humor', value: '4/5'}
  ];
}

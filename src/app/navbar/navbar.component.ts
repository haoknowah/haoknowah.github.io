import { AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit{

  num: number = 2;

  constructor(private el: ElementRef) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}

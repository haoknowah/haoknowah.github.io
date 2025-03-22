import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('nav', {read:NavbarComponent, static:false}) nav !: NavbarComponent;
  constructor()
  {
    
  }
  ngAfterViewInit(): void {
    console.log(this.nav.num);
    console.log(5);
  }
  title = 'Noah Gaston';
  num: number = 0;
}

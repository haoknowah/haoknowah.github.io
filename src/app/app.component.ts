import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('nav', {read:ElementRef, static:false}) nav !: ElementRef;
  constructor()
  {
    
  }
  ngAfterViewInit(): void {
    console.log(this.nav.nativeElement.offsetHeight);
    console.log(5);
  }
  title = 'Noah Gaston';
  num: number = 0;
}

import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor()
  {
    
  }
  ngAfterViewInit(): void {
  }
  title = 'Noah Gaston';
  num: number = 0;
}

<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> c7430bed12ceb31780748a9a5b84b7bb93c8ea89

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'app';
=======
 
  constructor(private router: Router) {}
  

  
>>>>>>> c7430bed12ceb31780748a9a5b84b7bb93c8ea89
}

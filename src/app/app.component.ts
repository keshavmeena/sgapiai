import { Component } from '@angular/core';
import { MdlDialogService } from 'angular2-mdl';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'Tomtra';
  private router: Router;


 rlc:any = [
      {Name: 'HDFC bank', Rating: '10+', StandardRating: 11 },
      {Name: 'Duteche bank', Rating: '7+', StandardRating: 11 },
      {Name: 'Bank of baroda', Rating: '1+', StandardRating: 11 },
      {Name: 'State bank of India', Rating: '9+', StandardRating: 11 },
      {Name: 'ICIC bank', Rating: '10+', StandardRating: 11 },
      {Name: 'Canara bank', Rating: '9+', StandardRating: 11 },
      {Name: 'SBM bank', Rating: '5+', StandardRating: 11 },
      {Name: 'SBI bank', Rating: '4+', StandardRating: 11 },
      {Name: 'RBI bank', Rating: '3+', StandardRating: 11 },
      {Name: 'IOB bank', Rating: '6+', StandardRating: 11 },
      {Name: 'Corporation bank', Rating: '7+', StandardRating: 11 },
      {Name: 'Vijay bank', Rating: '18+', StandardRating: 11 },
      {Name: 'HSBC bank', Rating: '7+', StandardRating: 11 },
    ]
 

  constructor(r: Router){
    this.router = r;
  }

  goToLineSituation(): void{
    this.router.navigate(['/linesituation']); 
  }
}

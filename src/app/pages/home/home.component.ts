import { Docteur } from './../../docteur.model';
import { Component, OnInit } from '@angular/core';
import { DocteurService } from 'src/app/docteur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  docteurs?: Docteur[];

  constructor(private docteurService: DocteurService) { }

  ngOnInit(): void {
    this.docteursListes();

  }

   docteursListes()
  {
    this.docteurService.all()
      .subscribe({
        next: (data) => {
          this.docteurs = data.reverse();
        },
        error: (e) => console.error(e)
      });
   }
  
  
  
  supprimer(id: number)
  {
    this.docteurService.supprimer(id)
    .subscribe({
      next: (res) => {
       this.docteurService.all().subscribe({
        next: (data) => {
          this.docteurs = data.reverse();
        },
        error: (e) => console.error(e)
       });
      },
      error: (e) => console.error(e)
    });
  }
}

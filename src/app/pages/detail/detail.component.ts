import { Docteur } from './../../docteur.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocteurService } from 'src/app/docteur.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


docteur: Docteur = {
   name:'',
    contact: '',
    adresse: '',
   status: ''
  };

constructor(private DocteurService: DocteurService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getDocteur(+this.route.snapshot.params["id"]);
  }

  getDocteur(id: number): void {
    this.DocteurService.getDocteur(id)
      .subscribe({
        next: (data) => {
          this.docteur = data;
        },
        error: (e) => {
          this.router.navigate(['/home.html']);
        }
      });
  }
  

supprimer(id: number)
{
  this.DocteurService.supprimer(id)
  .subscribe({
    next: (res) => {
      this.router.navigate(['/home.html']);
    },
    error: (e) => console.error(e)
  });
}
}

import { DocteurService } from 'src/app/docteur.service';
import { Component, OnInit } from '@angular/core';
import { Docteur } from 'src/app/docteur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  docteur: Docteur = {
    name:'',
    contact: '',
    adresse: '',
   status: ''
  };
  

  constructor(private DocteurService: DocteurService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getArticle(+this.route.snapshot.params["id"]);
  }

  submitForm = new FormGroup({
    'name': new FormControl(null, [
      Validators.required
    ]),

    'contact': new FormControl(null, [
      Validators.required
    ]),

    'status': new FormControl(null, [
      Validators.required,
    ]),

    'adresse': new FormControl(null, [
      Validators.required,
    ])
  })



  submit(){
   if(this.submitForm.status === 'VALID')
   {
    this.DocteurService.modifier(+this.route.snapshot.params["id"],this.submitForm.value)
    .subscribe({
      next: (res) => {
        window.history.back();
      },
      error: (e) => console.error(e)
    });
   }
  }


  getArticle(id: number): void {
    this.DocteurService.getDocteur(id)
      .subscribe({
        next: (data) => {
          this.docteur = data;
        },
        error: (e) => {
          this.router.navigate(['/home']);
        }
      });
  }
}

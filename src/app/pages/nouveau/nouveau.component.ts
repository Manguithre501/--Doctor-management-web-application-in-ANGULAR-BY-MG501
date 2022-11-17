import { Docteur } from './../../docteur.model';
import { Component, OnInit } from '@angular/core';
import { DocteurService } from 'src/app/docteur.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent {

 docteur: Docteur = {
    name:'',
    contact: '',
    adresse: '',
   status: ''
 };
  
  
 constructor(private DocteurService: DocteurService, private router:Router) { }

  submitForm = new FormGroup({
    'name': new FormControl(null, [
      Validators.required
    ]),

    'contact': new FormControl(null, [
      Validators.required,
      Validators.min(10),
      Validators.max(10)
    ]),

    'status': new FormControl(null, [
      Validators.required,
    ]),

    'adresse': new FormControl(null, [
      Validators.required,
    ])
  })

  submit() {
      if(this.submitForm.status === 'VALID')
      {
        this.DocteurService.nouveau(this.submitForm.value)
        .subscribe({
          next: (res) => {
            this.router.navigate(['/home.html']);
          },
          error: (e) => console.error(e)
        });
        }
  }
}

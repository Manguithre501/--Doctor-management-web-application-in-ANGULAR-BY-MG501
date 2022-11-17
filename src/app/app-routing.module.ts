import { ModifierComponent } from './pages/modifier/modifier.component';
import { NouveauComponent } from './pages/nouveau/nouveau.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home.html', pathMatch: 'full' },
  { path: 'home.html', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent},
  { path: 'modifier/:id', component: ModifierComponent},
  { path: 'nouveau.html', component: NouveauComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

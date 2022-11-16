import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './home/info/info.component';
import { MainComponent } from './home/main/main.component';
import { NotFoundComponent } from './home/not-found/not-found.component';

const routes: Routes = [
  {path: 'main', component:MainComponent},
  {path: 'home', component: HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'info/:id', component:InfoComponent},
  {
    path:'**' ,component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

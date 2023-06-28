import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { Project2Component } from './components/project2/project2.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
{
  path:'project',
  component:ProjectComponent
},
{
  path:'upload',
  component:Project2Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

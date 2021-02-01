import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Forms2Component } from './core/body/forms2/forms2.component';


const routes: Routes = [
	{ path: '' ,redirectTo:'/',pathMatch:'full' },
  { path:'forms2',component :  Forms2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

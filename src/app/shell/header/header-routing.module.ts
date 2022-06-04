import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from 'src/app/catalogue/catalogue.component';




const routes: Routes = [
  {
      path: 'catalogue',
      component: CatalogueComponent

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
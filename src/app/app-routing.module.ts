import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

// Listado de rutas
const routes: Routes = [
  // Ruta 1
  {
    path: '',
    component: ProductListComponent,
  },
  // Ruta 2
  {
    path: 'product',
    component: ProductListComponent,
  },
  // Ruta 3
  {
    path: 'product/create',
    component: ProductFormComponent,
  },
  // Ruta 3
  {
    path: 'product/edit/:id',
    component: ProductFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

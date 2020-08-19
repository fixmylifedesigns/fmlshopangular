import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StoreComponent } from "./store/store.component";
import { DocComponent } from "./doc/doc.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "store", component: StoreComponent },
  { path: "angular", component: DocComponent },
  { path: "product/:id", component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { RouterModule } from "@angular/router";
import { routes } from "../app.routes";

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
        ProductDetailComponent,
    ],
    providers: [],
    bootstrap: [],
})
export class ProductModule {}
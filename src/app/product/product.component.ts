import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "./product.service";
import { HttpClient } from "@angular/common/http";
import Currency from '../components/currency'

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  public product = null;
  public id = null;

  constructor(
    private _productservice: ProductService,
    private router: ActivatedRoute,
    private http: HttpClient
  ) {
    this.router.params.subscribe((params) => {
      const id: number = parseInt(params.id);
      this.id = id;
      this._productservice.getProduct(id).subscribe((data) => {
        this.product = data;
        // console.log(data);
      });
    });
  }
  
  currency(value) {
    return Currency(value)
  }

  ngOnInit() {
    // window.scroll(0,0);
  }
}

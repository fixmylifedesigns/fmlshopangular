import { Component } from "@angular/core";
import { StoreService } from "./store.service";
import Currency from "../components/currency";
@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent {
  public store = null;

  constructor(private _productservice: StoreService) {
    this._productservice.getStore().subscribe((data) => {
      this.store = data;
      console.log(this.store);
    });
  }
  
  currency(value) {
    return Currency(value);
  }
  ngOnInit() {
    // window.scroll(0, 0);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private _baseUrl: string = "https://duranirving-platform.herokuapp.com";
  constructor(private http: HttpClient) {}

  getProduct(id): Observable<any[]> {
    return this.http.get<any[]>(`${this._baseUrl}/api/shops/products/${id}`);
  }
}

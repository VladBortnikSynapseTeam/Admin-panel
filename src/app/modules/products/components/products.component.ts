import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IProductList, IUserList } from 'src/app/store/reducers/app.reducer';
import { AppSelectors } from 'src/app/store/selectors/app.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProductList[];
  productList: IProductList[];
  liveSearchCounter = 0;
  searchInput: FormControl = new FormControl('');
  constructor(private store$: Store) { 
    this.store$.select(AppSelectors.state).subscribe((state)=>{
      this.products = state.products;   
      this.productList = state.products;   
    })
   }

  ngOnInit(): void {
    
  }

  onInputChange():void{
    this.products = this.productList ? this.productList.filter(item => item.title.search(new RegExp(this.searchInput.value, 'i')) > -1) : [];
    }
}

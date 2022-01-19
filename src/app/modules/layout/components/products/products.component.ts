import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUserList } from 'src/app/store/reducers/app.reducer';
import { AppSelectors } from 'src/app/store/selectors/app.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<IUserList>
  constructor(private store$: Store) { 
    this.products$ = this.store$.select(AppSelectors.state)
   }

  ngOnInit(): void {
  }

}

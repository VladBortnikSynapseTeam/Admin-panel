import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/store/reducers/app.reducer';
import { AppSelectors } from 'src/app/store/selectors/app.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'userId', 'phone', 'email','accountCreated','editBtn'];
  dataSource: MatTableDataSource<IUser>;
  data: IUser[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private store$: Store) { 
    this.store$.select(AppSelectors.userList).subscribe(users => this.data = users)
    this.dataSource = new MatTableDataSource(this.data)
   }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

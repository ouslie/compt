import { BaseService } from '../../services/base.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
  providers: [BaseService]
})

export class AppComponent implements OnInit {
  constructor(private BaseService:BaseService) {};



  displayedColumns: string[] = ['id', 'name'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  // ngOnInit() {
  //   const promise = this.BaseService.getBases().toPromise();

  //   promise.then((data)=>{
  //     var dataSource = new MatTableDataSource([data]);
  //   }).catch((error)=>{
  //     console.log("Promise rejected with " + JSON.stringify(error));
  //   });
  // }



   getUser(): Observable<Bases[]> {
    return this.BaseService.getBases<Bases[]>();
  }


}
export interface Bases {
  id: string;
  name: string;
}


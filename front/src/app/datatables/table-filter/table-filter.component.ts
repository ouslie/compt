import { Component, ViewChild } from '@angular/core';
import { BaseService } from '../../services/base.service';

declare var require: any;
const data: any = [];
@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
  providers: [BaseService]

})
export class TableFilterComponent {

  editing = {};
  rows : any = [];
  temp = [...data];

  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'id', name:'Actions' },
    { prop: 'id', name: 'Id' },
    { prop: 'name', name:'Nom' }
  ];


  @ViewChild(TableFilterComponent, {static:true}) table: TableFilterComponent;
  constructor(private BaseService:BaseService,
    private DialogComponent:DialogComponent) {

    this.BaseService.getBases().subscribe(data => {
      this.rows = data;
      this.temp = [...data];

    });


    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
  }

  openDialog() {
    console.log('too');
  }



  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = data;
  }
  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}

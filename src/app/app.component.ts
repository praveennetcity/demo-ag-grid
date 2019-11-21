import {Component , Inject} from '@angular/core';
import {DataService} from './app.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnDefs = [
    {headerName: 'Id', field: 'index', width:80},
    {headerName: 'Name', field: 'name', width:150},
    {headerName: 'Age', field: 'age', width:100},
    {headerName: 'StartDate', field: 'startDate',  width:150},
    {headerName: 'EndDate', field: 'endDate',  width:150},
    {headerName: 'Phone', field: 'phone', width:150},
    {headerName: 'Address', field: 'address',  width:180},
    {headerName: 'Employee', field: 'isActive',  width:150},
  ];

  startdate : Date;
  enddate : Date;

  constructor(@Inject(DataService) private dataService: DataService){
  }

  rowData = []
  ngOnInit() {}
  
  onSubmit(){
    let dates = {'startDate' : this.startdate , 'endDate' : this.enddate}
    var startDate = new Date(this.startdate);
    var endDate = new Date(this.enddate);
    var resDate = new Date();
    this.dataService.searchData(dates)
            .subscribe(
                (data) => {
                   console.log('data', data);
                  //this.rowData  = data;
                  this.rowData = data.filter(function(a){
                    resDate = new Date(a.startDate);
                    return resDate.getTime() >= startDate.getTime() && resDate.getTime() <= endDate.getTime();
                });
                console.log(this.rowData);
                }
            );
  
}
}
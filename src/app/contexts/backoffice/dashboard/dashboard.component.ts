import { Component, OnInit } from '@angular/core';
import { Widgets } from 'src/app/core/interfaces/widgets.interface';
import { DashboardService } from 'src/app/core/services/models/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  widgets: Widgets = {} as Widgets;

constructor(private dashboardService: DashboardService){}

ngOnInit(){


  this.dashboardService.getWidgets().subscribe({
    next: (resp) => {
      this.widgets = resp;
      console.log(resp);
    },
  });

}



}

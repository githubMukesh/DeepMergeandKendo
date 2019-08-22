import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-chart',
  templateUrl: './group-chart.component.html',
  styleUrls: ['./group-chart.component.css']
})
export class GroupChartComponent implements OnInit {

 // public salesData: number[] = [20, 40, 45, 30, 50];
  public salesData:any = [{category:"muk", value: [20, 40, 45, 30, 50]}, {category:"mukesh", value: [20, 40, 45, 30, 50]}, {category:"ranjan", value: [20, 40, 45, 30, 50]}]
 
  public purchaseData: number[] = [12, 30, 30, 45, 10];
  public categories: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];


    public legendLabelData(data: any) {
      console.log(data);
      return data.text + ' ' + (data.percentage * 100).toFixed(2) + '%';
   }
  
    public labelContent = (e: any) => {
      console.log(e);
     return e.category;
   }
  constructor() { }

  ngOnInit() {
  }

}

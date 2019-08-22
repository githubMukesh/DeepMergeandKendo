import { Component, OnInit } from '@angular/core';
import { Surface, Path, Text, Group, Layout, LinearGradient, GradientOptions, ShapeOptions } from '@progress/kendo-drawing';
import { Arc as DrawingArc, GradientStop } from '@progress/kendo-drawing';
import { Arc, Rect, ArcOptions } from '@progress/kendo-drawing/geometry';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public pieData: any = [
    { category: 'Eaten', value: 0.42 },
    { category: 'Not eaten', value: 0.58 },
    { category: 'Eaten', value: 0.42 },
    { category: 'Not eaten', value: 0.58 }
  ];
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






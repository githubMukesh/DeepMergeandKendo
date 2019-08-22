import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuComponent } from '@progress/kendo-angular-menu';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  @ViewChild('chartmenu')
  public chartContextMenu: ContextMenuComponent;
  public items: any[] = [{ text: 'Remove', icon: 'close' }, { text: 'Add', icon: 'add' }];

  private contextItem: any;
  public salesData: number[] = [20, 40, 45, 30, 50];
    public purchaseData: number[] = [12, 30, 30, 45, 10];
    public categories: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    public legendLabelData(data: any) {
      console.log(data);
      return data.text + ' ' + (data.percentage * 100).toFixed(2) + '%';
   }
  constructor() { }

  ngOnInit() {
  }

  public onSeriesClick(e: any): void {
    const originalEvent = e.originalEvent;

    if (originalEvent.type === 'contextmenu') {
        originalEvent.preventDefault();

       // this.contextItem = this.seriesData.find(item => item.product === e.category);

        this.chartContextMenu.show({ left: originalEvent.pageX, top: originalEvent.pageY });
    }
}

public onSelect(e): void {
    console.log(e);
    // const index = this.seriesData.indexOf(this.contextItem);

    // this.seriesData = this.seriesData.slice(0, index).concat(this.seriesData.slice(index + 1));
}
}

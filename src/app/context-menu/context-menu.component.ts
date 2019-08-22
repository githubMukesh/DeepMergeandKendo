import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuComponent } from '@progress/kendo-angular-menu';


@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class CContextMenuComponent {


  @ViewChild('chartmenu')
  public chartContextMenu: ContextMenuComponent;

  public seriesData: any[] = [{
      product: 'Chai',
      sales: 200
  }, {
      product: 'Change',
      sales: 250
  }, {
      product: 'Others',
      sales: 400
  }];

  public items: any[] = [{ text: 'Remove', icon: 'close' }];

  private contextItem: any;

  public onSeriesClick(e: any): void {
      const originalEvent = e.originalEvent;

      if (originalEvent.type === 'contextmenu') {
          originalEvent.preventDefault();

          this.contextItem = this.seriesData.find(item => item.product === e.category);

          this.chartContextMenu.show({ left: originalEvent.pageX, top: originalEvent.pageY });
      }
  }

  public onSelect(): void {
      const index = this.seriesData.indexOf(this.contextItem);

      this.seriesData = this.seriesData.slice(0, index).concat(this.seriesData.slice(index + 1));
  }

}

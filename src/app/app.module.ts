import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { PieComponent } from './pie/pie.component';
import { DonoutComponent } from './donout/donout.component';
import { BarComponent } from './bar/bar.component';
import { ChartConfigComponent } from './chart-config/chart-config.component';
import { GroupChartComponent } from './group-chart/group-chart.component';
import { LineGroupChartComponent } from './line-group-chart/line-group-chart.component';
import { UpperCase } from './pie/upperCase.pipe';
import { CContextMenuComponent } from './context-menu/context-menu.component';

import { ContextMenuModule } from '@progress/kendo-angular-menu';
import { DeepService } from './deepMerge.service';
import {PhonePipe} from './phone.pipe';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    DonoutComponent,
    BarComponent,
    ChartConfigComponent,
    GroupChartComponent,
    LineGroupChartComponent,
    UpperCase,
    CContextMenuComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    ChartsModule,
    ContextMenuModule,
    FormsModule

  ],
  providers: [DeepService],
  bootstrap: [AppComponent]
})
export class AppModule { }

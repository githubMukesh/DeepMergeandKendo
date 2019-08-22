import { Component, OnInit } from '@angular/core';
import { Surface, Path, Text, Group, Layout, LinearGradient, GradientOptions, ShapeOptions } from '@progress/kendo-drawing';
import { Arc as DrawingArc, GradientStop } from '@progress/kendo-drawing';
import { Arc, Rect, ArcOptions } from '@progress/kendo-drawing/geometry';


@Component({
  selector: 'app-chart-config',
  templateUrl: './chart-config.component.html',
  styleUrls: ['./chart-config.component.css']
})
export class ChartConfigComponent implements OnInit {

  public chartConfig = {
    title: {
        text: 'Site Visitors Stats /thousands/'
    },
    legend: {
        position: 'bottom',
        item: {
            visual: createLegendItem
        }
    },
    seriesDefaults: {
        type: 'column',
        stack: true,
        highlight: {
            toggle: function (e) {
                // Do not create a highlight overlay,
                // the approach will modify the existing visual instead.
                e.preventDefault();

                const visual = e.visual;
                const opacity = e.show ? 0.8 : 1;

                visual.opacity(opacity);
            }
        },
        visual: function (e) {
            return createColumn(e.rect, e.options.color);
        }
    },
    series: [{
        name: 'Total Visits',
        data: [56000, 63000, 74000, 91000, 117000, 138000, 128000, 115000, 102000, 98000, 123000, 113000]
    }, {
        name: 'Unique visitors',
        data: [52000, 34000, 23000, 48000, 67000, 83000, 40000, 50000, 64000, 72000, 75000, 81000]
    }],
    panes: [{
        clip: false
    }],
    valueAxis: {
        line: {
            visible: false
        }
    },
    categoryAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        majorGridLines: {
            visible: false
        },
        line: {
            visible: false
        }
    },
    tooltip: {
        visible: true
    }
};
  constructor() { }

  ngOnInit() {
  }

}


function createColumn(rect, color) {
  const origin = rect.origin;
  const center = rect.center();
  const bottomRight = rect.bottomRight();
  const radiusX = rect.width() / 2;
  const radiusY = radiusX / 3;
  const gradient = new LinearGradient(<GradientOptions>{
      stops: [<GradientStop>{
          offset: 0,
          color: color,
          options: null
      }, <GradientStop>{
          offset: 0.5,
          color: color,
          opacity: 0.9,
          options: null
      }, <GradientStop>{
          offset: 0.5,
          color: color,
          opacity: 0.9,
          options: null
      }, <GradientStop>{
          offset: 1,
          color: color,
          options: null
      }]
  });

  const path = new Path(<ShapeOptions>{
          fill: gradient,
          stroke: {
              color: 'none'
          }
      }).moveTo(origin.x, origin.y)
      .lineTo(origin.x, bottomRight.y)
      .arc(180, 0, radiusX, radiusY, true)
      .lineTo(bottomRight.x, origin.y)
      .arc(0, 180, radiusX, radiusY);

  const topArcGeometry = new Arc([center.x, origin.y], <ArcOptions>{
      startAngle: 0,
      endAngle: 360,
      radiusX: radiusX,
      radiusY: radiusY
  });

  const topArc = new DrawingArc(topArcGeometry, {
      fill: {
          color: color
      },
      stroke: {
          color: '#ebebeb'
      }
  });
  const group = new Group();
  group.append(path, topArc);
  return group;
}

function createLegendItem(e) {
  const color = e.options.markers.background;
  const labelColor = e.options.labels.color;
  const rect = new Rect([0, 0], [120, 50]);
  const layout = new Layout(rect, {
      spacing: 5,
      alignItems: 'center'
  });

  const overlay = Path.fromRect(rect, {
      fill: {
          color: '#fff',
          opacity: 0
      },
      stroke: {
          color: 'none'
      },
      cursor: 'pointer'
  });

  const column = createColumn(new Rect([0, 0], [15, 10]), color);
  const label = new Text(e.series.name, [0, 0], {
      fill: {
          color: labelColor
      }
  })

  layout.append(column, label);
  layout.reflow();

  const group = new Group().append(layout, overlay);

  return group;
}

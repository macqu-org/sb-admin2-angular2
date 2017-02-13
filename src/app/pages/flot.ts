/**
 * @author psigloch
 */
import { Component, AfterViewInit } from "@angular/core";
import { FlotData } from "../data/flot-data";


@Component({
  moduleId: module.id,
  selector: 'flot',
  templateUrl: 'html/flot.html',
})
export class Flot implements AfterViewInit{


  constructor() {
  };

  ngAfterViewInit(): void {
    FlotData.drawFlotBarChart();
    FlotData.drawFlotLineChart();
    FlotData.drawFlotMovingLineChart();
    FlotData.drawFlotMultiAxesLineChart();
    FlotData.drawFlotPieChart();
  }
}

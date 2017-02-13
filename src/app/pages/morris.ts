/**
 * @author psigloch
 */
import { Component, AfterViewInit } from "@angular/core";
import { MorrisData } from "../data/morris-data";

@Component({
  moduleId: module.id,
  selector: 'morris',
  templateUrl: 'html/morris.html'
})
export class Morris implements AfterViewInit{

  constructor() {
  };

  ngAfterViewInit(): void {
    MorrisData.initMorrisArea();
    MorrisData.initMorrisBar();
    MorrisData.initMorrisDonut();
    MorrisData.initMorrisLine();
  }
}

/**
 * Copyright 2017 Cinovo AG<br>
 * <br>
 *
 * @author psigloch
 */import { Component, AfterViewInit } from "@angular/core";
import { MorrisData } from "../data/morris-data";

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'html/dashboard.html'
})
export class Dashboard implements AfterViewInit{

  constructor() {
  };

  ngAfterViewInit(): void {
    MorrisData.initMorrisArea();
    MorrisData.initMorrisBar();
  }
}

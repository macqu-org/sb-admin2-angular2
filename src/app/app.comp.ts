import { Component, HostListener, AfterViewInit } from "@angular/core";

/**
 * Copyright 2017 Cinovo AG<br>
 * <br>
 *
 * @author psigloch
 */
@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: 'html/app.comp.html'
})
export class AppComponent {

  @HostListener('window:resize') onResize() {
    this.handleWindowSize();
  }

  private minHeight: string = "";

  constructor() {
    this.handleWindowSize();
  };


  private handleWindowSize(): void {
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    let topOffset = width < 768 ? 100 : 50;
    let height = ((window.innerHeight > 0) ? window.innerHeight : screen.height) - 1;
    height = height - topOffset;
    if (height < 1) height = 1;
    if (height > topOffset) {
      this.minHeight = (height) + "px";
    } else {
      this.minHeight = (topOffset) + "px";
    }
  }
}

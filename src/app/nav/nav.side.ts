/**
 * @author psigloch
 */
import { Component, ViewEncapsulation, AfterViewInit, HostListener } from "@angular/core";


@Component({
  moduleId: module.id,
  selector: 'navigation-side',
  templateUrl: 'html/nav.side.html',
  styleUrls: ['css/nav.side.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavigation implements AfterViewInit {

  @HostListener('window:resize') onResize() {
    this.handleWindowSize();
  }

  private collapse = false;

  constructor() {
  };

  ngAfterViewInit(): void {
    this.handleWindowSize();
    jQuery('#side-menu').metisMenu();
  }

  private handleWindowSize() {
    let topOffset = 50;
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    this.collapse = width < 768;
  }
}

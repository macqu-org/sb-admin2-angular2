/**
 * @author psigloch
 */
import { Component, AfterViewInit } from "@angular/core";


@Component({
  moduleId: module.id,
  selector: 'notifications',
  templateUrl: 'html/notifications.html'
})
export class Notifications implements AfterViewInit {

  constructor() {
  };

  ngAfterViewInit(): void {
    // NOTE: THIS IS NOT THE ANGULAR WAY TO DO THINGS!
    // THIS IS ONLY QUICK COPY OF THE sb-admin2 CODE, SINCE PORTING IT FOR THIS SETUP IS NOT USEFULL.
    // IT WORKS, BUT IS NOT INTEDET TO BE IMPLEMENTED LIKE THIS!!!
    jQuery('.tooltip-demo').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    })
    // popover demo
    jQuery("[data-toggle=popover]")
      .popover()
  }
}

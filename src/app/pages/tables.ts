/**
 * Copyright 2017 Cinovo AG<br>
 * <br>
 *
 * @author psigloch
 */
import { Component, AfterViewInit } from "@angular/core";


@Component({
  moduleId: module.id,
  selector: 'tables',
  templateUrl: 'html/tables.html'
})
export class Tables implements AfterViewInit {

  constructor() {
  };

  ngAfterViewInit(): void {
    // NOTE: THIS IS NOT THE ANGULAR WAY TO DO THINGS!
    // THIS IS ONLY QUICK COPY OF THE sb-admin2 CODE, SINCE PORTING IT FOR THIS SETUP IS NOT USEFULL.
    // IT WORKS, BUT IS NOT INTEDET TO BE IMPLEMENTED LIKE THIS!!!
    jQuery('#dataTables-example').DataTable({
      responsive: true
    });
  }
}

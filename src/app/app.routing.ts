import { Routes } from "@angular/router";
import { Blank } from "./pages/blank";
import { Dashboard } from "./pages/dashboard";
import { Buttons } from "./pages/buttons";
import { Flot } from "./pages/flot";
import { Forms } from "./pages/forms";
import { Grid } from "./pages/grid";
import { Icons } from "./pages/icons";
import { Typography } from "./pages/typography";
import { Tables } from "./pages/tables";
import { Notifications } from "./pages/notifications";
import { Morris } from "./pages/morris";
import { Login } from "./pages/login";
import { PanelsWells } from "./pages/panels-wells";

/**
 * @author psigloch
 */
export const APP_ROUTES: Routes = [

  {path: 'blank', component: Blank},
  {path: 'buttons', component: Buttons},
  {path: 'dashboard', component: Dashboard},
  {path: 'flot', component: Flot},
  {path: 'forms', component: Forms},
  {path: 'grid', component: Grid},
  {path: 'icons', component: Icons},
  {path: 'login', component: Login},
  {path: 'morris', component: Morris},
  {path: 'notifications', component: Notifications},
  {path: 'panels-wells', component: PanelsWells},
  {path: 'tables', component: Tables},
  {path: 'typography', component: Typography},


  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];

export const ROUTED_COMPONENTS = () => {
  let res = [];
  for (let route of APP_ROUTES) {
    if (route.component) {
      res.push(route.component);
    }
  }
  return res;
};

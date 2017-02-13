/**
 * Copyright 2017 Cinovo AG<br>
 * <br>
 *
 * @author psigloch
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.comp";
import { AlertService } from "./app/util/alert/alert.service";
import { ROUTED_COMPONENTS, APP_ROUTES } from "./app/app.routing";
import { AlertComponent } from "./app/util/alert/alert.comp";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import "./rxjs-extensions";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TopNavigation } from "./app/nav/nav.top";
import { SideNavigation } from "./app/nav/nav.side";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {useHash: true}),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    TopNavigation,
    SideNavigation,
    ROUTED_COMPONENTS(),
  ],
  providers: [
    AlertService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

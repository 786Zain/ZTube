import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./user/signup/signup.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

const routes: Routes = [
  { path: "**", redirectTo: "notFound" },
  { path: "user", component: SignupComponent },
  { path: "home", component: HomeComponent },

  { path: "notFound", component: NotFoundComponent },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}

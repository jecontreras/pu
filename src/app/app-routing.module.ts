import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterItemComponent } from "./pages/register-item/register-item.component";
import { ViewItemComponent } from "./pages/view-item/view-item.component";

import { AuthGuard } from "./auth/auth.guard";
import { SelectivePreloadingStrategyService } from "./selective-preloading.service";

const appRoutes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "create",
    component: RegisterItemComponent
  },
  {
    path: "r/:id",
    component: ViewItemComponent
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((mod) => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// {
//   path: "rocks",
//   loadChildren: () =>
//     import("./items/crisis-center.module").then(
//       (mod) => mod.CrisisCenterModule
//     ),
//   data: { preload: true }
// },

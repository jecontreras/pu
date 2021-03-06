import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "./admin/admin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { ManageItemsComponent } from "./manage-items/manage-items.component";

import { AuthGuard } from "../auth/auth.guard";

const adminRoutes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        canActivateChild: [AuthGuard],
        children: [
          { path: "rocks", component: ManageItemsComponent },
          { path: "", component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapviewComponent } from './mapview/mapview.component';
import { PakketdetailsComponent } from './pakketdetails/pakketdetails.component';
import { PakketlijstComponent } from './pakketlijst/pakketlijst.component';
import { InputformComponent } from './inputform/inputform.component';

const routes: Routes = [
  { path: "", redirectTo: "/mapview", pathMatch: "full" },
  {
    path: "mapview", component: MapviewComponent
  },
  {
    path: "pakketlijst", component: PakketlijstComponent
  },
  { path: "inputform", component: InputformComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

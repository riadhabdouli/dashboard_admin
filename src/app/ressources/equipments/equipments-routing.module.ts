import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from 'src/app/layout/list/list.component';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { DeleteEquipmentComponent } from './delete-equipment/delete-equipment.component';
import { ListEquipmentComponent } from './list-equipment/list-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';

const routes: Routes = [
  { path: 'create-equipment', component: CreateEquipmentComponent },
  { path: 'list-equipment', component: ListEquipmentComponent },
  { path: 'delete-equipment', component: DeleteEquipmentComponent },
  { path: 'update-equipment', component: UpdateEquipmentComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }

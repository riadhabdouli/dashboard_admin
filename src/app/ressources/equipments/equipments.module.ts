import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { ListEquipmentComponent } from './list-equipment/list-equipment.component';
import { UpdateEquipmentComponent } from './update-equipment/update-equipment.component';
import { DeleteEquipmentComponent } from './delete-equipment/delete-equipment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    CreateEquipmentComponent,
    ListEquipmentComponent,
    UpdateEquipmentComponent,
    DeleteEquipmentComponent

  ],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule



  ]
})
export class EquipmentsModule { }

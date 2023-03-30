import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RessourcesRoutingModule } from './ressources-routing.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { EquipmentsRoutingModule } from './equipments/equipments-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RessourcesRoutingModule,
    EquipmentsModule,
    EquipmentsRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDialogModule,
    MatIconModule,
  ]
})
export class RessourcesModule { }

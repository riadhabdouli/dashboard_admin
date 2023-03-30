import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { RessourcesModule } from './ressources/ressources.module';
import { RessourcesRoutingModule } from './ressources/ressources-routing.module';
import { EquipmentsModule } from './ressources/equipments/equipments.module';
import { EquipmentsRoutingModule } from './ressources/equipments/equipments-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        RessourcesModule,
        RessourcesRoutingModule,
        EquipmentsModule,
        EquipmentsRoutingModule,
        FormsModule,
        HttpClientModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        MatProgressBarModule,
        MatDialogModule,
        MatIconModule,
    ],
    providers: [ 
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

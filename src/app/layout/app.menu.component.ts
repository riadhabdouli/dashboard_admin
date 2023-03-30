import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Ressources',
                items: [
                    {
                        label: 'Equipments', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            
                                { label: 'Create Equipment', icon: 'pi pi-fw pi-pencil', routerLink: ['/create-equipment'] },
                                { label: 'List Equipment', icon: 'pi pi-fw pi-list', routerLink: ['/list-equipment'] },
                                { label: 'Delete Equipment', icon: 'pi pi-fw pi-times', routerLink: ['/delete-equipment'] },
                                { label: 'Update Equipment', icon: 'pi pi-fw pi-check', routerLink: ['/update-equipment'] },
                            
                
                        ]
                    },
                   
                ]
            },
       
     

       
        ];
    }
}

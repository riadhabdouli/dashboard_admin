import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/models/equipment.model';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.scss']
})
export class ListEquipmentComponent implements OnInit {
  equipments: Equipment[] = [];;
  p: number = 1;
  selectedEquipment!: Equipment;

  constructor(private equiService:EquipmentService,){

  }

  ngOnInit(): void {
    this.equiService.getAll().subscribe((equipments: Equipment[]) => {
      this.equipments = equipments;
    });
}

onEditEquipment(equipment: Equipment) {
  this.selectedEquipment = equipment;
}
onEquipmentUpdated(equipment: Equipment) {
  const index = this.equipments.findIndex((e) => e.idEquipment === equipment.idEquipment);
  if (index !== -1) {
    this.equipments[index] = equipment;
  }
  this.selectedEquipment =  equipment;
}

}

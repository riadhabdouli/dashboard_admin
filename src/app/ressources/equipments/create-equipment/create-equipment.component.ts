import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateform from 'src/app/helpers/validateform';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.scss']
})
export class CreateEquipmentComponent  {
 
  EquipmentForm!:FormGroup
  router: any;
  renderer: any;
  
  constructor(private fb:FormBuilder,private equiService:EquipmentService,){

  }
  ngOnInit():void{
    
    this.EquipmentForm = this.fb.group({
      id:['',],
      nomEquipment:['',Validators.required],
      quantity:['',Validators.required],
      description:['',Validators.required],

    });    
  }
  submit(){
    if(this.EquipmentForm.valid){
  
  this.equiService.create(this.EquipmentForm.value).subscribe({
    next:(res)=>{
      alert("Your Equipment has been created successfully.");
      this.EquipmentForm.reset(); // Réinitialise le formulaire
    },
    error:(err)=>{
      alert(err?.error.message)
    }
  })
  
      //send to database
      console.log(this.EquipmentForm.value);
    }else{
      validateform.validateAllFormFields(this.EquipmentForm);
      alert("your form is invalid ")
      
  
    }

}
}

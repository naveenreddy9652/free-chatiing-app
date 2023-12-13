import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CreateNewBatchService } from '../create-new-batch.service';

@Component({
  selector: 'app-create-new-batch',
  templateUrl: './create-new-batch.component.html',
  styleUrls: ['./create-new-batch.component.scss']
})
export class CreateNewBatchComponent {
  public userId:string = '';
  public password:string = '';

   public createBatch: FormGroup = new FormGroup({
      userId: new FormControl(),
      password: new FormControl(),
      idPassword: new FormControl(this.userId),
   })

 

   constructor(private _createBatchService: CreateNewBatchService){}
   submit(){
      console.log(this.createBatch.value)

      this._createBatchService.createNewChat(this.createBatch.value).subscribe(
        (data:any)=>{
          alert("created successfully");
        },
        (err:any)=>{
          alert("internal Serve error");
        }
      )
   }
}

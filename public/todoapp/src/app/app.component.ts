import { Component, ViewChild } from '@angular/core';
import { TaskService } from './task.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('myModal') myModal: NgbModal;//for add/edit model instance
  isAdd: boolean
  taskList: Array<any>;//for store all task data
  modalReference: any
  form1: FormGroup;;//category form Group
  constructor(private modalService: NgbModal,
    private _formBuilder: FormBuilder,
    private toastService: ToastrService,
    private taskService: TaskService) { }

  ngOnInit() {
    this.form1 = this._formBuilder.group({
      _id: [''],
      title: ['', [Validators.required]],
      description: ['', Validators.required],
      date: ['', [Validators.required]],
    });
    this.getTasks()
  }

  get f() {
    return this.form1.controls;
  }

  getTasks(): void {
    this.taskService.getTaskDetails().subscribe((response: any) => {
      this.taskList = response['result']
    }, err => {
      console.log(err)
    })
  }

  cancel() {
    this.modalReference.close()
  }

  delete(content) {
    this.modalReference = this.modalService.open(content)
  }

  /**for add particular task */
  addTask() {
    if (this.isAdd) {
      var addObj = {
        "title": this.form1.controls['title'].value,
        "description": this.form1.controls['description'].value,
        "date": this.form1.controls['date'].value
      }
      this.taskService.addTask(addObj).subscribe((response: any) => {
        if (response['responsecode'] == 200) {
          this.toastService.success('added successfully')
          this.taskList.push(response.result)
          this.modalReference.close()
        } else {
          this.toastService.error("something went wrong")
        }
      }, err => {
        console.log(err)
      })
    } else {
      var editObj = {
        "title": this.form1.controls['title'].value,
        "description": this.form1.controls['description'].value
      }
      var id = this.form1.controls['_id'].value
      this.taskService.updateTask(editObj, id).subscribe((response: any) => {
        this.modalReference.close()
        if (response.responsecode == '200') {
          this.toastService.success("Task updated Successfully")
          this.getTasks()
        } else {
          this.toastService.error("something went wrong")
        }
      })
    }

  }


  //for check is edit/Add
  open(content) {
    if (!content) {
      this.isAdd = true
      this.form1.reset()
    } else {
      this.isAdd = false
    }
    this.modalReference = this.modalService.open(this.myModal);
    if (content) {
      //patch form1 value
      this.form1.patchValue(content)
    }
  }

  /**for complete particular task */
  completeTask(taskId) {
    this.taskService.completeTask(taskId).subscribe((response: any) => {
      this.modalReference.close()
      if (response.responsecode == '200') {
        this.getTasks()
        this.toastService.success("Task is complete Successfully")
      }
    }, error => {
      this.toastService.error(error.response.responseMessage)
    })
  }
}

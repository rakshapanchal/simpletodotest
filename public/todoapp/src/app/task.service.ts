import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  /**for add task */
  addTask(data: any) {
    return this.http.post("http://localhost:8086/user/addTask", data, httpOptions)
  }

  /**for get all active taskList */
  getTaskDetails() {
    return this.http.get("http://localhost:8086/user/getTaskList")
  }

  /**for complete task */
  completeTask(taskId) {
    return this.http.put("http://localhost:8086/user/completeTask/" + taskId, {})
  }

  /**for update Task details */
  updateTask(taskDetails, id) {
    return this.http.put<any>("http://localhost:8086/user/updateTask/" + id, taskDetails)
  }
}

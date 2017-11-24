import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department.service';
import { IDepartment } from './IDepartment';

@Component({
    selector: 'o-root',
    templateUrl: 'department.component.html'
})

export class DepartmentComponent implements OnInit {
    departments: IDepartment[];
    constructor(private departmentService: DepartmentService) { }

    ngOnInit() { }
    getDepartments() {
        this.departmentService.getDepartments().
            subscribe(department => { this.departments = department; },
            (err) => { console.log(err); });
    }
}

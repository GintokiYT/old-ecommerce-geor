import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-departments',
  templateUrl: './popup-departments.component.html',
  styleUrls: ['./popup-departments.component.scss'],
})
export class PopupDepartmentsComponent implements OnInit {

  @Output() changeStatusPopupDepartments = new EventEmitter<boolean>();
  @Output() changeDepartmentsForm = new EventEmitter<string>();

  listDepartments = [
    { id: '1', name: 'Amazonas' },
    { id: '2', name: 'Áncash' },
    { id: '3', name: 'Apurímac' },
    { id: '4', name: 'Arequipa' },
    { id: '5', name: 'Ayacucho' },
    { id: '6', name: 'Cajamarca' },
    { id: '7', name: 'Callao' },
    { id: '8', name: 'Cusco' },
    { id: '9', name: 'Huancavelica' },
    { id: '10', name: 'Huánuco' },
    { id: '11', name: 'Ica' },
    { id: '12', name: 'Junín' },
    { id: '13', name: 'La Libertad' },
    { id: '14', name: 'Lambayeque' },
    { id: '15', name: 'Lima' },
    { id: '16', name: 'Loreto' },
    { id: '17', name: 'Madre de Dios' },
    { id: '18', name: 'Moquegua' },
    { id: '19', name: 'Pasco' },
    { id: '20', name: 'Piura' },
    { id: '21', name: 'Puno' },
    { id: '22', name: 'San Martín' },
    { id: '23', name: 'Tacna' },
    { id: '24', name: 'Tumbes' },
    { id: '25', name: 'Ucayali' }
  ]


  constructor() { }

  ngOnInit() {}

  onToBack() {
    const containerpopupdepartments: HTMLDivElement = document.querySelector('.container-popup-departments');

    containerpopupdepartments.classList.remove('active');
    containerpopupdepartments.classList.add('disabled');

    setTimeout(() => {
      this.changeStatusPopupDepartments.emit(false);
    }, 300);
  }

  saveDepartment(id: string) {
    const department: string = this.listDepartments.find( department => department.id === id )['name'];
    this.changeDepartmentsForm.emit(department);

    const containerpopupdepartments: HTMLDivElement = document.querySelector('.container-popup-departments');

    containerpopupdepartments.classList.remove('active');
    containerpopupdepartments.classList.add('disabled');

    setTimeout(() => {
      this.changeStatusPopupDepartments.emit(false);
    }, 300);
  }
}

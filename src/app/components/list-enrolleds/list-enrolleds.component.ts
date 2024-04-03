import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Enrolled } from 'src/app/models/enrolled';
import { EnrolledService } from 'src/app/services/enrolled.service';

@Component({
  selector: 'app-list-enrolleds',
  templateUrl: './list-enrolleds.component.html',
  styleUrls: ['./list-enrolleds.component.css']
})
export class ListEnrolledsComponent {
  listEnrolleds: Enrolled[] = [];

  constructor(private _enrolledService: EnrolledService,
    private toastr: ToastrService) {
    this.obtenerInscriptos();
  }

  obtenerInscriptos() {
    this._enrolledService.getEnrolleds().subscribe(data => {
      console.log(data);
      this.listEnrolleds = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarInscripto(id: any) {
    this._enrolledService.deleteEnrolled(id).subscribe(data => {
      this.toastr.error('El inscripto fue eliminado con exito', 'Inscripto Eliminado');
      this.obtenerInscriptos();
    }, error => {
      console.log(error);
    })
  }

}

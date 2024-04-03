import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Enrolled } from 'src/app/models/enrolled';
import { EnrolledService } from 'src/app/services/enrolled.service';

@Component({
  selector: 'app-create-enrolled',
  templateUrl: './create-enrolled.component.html',
  styleUrls: ['./create-enrolled.component.css']
})
export class CreateEnrolledComponent {
  enrolledForm: FormGroup;
  titulo = 'Crear inscripto';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _enrolledService: EnrolledService,
    private aRouter: ActivatedRoute) {
    this.enrolledForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      cellphone: ['', Validators.required],
      cellule: ['', Validators.required],
      annex: ['', Validators.required],
      guest: ['', Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.isEdit();
  }

  addEnrolled() {
    console.log(this.enrolledForm);

    const ENROLLED: Enrolled = {
      name: this.enrolledForm.get('name')?.value,
      lastName: this.enrolledForm.get('lastName')?.value,
      birthDate: this.enrolledForm.get('birthDate')?.value,
      cellphone: this.enrolledForm.get('cellphone')?.value,
      cellule: this.enrolledForm.get('cellule')?.value,
      annex: this.enrolledForm.get('annex')?.value,
      guest: this.enrolledForm.get('guest')?.value,
    }

    console.log("MI ID " + this.id);

    if (this.id !== null) {
      this._enrolledService.editEnrolled(this.id, ENROLLED).subscribe(data => {
        this.toastr.info('El inscripto fue actualizado con éxito!', 'Inscripto actualizado');
        this.router.navigate(['/']);
      })
    } else {
      console.log(ENROLLED);
      this._enrolledService.saveEnrolled(ENROLLED).subscribe(data => {
        this.toastr.success('El inscripto fue agregado con éxito!', 'Inscripto registrado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.enrolledForm.reset();
      })
    }

  }

  isEdit() {
    if (this.id !== null) {
      this.titulo = 'Editar inscripto';
      this._enrolledService.getEnrolled(this.id).subscribe(data => {
        this.enrolledForm.setValue({
          name: data.name,
          lastName: data.lastName,
          birthDate: data.birthDate,
          cellphone: data.cellphone,
          cellule: data.cellule,
          annex: data.annex,
          guest: data.guest,
        })
      })
    }
  }

}

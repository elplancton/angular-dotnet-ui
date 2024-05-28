import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PeoplesService } from '../../peoples.service';

@Component({
  selector: 'app-create-people-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [PeoplesService],
  templateUrl: './create-people-dialog.component.html',
  styleUrl: './create-people-dialog.component.scss',
})
export class CreatePeopleDialogComponent {
  formGroup = this.formBuilder.group({
    name: '',
    surname: '',
    occupation: '',
    age: 0,
  });
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly matDialogRef: MatDialogRef<CreatePeopleDialogComponent>,
    private readonly peoplesService: PeoplesService
  ) {}

  create() {
    if (!this.formGroup.valid) return;

    this.peoplesService
      .create({
        nome: this.formGroup.value.name ?? '',
        sobrenome: this.formGroup.value.surname ?? '',
        profissao: this.formGroup.value.occupation ?? '',
        idade: this.formGroup.value.age ?? 0,
      })
      .subscribe((people) => {
        this.matDialogRef.close(people);
      });
  }
}

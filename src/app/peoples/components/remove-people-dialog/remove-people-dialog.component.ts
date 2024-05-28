import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PeoplesService } from '../../peoples.service';

@Component({
  selector: 'app-remove-people-dialog',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PeoplesService],
  templateUrl: './remove-people-dialog.component.html',
  styleUrl: './remove-people-dialog.component.scss',
})
export class RemovePeopleDialogComponent {
  constructor(
    private readonly matDialogRef: MatDialogRef<RemovePeopleDialogComponent>,
    private readonly peoplesService: PeoplesService,
    @Inject(MAT_DIALOG_DATA)
    protected readonly data: { id: number; name: string }
  ) {}

  remove() {
    this.peoplesService.remove(this.data.id).subscribe((people) => {
      this.matDialogRef.close(people);
    });
  }
}

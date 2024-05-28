import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreatePeopleDialogComponent } from './components/create-people-dialog/create-people-dialog.component';
import { RemovePeopleDialogComponent } from './components/remove-people-dialog/remove-people-dialog.component';
import { People } from './people.entity';
import { PeoplesService } from './peoples.service';

@Component({
  selector: 'app-peoples',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    CreatePeopleDialogComponent,
    RemovePeopleDialogComponent,
    HttpClientModule,
  ],
  providers: [PeoplesService],
  templateUrl: './peoples.component.html',
  styleUrl: './peoples.component.scss',
})
export class PeoplesComponent {
  @ViewChild(MatTable) matTable!: MatTable<People>;
  protected peoples: People[] = [];
  protected displayedColumns = [
    'name',
    'surname',
    'age',
    'occupation',
    'actions',
  ];

  constructor(
    private readonly peoplesService: PeoplesService,
    private readonly matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.peoplesService.findAll().subscribe((result) => {
      this.peoples = result;
    });
  }

  openMoreDetailsDialog(people: People): void {}

  openRemoveDialog(people: People): void {
    this.matDialog
      .open(RemovePeopleDialogComponent, {
        data: {
          id: people.pessoaId,
          name: `${people.nome} ${people.sobrenome}`,
        },
      })
      .afterClosed()
      .subscribe((people) => {
        if (people) {
          const index = this.peoples.findIndex(
            (p) => p.pessoaId === people.pessoaId
          );

          this.peoples.splice(index, 1);
          this.matTable.renderRows();
        }
      });
  }

  openUpdateDialog(people: People): void {}

  openCreateDialog(): void {
    this.matDialog
      .open(CreatePeopleDialogComponent)
      .afterClosed()
      .subscribe((people) => {
        if (people) {
          this.peoples.push(people);
          this.matTable.renderRows();
        }
      });
  }
}

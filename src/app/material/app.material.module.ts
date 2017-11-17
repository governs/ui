import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule
} from '@angular/material';


@NgModule({
    imports: [FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatDialogModule,
        MatCardModule,
        MatTabsModule],
    exports: [FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatDialogModule,
        MatCardModule,
        MatTabsModule]
})
export class AppMaterialModule { }



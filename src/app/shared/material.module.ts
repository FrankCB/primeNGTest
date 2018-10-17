import { NgModule, Type } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  ErrorStateMatcher,
  MatProgressBarModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatChipsModule
} from '@angular/material';

// import { ShowOnDirtyOrTouchedErrorStateMatcher } from './validator/error-options';

const modules: Array<Type<any>> = [
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatExpansionModule

];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [
    { provide: ErrorStateMatcher, useClass: ErrorStateMatcher }
  ]
})
export class MaterialModule { }

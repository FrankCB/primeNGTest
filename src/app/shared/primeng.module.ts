import { NgModule, Type } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';


const modules: Array<Type<any>> = [
  ToolbarModule,
  ButtonModule,
  SplitButtonModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})

export class PrimeNgModule {}

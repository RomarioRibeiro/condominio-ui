import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';


@NgModule({




  exports: [
    CardModule,
    SidebarModule,
    AccordionModule,
    ButtonModule

  ]
})
export class PrimengModule { }

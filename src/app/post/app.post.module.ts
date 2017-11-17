import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material/app.material.module';

import { AppPostComponent } from './app.post.component';
import { AppPostService } from './app.post.service';


@NgModule({
    imports: [CommonModule, ReactiveFormsModule, AppMaterialModule],
    declarations: [AppPostComponent],
    exports: [],
    providers: [AppPostService]
})
export class AppPostModule { }

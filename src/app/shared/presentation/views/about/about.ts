import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    TranslatePipe,
    NgOptimizedImage
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}

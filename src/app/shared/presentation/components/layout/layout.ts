import { Component } from '@angular/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  imports: [
    MatToolbar,
    RouterLink,
    TranslatePipe,
    MatToolbarRow
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  options = [
    {link: '/home', label: 'option.home'},
    {link: '/about', label: 'option.about'},
  ]
}

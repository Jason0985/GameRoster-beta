import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flip-7',
  imports: [MatIconModule, MatTooltipModule, RouterLink],
  templateUrl: './flip-7.html',
  styleUrl: './flip-7.scss',
})
export class Flip7 {}

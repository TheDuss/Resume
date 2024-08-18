import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkComponent } from '../work/work.component';
import { VoluntaryworkComponent } from '../voluntarywork/voluntarywork.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,WorkComponent,VoluntaryworkComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

}

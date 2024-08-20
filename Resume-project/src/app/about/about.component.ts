
import { Component } from '@angular/core';
import { WorkComponent } from '../work/work.component';
import { VoluntaryworkComponent } from '../voluntarywork/voluntarywork.component';
import { EducationComponent } from '../education/education.component';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [WorkComponent,VoluntaryworkComponent,EducationComponent,TestComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

}

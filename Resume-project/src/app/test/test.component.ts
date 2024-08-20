import { Component } from '@angular/core';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MdbAccordionModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}

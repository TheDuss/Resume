
import { Component } from '@angular/core';
import { WorkComponent } from '../work/work.component';
import { VoluntaryworkComponent } from '../voluntarywork/voluntarywork.component';
import { EducationComponent } from '../education/education.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [WorkComponent,VoluntaryworkComponent,EducationComponent,HttpClientModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private http: HttpClient) {}
  downloadFile() {
    const fileUrl = '/assets/CV.pdf';
  
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}

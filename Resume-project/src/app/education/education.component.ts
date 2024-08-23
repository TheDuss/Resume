import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule,MdbAccordionModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  items: {
    title: string;
    degree: string;
    year: string;
    learning: string[];
    active?: boolean;
  }[] = [
    {
      title: 'Software technology • AU Aarhus University',
      degree: 'Professional bachelor',
      year: 'Dec 2018 - Jan 2024',
      learning: [
        'Through my education, I have gained a broad and solid basic knowledge in mathematics, physics, signal processing and bothanalogue and digital electronics. I have developed in-depth skills inprogramming, system development, software design and testing, aswell as development processes and modern software technologies. My education has also given me insight into innovation andenvironmental aspects of software development.',
        'I have learned to apply my knowledge to develop new and innovativesoftware solutions, select and implement optimal technologicalsolutions for specific problems, and put these solutions into operation. I can effectively communicate complex technical issues and solutionsto both technical and non-technical stakeholders. ',
        'I have strong skills in process and project management, and I am ableto work both innovatively and developmentally in software-relatedprojects.'],
    },
 
  ];

  itemClicked(i: number) {
    if (this.items[i].active) {
      this.items[i].active = false;
    } else {
      this.items = this.items.map((item, index) => {
        item.active = index === i; 
        return item;
      });
    }
  }
}

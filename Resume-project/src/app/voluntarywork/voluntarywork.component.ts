import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-voluntarywork',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voluntarywork.component.html',
  styleUrl: './voluntarywork.component.css'
})
export class VoluntaryworkComponent {
  items: {
    title: string;
    adresse: string;
    year: string;
    work: string[];
    active?: boolean;
  }[] = [
    {
      title: 'Volunteer trainer • Aarhus Taekwondo',
      adresse: 'Silkeborgvej 41E, 8000 Aarhus C',
      year: 'Aug 2020 - Dec 2021',
      work: ['Coach'],
    },
    {
      title: 'Association treasurer • Aarhus Taekwondo',
      adresse: 'Ingerslevs Boulevard 2, 8000 Aarhus',
      year: 'Aug 2020 - Now',
      work: ['Association treasurer'],
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

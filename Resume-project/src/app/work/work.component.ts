import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  items: {
    title: string;
    adresse: string;
    year: string;
    work: string[];
    active?: boolean;
  }[] = [
    {
      title: 'Software Intern • Develvo Product',
      adresse: 'Tangen 6, 8200 Aarhus N',
      year: 'Feb 2022 - Jun 2022',
      work: [
        'Import and export of data in csv file in C',
        'Upgrading of old user interface',
        'Java-programming',
        'Data handling in HTML',
        'JUnit XML',
      ],
    },
    {
      title: 'Service Worker • Venus Pizza',
      adresse: 'Vester allé 24, 8000 Aarhus C',
      year: 'Mar 2012 - Jan 2014',
      work: ['Delivery', 'Cashier', 'Cook'],
    },
    {
      title: 'Dance instructor • Aarhus Kommune',
      adresse: 'Rådhuspladsen 2 8000 Aarhus C',
      year: 'Jul 2011 - Jan 2012',
      work: ['Coach'],
    },
    {
      title: 'Service Worker • Føtex Storcenter Nord',
      adresse: 'Finlandsgade 17, 19, 8200 Aarhus N',
      year: 'Jul 2011 - Jan 2012',
      work: ['Cashier', 'Cook'],
    },
    {
      title: 'Service Worker • McDonalds',
      adresse: 'Nørre Voldgade 82, 1358 København K',
      year: 'Jul 2011 - Jan 2012',
      work: ['Cashier', 'Cook', 'Cleaning'],
    },
  ];

  itemClicked(i: number) {
    const clickedItem = this.items[i];
    if (clickedItem.active) {
      clickedItem.active = false;
    } else {
      this.items = this.items.map((item, index) => {
        item.active = index === i; 
        return item;
      });
    }
  }

}

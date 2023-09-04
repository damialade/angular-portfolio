import { Component, OnInit } from '@angular/core';

interface portfolioType {
  id: string;
  imageUrl: string;
  textOverlay: string;
  project: string;
  client: string;
  duration: string;
  technologies: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', '../app.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolio: Array<any> = [
    {
      id: '1',
      imageUrl:
        'https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=600',
      textOverlay: 'Project 1',
      project: 'Website',
      client: 'Envato',
      duration: '3 Months',
      technologies: 'Html  Javascript',
    },
    {
      id: '2',
      imageUrl:
        'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600',
      textOverlay: 'Project 2',
      project: 'Website',
      client: 'Envato',
      duration: '3 Months',
      technologies: 'Html  Javascript',
    },
    {
      id: '3',
      imageUrl:
        'https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=600',

      textOverlay: 'Project 3',
      project: 'Website',
      client: 'Envato',
      duration: '3 Months',
      technologies: 'Html  Javascript',
    },
    {
      id: '4',
      imageUrl:
        'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=600',

      textOverlay: 'Project 4',
      project: 'Website',
      client: 'Envato',
      duration: '3 Months',
      technologies: 'Html  Javascript',
    },
    {
      id: '5',
      imageUrl:
        'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=600',

      textOverlay: 'Project 5',
      project: 'Website',
      client: 'Envato',
      duration: '3 Months',
      technologies: 'Html  Javascript',
    },
    {
      id: '6',
      imageUrl:
        'https://images.pexels.com/photos/619419/pexels-photo-619419.jpeg?auto=compress&cs=tinysrgb&w=600',

      textOverlay: 'Project 6',
      project: 'Website',
      client: 'Envato',
      duration: '3 Months',
      technologies: 'Html  Javascript',
    },
    {
      id: '7',
      imageUrl:
        'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=600',

      textOverlay: 'Project 7',
      project: 'Website',
      client: 'Monzo',
      duration: '3 Months',
      technologies: 'Html  Angular CSS3',
    },
    {
      id: '8',
      imageUrl:
        'https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg?auto=compress&cs=tinysrgb&w=600',

      textOverlay: 'Project 8',
      project: 'Website',
      client: 'StarlingUK',
      duration: '3 Months',
      technologies: 'Html  SASS TailwindCSS',
    },
    {
      id: '9',
      imageUrl:
        'https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&w=600',

      textOverlay: 'Project 9',
      project: 'Website',
      client: 'Facebook',
      duration: '12 Months',
      technologies: 'Html  Javascript ReactJS NextJS',
    },
  ];

  showDialog: boolean = false;
  selectedPortfolio?: portfolioType;

  setPortfolio(data: any) {
    this.showDialog = true;
    this.selectedPortfolio = data;
  }

  constructor() {}
  ngOnInit(): void {}
}

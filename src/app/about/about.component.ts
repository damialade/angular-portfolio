import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../app.component.scss'],
})
export class AboutComponent implements OnInit {
  experience: Array<any> = [
    {
      id: 1,
      year: 'SEPTEMBER, 2022 - TILL DATE',
      title: 'JUNIOR FRONTEND DEVELOPER',
      place: 'FUSION INTELLIGENCE',
      desc1:
        'Built reusable components across various projects and optimized them for Maximum performance and ensured all web applications are responsive across all screen sizes while also developing a product that is expected to gross $1million in revenue annually.',
    },
    {
      id: 2,
      year: 'MARCH 2022 - AUGUST 2022',
      title: 'FRONTEND DEVELOPER (INTERN)',
      place: 'FUSION INTELLIGENCE',
      desc1:
        'Translated prototype designs into functional web applications without compromising functionality for aesthetics.',
    },
    {
      id: 3,
      year: 'JUNE 2021- MARCH 2022',
      title: 'WEB DEVELOPER',
      place: 'SELF TAUGHT',
      desc1:
        ' Making use of free online resources including websites, tutorials, video courses, and forums to learn, Translated mockup designs into functional web applications,integrating free APIs on the web and ensuring cross browser compatibility while also learning Javascript framework/libraries(ReactJs,NextJs) ',
    },
  ];

  education: Array<any> = [
    {
      id: 4,
      year: 'ONGOING',
      course: 'MSC. MANAGEMENT OF BUSINESS INFORMATION TECHNOLOGY',
      place: 'UNIVERSITY OF GREENWICH',
      desc: 'It is a course that sheds the light on the balance between strategic planning, operational excellence, and a focus on delivering value to a business. It also involves adapting to the evolving technology landscape and addressing emerging challenges, such as cybersecurity threats and data privacy concerns.',
    },
    {
      id: 5,
      year: '2021',
      course: 'WEB DEVELOPMENT BOOTCAMP',
      place: 'MOAT ACADEMY',
      desc: 'Studied how to create user interfaces for web applications using HTML and CSS, gained knowledge on object oriented programming while also designing and modeelling database using MySQL',
    },
    {
      id: 6,
      year: '2013-2018',
      course: 'BACHELORS ENGLISH AND INTERNATIONAL STUDIES',
      place: 'OSUN STATE UNIVERSITY',
      desc: 'It is the study of the English language and literature with a focus on international and global affairs. This interdisciplinary field of study explores the connections between language, culture, and global issues.',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
  @Input() storedTheme: string | null = localStorage.getItem('theme-color');
}

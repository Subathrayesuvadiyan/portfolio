import { Component } from '@angular/core';

interface Box {
  id: number;
  imageUrl: string;
  heading: string;
  paragraph: string;
  websiteUrl: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  boxes: Box[] = [
    {
      id: 1,
      imageUrl: '/assets/port1.png',
      heading: 'Developed this website',
      paragraph: 'Portfolio website',
      websiteUrl: 'https://example.com/box1'
    },
    {
      id: 2,
      imageUrl: '/assets/youtube_ui.png',
      heading: 'With API integration for various functionalities.',
      paragraph: 'Youtube Clone',
      websiteUrl: 'https://example.com/box2'
    },
    {
      id: 3,
      imageUrl: '/assets/sample_recipie_blog.jpg',
      heading: '',
      paragraph: 'Recipe Blog',
      websiteUrl: 'https://example.com/box3'
    },
    {
      id: 3,
      imageUrl: '/assets/sample_recipie_blog.jpg',
      heading: 'Recipe Blog',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      websiteUrl: 'https://example.com/box3'
    },
    {
      id: 3,
      imageUrl: '/assets/sample_recipie_blog.jpg',
      heading: 'Recipe Blog',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      websiteUrl: 'https://example.com/box3'
    },
    // ... add more boxes as needed
  ];

  selectedBox: Box | null = null;

  openModal(box: Box): void {
    this.selectedBox = box;
    document.body.style.overflow = 'hidden'; // Disable scrolling when the overlay is active

  }

  closeModal(): void {
    this.selectedBox = null;
    document.body.style.overflow = 'auto'; // Enable scrolling when the overlay is inactive

  }




}

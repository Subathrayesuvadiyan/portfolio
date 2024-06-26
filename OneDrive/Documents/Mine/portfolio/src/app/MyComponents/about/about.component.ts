import { Component } from '@angular/core';
import { DownloadService } from '../../download.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  activeTab: string = 'education'

  ngOnInit() {
    // Set the activeTab to 'education' by default
    this.showContent('education');
  }

  showContent(tab: string): void {
    this.activeTab = tab;
  }

  constructor(private downloadService: DownloadService) {}

  downloadCV() {
    const content = 'Your CV content goes here.';
    const fileName = 'assets/My_resume.pdf';
    const contentType = 'application/pdf';

    this.downloadService.downloadFile(content, fileName, contentType);
  }
}

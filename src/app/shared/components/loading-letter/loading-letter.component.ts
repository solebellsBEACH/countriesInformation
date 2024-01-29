import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-letter',
  templateUrl: './loading-letter.component.html',
  styleUrls: ['./loading-letter.component.scss'],
})
export class LoadingLetterComponent {
  @Input() label = 'Loading ';
  animatedText = '';
  @Input() totalTime = 1000;

  // TODO: CREATE UNIT TESTS

  constructor() { }

  ngOnInit(): void {
    this.animateLetters();
  }

  animateLetters() {
    const labelLength = this.label.length;
    let currentIndex = 0;

    const animationInterval = setInterval(() => {
      this.animatedText = this.label.slice(0, currentIndex + 1);
      currentIndex++;

      if (currentIndex === labelLength) {
        currentIndex = 0;
        this.animatedText = '';
      }
    }, this.totalTime / this.label.length);
  }
}

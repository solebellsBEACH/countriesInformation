import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-letter',
  templateUrl: './loading-letter.component.html',
  styleUrls: ['./loading-letter.component.scss']
})
export class LoadingLetterComponent {
  phrase = 'Hello ';
  animatedText = '';
  totalTime = 1000

  constructor() { }

  ngOnInit(): void {
    this.animateLetters();
  }

  animateLetters() {
    const phraseLength = this.phrase.length;
    let currentIndex = 0;

    const animationInterval = setInterval(() => {
      this.animatedText = this.phrase.slice(0, currentIndex + 1);
      currentIndex++;

      if (currentIndex === phraseLength) {
        currentIndex = 0;
        this.animatedText = '';
      }
    }, (this.totalTime / this.phrase.length));
  }
}

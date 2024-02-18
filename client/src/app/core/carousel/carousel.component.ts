import { Component, OnInit } from '@angular/core';

import { carouselSlides } from '../../util/data';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
	slides: any[] = carouselSlides;
	currentSlide: number = 0;

	constructor() { }

	ngOnInit(): void {
		setInterval(() => {
			this.nextSlide();
		}, 5000);
	}

	showSlide(n: number) {
		this.currentSlide = (n + this.slides.length) % this.slides.length;
	}

	nextSlide() {
		this.showSlide(this.currentSlide + 1);
	}

	previousSlide() {
		this.showSlide(this.currentSlide - 1);
	}

	isActive(index: number): boolean {
		return index === this.currentSlide;
	}
}

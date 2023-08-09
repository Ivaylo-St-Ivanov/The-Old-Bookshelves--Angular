import { Component } from '@angular/core';
import { RatingConfig } from 'ngx-bootstrap/rating';

export function getRatingConfig(): RatingConfig {
    return Object.assign(new RatingConfig(), { ariaLabel: 'My Rating' });
}

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    // styleUrls: ['./rating.component.css'],
    providers: [{ provide: RatingConfig, useFactory: getRatingConfig }]
})
export class RatingComponent {
    max = 10;
    rate = 4;
}

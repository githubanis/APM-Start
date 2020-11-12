import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StarComponent implements OnChanges{

    onClick(): void {
      this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
    ngOnChanges(): void {
      this.starWidth = this.rating * 75 / 5;
    }

    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> =
      new EventEmitter<string>();
}

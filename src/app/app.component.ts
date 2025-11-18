import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;


    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;

    @ViewChild(HighlightedDirective) highlighted: HighlightedDirective;
    @ViewChild(CourseCardComponent, {read: HighlightedDirective}) highlighted2: HighlightedDirective;


    constructor() {

    }

    ngAfterViewInit() {
        console.log(this.highlighted);
        console.log(this.highlighted2)
    }

    onCourseSelected(course:Course) {

    }

    onHighlightToggle(isHighlighted: boolean) {
        console.log("Highlight Toggled: " + isHighlighted);
    }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightedDirective } from './courses/directives/highlighted.directive';
import { NgxUnlessDirective } from './courses/directives/ngx-unless.directive';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CoursesModule } from './courses/courses.module';
import { CourseTitleComponent } from './course-title/course-title.component';

@NgModule({
    declarations: [
        AppComponent,
        CourseTitleComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, 
        BrowserAnimationsModule,
        CoursesModule
    ], 
    providers: [provideHttpClient(withInterceptorsFromDi())], 
})
export class AppModule { }

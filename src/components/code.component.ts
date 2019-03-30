import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'code-component',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CodeComponent {
    @Input() code: string;
}

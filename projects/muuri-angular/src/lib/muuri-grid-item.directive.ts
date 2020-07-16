import { Directive, ElementRef, Host, OnInit } from '@angular/core';
import { MuuriGridDirective } from './muuri-grid.directive';

@Directive({
    selector: '[muuriGridItem]'
})
export class MuuriGridItemDirective implements OnInit {
    constructor(@Host() private tileGrid: MuuriGridDirective, private elRef: ElementRef) {}

    ngOnInit(): void {
        this.tileGrid.addItem(this.elRef);
    }
}

import { Directive, ElementRef, Host, OnDestroy, OnInit } from '@angular/core';
import { MuuriGridDirective } from './muuri-grid.directive';

@Directive({
    selector: '[muuriGridItem]'
})
export class MuuriGridItemDirective implements OnInit, OnDestroy {
    constructor(@Host() private tileGrid: MuuriGridDirective, private elRef: ElementRef) {}

    ngOnInit(): void {
        this.tileGrid.addItem(this.elRef);
        // Force refresh the grid to prevent overlapping items
        this.tileGrid.refresh();
    }

    ngOnDestroy(): void {
        this.tileGrid.removeItem(this.elRef);
    }
}

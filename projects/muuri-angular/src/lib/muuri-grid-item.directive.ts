import { Directive, ElementRef, EventEmitter, Host, OnDestroy, OnInit, Output } from '@angular/core';
import { Item } from 'muuri';
import { MuuriGridDirective } from './muuri-grid.directive';

@Directive({
    selector: '[muuriGridItem]'
})
export class MuuriGridItemDirective implements OnInit, OnDestroy {
    @Output() itemCreated: EventEmitter<Item> = new EventEmitter();

    constructor(@Host() private tileGrid: MuuriGridDirective, private elRef: ElementRef) {}

    ngOnInit(): void {
        // As Angular creates one item at a time, we'll get an array back with just one item.
        this.itemCreated.emit(this.tileGrid.addItem(this.elRef)[0]);

        // Force refresh the grid to prevent overlapping items
        this.tileGrid.refresh();
    }

    ngOnDestroy(): void {
        this.tileGrid.removeItem(this.elRef);
    }
}

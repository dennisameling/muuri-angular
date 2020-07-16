import { Directive, ElementRef, OnDestroy, OnInit, Input } from '@angular/core';
import Grid, { GridOptions } from 'muuri';

@Directive({
    selector: '[muuriGrid]'
})
export class MuuriGridDirective implements OnInit, OnDestroy {
    @Input() config: GridOptions;
    layout: Grid;

    constructor(private elRef: ElementRef) {}

    ngOnInit(): void {
        this.init(this.elRef);
    }

    /**
     * Initialize the grid.
     */
    init(grid: ElementRef): void {
        this.layout = new Grid(grid.nativeElement, this.config);
    }

    /**
     * Add a new item to the grid.
     */
    addItem(item: ElementRef): void {
        this.layout.add(item.nativeElement);
    }

    destroyLayout(): void {
        this.layout.destroy();
        this.layout = null;
    }

    refresh(): void {
        this.layout.refreshItems();
        this.layout.layout();
    }

    ngOnDestroy(): void {
        this.destroyLayout();
    }
}

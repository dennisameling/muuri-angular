# muuri-angular

Angular wrapper around the [Muuri JavaScript library](https://github.com/haltu/muuri).

Do you have any requests or improvements? Feel free to create an issue or PR.

## Getting started

Install the library with the following commands:

`npm install --save muuri muuri-angular`

## Usage

Add `MuuriModule` as an import to your `app.module.ts`:

```TypeScript
import { MuuriModule } from 'muuri-angular';

@NgModule({
  declarations: [...],
  imports: [
    ...
    MuuriModule
  ],
  providers: [],
  bootstrap: [...]
})
export class AppModule { }
```

`app.component.html`

```HTML
<button id="add-item-button" (click)="addToGrid()">+ Add new block</button>
<br><br>
<div #grid class="grid" muuriGrid [config]="layoutConfig">
    <div class="grid-item" muuriGridItem *ngFor="let item of blockItems">
        <div class="grid-item-content">
            {{ item }}
        </div>
    </div>
</div>
```

`app.component.ts`

```TypeScript
import { Component } from '@angular/core';
import { GridOptions } from 'muuri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    blockItems: string[] = ['test', 'test2'];

    // Add any options you'd like to set here
    public layoutConfig: GridOptions = {
        items: [],
        layoutOnInit: false,
        dragEnabled: true,
        layout: {
            fillGaps: true,
            horizontal: false,
            alignRight: false,
            alignBottom: false,
            rounding: true
        }
    };

    addToGrid() {
        this.blockItems.push('hello');
    }
}
```
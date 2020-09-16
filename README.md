# muuri-angular

[![npm version](https://badge.fury.io/js/muuri-angular.svg)](https://badge.fury.io/js/muuri-angular) ![](https://github.com/dennisameling/muuri-angular/workflows/Angular%20library/badge.svg)

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

## Contributing
If you want to help developing this library, please do the following to set up your local environment:
- Set up a project that uses `muuri-angular` as a dependency.
- Clone this repo (`muuri-angular`).
- Run `npm install`.
- Run `npm run build:ivy`. This will build an Ivy-compatible library that you can use in Angular 9+ projects locally.
  - If you're still using Angular 8 or lower in your project, run `npm run build:prod` instead. This will use Angular's legacy View Engine to build the library.
- Run `cd dist/muuri-angular`.
- Run `npm link`.
- In your project, run `npm link muuri-angular`. Your project will now use the local `muuri-angular` code.
- Run `npm run build:ivy -- --watch` so that the library gets rebuilt on every code change 😃

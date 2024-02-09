import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { isEmpty as lodashIsEmpty } from 'lodash';
import { isEmpty as lodashEsIsEmpty } from 'lodash-es';

@Component({
  selector: 'app-dependency-lazy-loading-page',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule],
  templateUrl: './dependency-lazy-loading-page.component.html',
  styleUrl: './dependency-lazy-loading-page.component.scss'
})
export class DependencyLazyLoadingPageComponent {
  @ViewChild('placeholder', { static: true, read: ViewContainerRef }) placeholder!: ViewContainerRef;

  loadLodashLibrary() {
    console.log(lodashIsEmpty([1, 2, 3]));
  }

  loadLodashLibraryLazy() {
    import('lodash/isEmpty').then((lodash) => {
      console.log(lodash.default([1, 2, 3]));
    });
  }

  loadLodashEsLibrary() {
    console.log(lodashEsIsEmpty([1, 2, 3]));
  }

  loadLodashEsLibraryLazy() {
    import('lodash-es/isEmpty').then((lodashEs) => {
      console.log(lodashEs.default([1, 2, 3]));
    });
  }

  loadComponentLazy() {
    import('../../components/heavy-component/heavy-component.component').then((module) => {
      this.placeholder.clear();
      this.placeholder.createComponent(module.HeavyComponentComponent);
    });
  }
}
export default DependencyLazyLoadingPageComponent;

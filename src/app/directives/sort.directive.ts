import { Directive, Input, ElementRef, OnInit, Renderer } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appSort]'
})
export class SortDirective implements OnInit {
  @Input() data: any[];
  // tslint:disable-next-line:no-input-rename
  @Input('sortKey') key: any;
  private toggleSort = false;

  constructor(private el: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'click', event => {
      const parentNode = this.el.nativeElement.parentNode;
      const children = parentNode.children;

      if (this.data && this.key) {
        const sortedData: any = this.sortArray();
      }
      this.toggleSort = !this.toggleSort;
    });
  }

  sortArray(): Array<any> {
    // const tempArray: Array<any> = this.data;
    const tempArray: Array<any> = this.data;
    // console.log(this.data);
    tempArray.sort((a, b) => {
      // console.log(a);
      // console.log(b);

      const aKey = a[this.key];
      if (isNaN(a[this.key])) {
        const str1: string = a[this.key].toLowerCase();
        const str2: string = b[this.key].toLowerCase();
        return this.toggleSort ? (str1 < str2 ? -1 : 1) : str1 > str2 ? -1 : 1;
      } else {
        const str1: number = a[this.key];
        const str2: number = b[this.key];
        return this.toggleSort ? str1 - str2 : -1;
      }
      // if (this.toggleSort) {
      //   if (str1 < str2) {
      //     return -1;
      //   }
      //   if (str1 > str2) {
      //     return 1;
      //   }
      // } else {
      //   if (str1 > str2) {
      //     return -1;
      //   }
      //   if (str1 < str2) {
      //     return 1;
      //   }
      // }
      // return this.toggleSort ? (str1 < str2 ? -1 : 1) : str1 > str2 ? -1 : 1;

      // return 0;
    });
    return tempArray;
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedFolderService {
  selectedFolder: any = {};
  selectedFolderChange: Subject<any> = new Subject<any>();

  constructor() {
    this.selectedFolderChange.subscribe((value) => {
      this.selectedFolder = value;
    });
  }

  setSelectedFolder(val: any) {
    this.selectedFolderChange.next(val);
  }
  // private readonly _selectedFolder = new BehaviorSubject<{}>({});

  // readonly selectedFolder$ = this._selectedFolder.asObservable();

  // get selectedFolder() {
  //   return this._selectedFolder.getValue();
  // }

  // set selectedFolder(val: any) {
  //   this._selectedFolder.next(val);
  // }
}

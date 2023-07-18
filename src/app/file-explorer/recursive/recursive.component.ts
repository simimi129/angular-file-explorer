import { Component, Input, OnInit } from '@angular/core';
import {
  IconDefinition,
  faFolder,
  faFolderOpen,
  faFile,
  faAngleRight,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { SelectedFolderService } from '../selected-folder.service';

@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.css'],
})
export class RecursiveComponent {
  @Input() recursiveList: any;
  faFolder = faFolder;
  faFodler = faFolderOpen;
  faFile = faFile;
  faAngleRight = faAngleRight;
  faAngleDown = faAngleDown;
  faAngle: IconDefinition = faAngleRight;

  constructor(private selectedFolderService: SelectedFolderService) {}

  toggleIsOpen(item: any): void {
    item.isOpen = !item.isOpen;
    if (!item.isOpen) {
      this.toggleIsOpen;
    }
  }

  setIcon(item: any): IconDefinition {
    if (item.isFolder) {
      if (item.isOpen) {
        return faFolderOpen;
      }
      return faFolder;
    }
    return faFile;
  }

  toggleAngle(item: any): IconDefinition {
    if (item.isOpen) {
      return faAngleDown;
    }
    return faAngleRight;
  }

  toggleSelected(item: any): void {
    if (!item.isSelected) {
      this.selectedFolderService.selectedFolder.isSelected = false;
      item.isSelected = true;
      this.selectedFolderService.setSelectedFolder(item);
    }
  }
}

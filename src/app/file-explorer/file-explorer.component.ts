import { Component, OnDestroy, OnInit } from '@angular/core';
import { nestedData } from '../../assets/schema';
import { SelectedFolderService } from './selected-folder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css'],
})
export class FileExplorerComponent implements OnInit, OnDestroy {
  schema: any = nestedData;
  selectedFolder: any;
  subscription: Subscription = new Subscription();

  constructor(private selectedFolderService: SelectedFolderService) {
    this.selectedFolder = selectedFolderService.selectedFolder;
  }

  ngOnInit(): void {
    this.subscription =
      this.selectedFolderService.selectedFolderChange.subscribe((res: any) => {
        this.selectedFolder = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

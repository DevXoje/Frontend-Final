import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@shared/app-common/infrastructure/services/loader.service';

@Component({
  selector: 'app-loader',
  template: `
<div class="progress-loader" [hidden]="!loading">
    <div class="loading-spinner">
        <!-- <img src="https://loading.io/mod/spinner/gear-set/index.svg"> -->
        <div class="loader-dots img"></div>
        <span class="loading-message">Please wait...</span>
    </div>
</div>`,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading: boolean = false;

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });

  }
  ngOnInit() {
  }


}

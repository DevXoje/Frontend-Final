import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  template: `loader`,
  providers: [LoaderService]

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

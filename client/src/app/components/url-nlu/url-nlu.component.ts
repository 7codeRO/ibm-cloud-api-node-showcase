import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { UrlNluService } from "./url-nlu.service";
import { UrlCategory } from "../../types/models";

@Component({
  selector: 'app-url-nlu',
  templateUrl: './url-nlu.component.html',
  styleUrls: ['./url-nlu.component.scss']
})
export class UrlNluComponent implements OnInit {

  urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  urlFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.urlPattern)
  ]);

  loading: boolean = false;
  serverError: string = '';
  response: UrlCategory;

  constructor(private nluService: UrlNluService) { }

  ngOnInit() {
  }

  reset() {
    this.response = null;
    this.urlFormControl.reset();
  }

  fetchURL() {
    this.loading = true;
    const url = this.urlFormControl.value;
    this.nluService.getUrl(url).subscribe(res => {
      this.loading = false;
      this.response = res;
    }, res => {
      this.loading = false;
      this.serverError = res.error[0].msg;
    });
  }

}

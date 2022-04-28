import { Component, OnInit } from "@angular/core";

@Component({
  selector: "header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  public title: string = "ROCKMAPS";
  ngOnInit() {}
}

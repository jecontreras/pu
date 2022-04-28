import { Component, OnInit, Inject, Renderer2 } from "@angular/core";
import { Observable } from "rxjs";

import { Item } from "../../items/items.model";

@Component({
  selector: "app-register-item",
  templateUrl: "./register-item.component.html",
  styleUrls: ["./register-item.component.scss"]
})
export class RegisterItemComponent implements OnInit {
  public item$: Observable<any[]>;
  public scan: string = "No Scan Found";

  constructor() {}

  public scanSuccessHandler(event$: any): void {
    this.scan = event$;
  }

  ngOnInit() {}
}

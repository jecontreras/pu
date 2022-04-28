import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../../items/items.service";

@Component({
  selector: "app-view-item",
  templateUrl: "./view-item.component.html",
  styleUrls: ["./view-item.component.scss"]
})
export class ViewItemComponent implements OnInit, OnDestroy {
  id: string;
  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(ItemsService) private itemService: ItemsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log("Finding Rock Id:", this.id);
  }

  ngOnDestroy(): void {}
}

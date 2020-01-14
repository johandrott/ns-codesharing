import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public overlay: UIVisualEffectView;

    constructor() {
    }

    ngOnInit() {
    }

    public showOverlay(): void {

      const window = UIApplication.sharedApplication.keyWindow;
      const container = window.bounds;
      const overlay = this.overlay = UIVisualEffectView.alloc().init();

      overlay.frame = CGRectMake(
        container.origin.x,
        container.origin.y,
        container.size.width,
        container.size.height
      );

      overlay.effect = UIBlurEffect.effectWithStyle(UIBlurEffectStyle.ExtraDark);

      window.addSubview(overlay);
      window.bringSubviewToFront(overlay);
  }
}

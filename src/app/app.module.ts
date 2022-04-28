import { BrowserModule } from "@angular/platform-browser";
import { NgModule, enableProdMode } from "@angular/core";
import { environment } from "../environments/environment";

// app
import { AppComponent } from "./app.component";

// components - pages
import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { RegisterItemComponent } from "./pages/register-item/register-item.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ViewItemComponent } from "./pages/view-item/view-item.component";

// components
import { HeaderComponent } from "./components/header/header.component";

// modules
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";

// QRCode - https://www.npmjs.com/package/ng-qrcode
import { QrCodeModule } from "ng-qrcode";

// ZXing Scanner - https://github.com/zxing-js/ngx-scanner https://www.npmjs.com/package/@zxing/ngx-scanner
//               - https://medium.com/swlh/scanning-barcode-or-qr-code-in-an-angular-app-with-zxing-9d3c8dfd5b96
import { ZXingScannerModule } from "@zxing/ngx-scanner";

// Mapbox - https://github.com/Wykks/ngx-mapbox-gl
import { NgxMapboxGLModule } from "ngx-mapbox-gl";

// Angularfire - v13 https://github.com/angular/angularfire
//            - v12 https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

// Dropzone - https://www.npmjs.com/package/ngx-dropzone
import { NgxDropzoneModule } from "ngx-dropzone";

// app mode
if (process.env.NODE_ENV === "production") {
  enableProdMode();
}

const components = [HeaderComponent];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    // firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    // qrcode
    QrCodeModule,
    // zxing scanner
    ZXingScannerModule,
    // mapbox
    NgxMapboxGLModule.withConfig(environment.mapboxConfig),
    // dropzone
    NgxDropzoneModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    RegisterItemComponent,
    PageNotFoundComponent,
    ViewItemComponent,
    ...components
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

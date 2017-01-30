import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { RouterModule} from "@angular/router";

import { ModalModule }  from 'ng2-modal';

import { AppComponent } from './app.component';

import { SpinnerService} from './spinner/spinner.service';
import { SpinnerComponent} from './spinner/spinner.component';

import { AuthService }    from './auth/auth.service';
import { SaveGuard } from "./auth/save-guard.service";

//----------------------------------------------------------------------------------------------

import { DummyComponent } from './dummy/dummy.component';
import { ChatVersionModule,ChatVersionList,ChatVersionDetail} from "./chat-version/chat-version.module";

const ROUTES: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'app',  component: DummyComponent},
    { path: 'chat_version', component: ChatVersionList },
    { path: 'chat_version/:id', component: ChatVersionDetail, canDeactivate: [SaveGuard]},
];

//----------------------------------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    DummyComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),

    ChatVersionModule,
  ],
  providers: [SpinnerService, AuthService, SaveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

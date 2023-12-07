import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HighlightDirective } from './directives/highlight.directive';
import {LoremComponent} from "./test/lorem.component";
import { UnlessDirective } from './directives/unless.directive';
import {MockService} from "./services/mock.service";
import {RouterLink, RouterModule, Routes} from "@angular/router";
import {LoremGuard} from "./guards/lorem.guard";

const routes: Routes = [
  {
    path: 'lorem',
    component: LoremComponent,
  },
  {
    path: 'servers',
    component: ServersComponent,
    canActivate: [LoremGuard],
    canActivateChild: [LoremGuard],
    children: [
      {
        path: 'server',
        component: ServerComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    LoremComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

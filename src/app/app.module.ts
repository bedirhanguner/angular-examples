import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { AlertifyService } from './services/alertify.service';
import { PostFilterPipe } from './post/post-filter.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "posts", component: PostComponent },
  { path: "", redirectTo: "posts", pathMatch: "full" },
  { path: "tests", component: TestCompComponent },
  { path: "posts/:userId", component: PostComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    NavComponent,
    PostComponent,
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})

export class AppModule { }

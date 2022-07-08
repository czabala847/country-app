import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, SidebarComponent, MenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, SidebarComponent, MenuComponent],
})
export class SharedModule {}

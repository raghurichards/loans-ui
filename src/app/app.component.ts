import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'loans-ui';
  href!: string;

  ngOnInit(): void {
    'use strict';

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(() => {
      if (this.href === path) {
        $(this).addClass('active');
      }
    });

    // Toggle the side navigation

    $('#sidebarToggle').on(
      'click',
      function (e: { preventDefault: () => void }) {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      }
    );
  }
}

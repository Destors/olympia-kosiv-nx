import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'olympia-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

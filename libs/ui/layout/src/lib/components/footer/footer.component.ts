import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'olympia-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}

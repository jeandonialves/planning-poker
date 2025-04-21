import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  imports: [RouterModule, NzLayoutModule],
  templateUrl: './game.layout.html',
  styleUrl: './game.layout.scss',
})
export class GameLayout {}

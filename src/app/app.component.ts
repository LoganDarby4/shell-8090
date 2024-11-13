import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, ButtonModule, HighchartsChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Shell 8090';
}

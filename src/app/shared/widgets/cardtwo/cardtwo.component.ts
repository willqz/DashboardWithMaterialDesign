import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-wget-cardtwo',
  templateUrl: './cardtwo.component.html',
  styleUrls: ['./cardtwo.component.css']
})
export class CardtwoComponent implements OnInit {

  constructor() { }

  chartOptions: {};

  Highcharts = Highcharts;

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Situação 2020'
      },
      subtitle: {
          text: null
      },
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Share',
        data: [
            { name: 'OK', y: 60 },
            { name: 'NOK', y: 40 }
        ]
    }]
    };
  }
}

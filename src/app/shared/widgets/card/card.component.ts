import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-wget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  chartOptions: {};

  Highcharts = Highcharts;

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
      },
      title: {
          text: 'Browser',
          align: 'center',
          //verticalAlign: 'middle',
          y: 60
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              dataLabels: {
                  enabled: true,
                  distance: -50,
                  style: {
                      fontWeight: 'bold',
                      color: 'white'
                  }
              },
              startAngle: -90,
              endAngle: 90,
              center: ['50%', '75%'],
              size: '110%'
          }
      },
      series: [{
          type: 'pie',
          name: 'Browser share',
          innerSize: '50%',
          data: [
              ['Chrome', 58.9],
              ['Firefox', 13.29],
              ['Internet Explorer', 13],
              ['Edge', 3.78],
              ['Safari', 3.42],
              {
                  name: 'Other',
                  y: 7.61,
                  dataLabels: {
                      enabled: false
                  }
              }
          ]
      }]
  };





  }
}

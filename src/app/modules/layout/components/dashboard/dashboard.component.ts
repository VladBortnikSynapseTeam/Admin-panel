import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  var chartDom = document.getElementById('graph')!;
  var myChart = echarts.init(chartDom);
  const option = {
    color: [
      "#00B4D8",
      "#EDF0F2"
    ],
    legend: {show: false},
    tooltip: {},
    dataset: {
      dimensions: ['web', 'desktop', 'mobile'],
      source: [
        { web: '1 Aug', 'desktop': 17000, 'mobile': 11000 },
        { web: '2 Aug', 'desktop': 3000, 'mobile': 19500 },
        { web: '3 Aug', 'desktop': 18000, 'mobile': 6000 },
        { web: '4 Aug', 'desktop': 23000, 'mobile': 28000 },
        { web: '5 Aug', 'desktop': 27000, 'mobile': 28000 },
        { web: '6 Aug', 'desktop': 17000, 'mobile': 23000 },
        { web: '6 Аug', 'desktop': 16000, 'mobile': 12000 }
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar', barWidth: 10 }, { type: 'bar', barWidth: 10}]
  };

option && myChart.setOption(option);
  }

}

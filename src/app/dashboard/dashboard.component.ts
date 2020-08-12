import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

 

  constructor() { }

  ngOnInit() {
  }

  date: Date = new Date();

  visitSaleChartData = [
  {
    
    data: [0, 20, 35, 40, 55, 70,79],
    borderWidth: 1,
    fill: false,
  }];

  visitSaleChartLabels = ["12jun", "14jun", "16jun", "18jun", "20jun", "22jun","24jun"];

  visitSaleChartOptions = {
    responsive: true,
    legend: false,
    scales: {
        yAxes: [{
            ticks: {
                display: false,
                min: 0,
                stepSize: 20,
                max: 80
            },
            gridLines: {
              drawBorder: false,
              color: 'rgba(235,237,242,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            }
        }],
        xAxes: [{
            gridLines: {
              display:false,
              drawBorder: false,
              color: 'rgba(0,0,0,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            },
            ticks: {
                padding: 20,
                fontColor: "#9c9fa6",
                autoSkip: true,
            },
            categoryPercentage: 0.4,
            barPercentage: 0.4
        }]
      }
  };

  visitSaleChartColors = [
    {
      backgroundColor: [
        'rgba(52, 110, 235, 1)',
        'rgba(52, 110, 235, 1)',
        'rgba(52, 110, 235, 1)',
        'rgba(52, 110, 235, 1)',
        'rgba(52, 110, 235, 1)',
        'rgba(52, 110, 235, 1)',
      ],
      borderColor: [
        'rgba(52, 110, 235, 1)',
        'rgba(52, 110, 235, 1)',
        'rgba(52, 110, 235, 1)',
        'rgba(52, 110, 235, 1)',
        'rgba(52, 110, 235, 1)',
        'rgba(52, 110, 235, 1)',
      ]
    },
    {
     
    },
    {
      
    },
  ];




  trafficChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: false,
  };

 
}


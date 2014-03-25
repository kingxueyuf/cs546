$(function () {
        $('#container-line').highcharts({
            title: {
                text: 'Monthly Average Salary',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Dollars (k)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tester',
                data: [3.5, 3.5, 3.7, 3.7, 3.8, 3.8, 3.4, 3.5, 4.0, 4.0, 4.1, 4.2]
            }, {
                name: 'Programmer',
                data: [5.5, 5.5, 5.7, 5.7, 5.8, 5.8, 5.4, 5.5, 6.0, 6.0, 6.1, 6.2]
            }, {
                name: 'Manager',
                data: [6.1, 6.6, 6.5, 6.4, 6.5, 7.0, 7.6, 7.9, 7.3, 7.0, 7.9, 7.0]
            }, {
                name: 'Project Leader',
                data: [7.9, 7.2, 7.7, 7.5, 7.9, 7.2, 7.0, 7.6, 8.2, 8.3, 8.6, 8.8]
            }]
        });
    });
    


    $(function () {
    $('#container-pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Position Statistics of Department'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Programmer',   65.0],
                ['Tester',   15.0],
                ['Manager',       10.0],
                {
                    name: 'President',
                    y: 5.0,
                    sliced: true,
                    selected: true
                },
                ['Project Leader',5.0]
            ]
        }]
    });
});
    


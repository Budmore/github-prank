var cal = new CalHeatMap();
/*cal.init({
    itemSelector: '#cal-heatmap',
    domain: 'day',
    range: 5, data: 'datas-years.json',
    start: new Date(2000, 0),
    onClick: function(date, nb) {

        $('#placeholder').html('You just clicked <br/>on <b>' +
            date + '</b> <br/>with <b>' +
            (nb === null ? 'unknown' : nb) + '</b> items'
        );
    }
});

*/

console.log('Yolo', new Date(new Date().setYear(new Date().getFullYear() - 1)));
cal.init({
    start: new Date(new Date().setYear(new Date().getFullYear() - 1)),
    // end: new Date(),
    // start:
    range: 12,
    domain: 'month',
    weekStartOnMonday: false,
    // domainDynamicDimension: true,
    // data: '/api/users/1/annotations/',
    cellSize: 10.5,
    onClick: function(date, nb) {

        $('#placeholder').html('You just clicked <br/>on <b>' +
            date + '</b> <br/>with <b>' +
            (nb === null ? 'unknown' : nb) + '</b> items'
        );
    }
});

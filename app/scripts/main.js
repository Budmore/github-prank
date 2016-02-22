var datas = {
};





var cal = new CalHeatMap();
var yearAgo = new Date(new Date().setYear(new Date().getFullYear() - 1));


cal.init({
    start: yearAgo,
    range: 12,
    domain: 'month',
    weekStartOnMonday: false,
    // domainDynamicDimension: true,
    domainGutter: 0,
    data: datas,
    cellSize: 10.5,
    onClick: function(date, nb) {
        var datum =  Date.parse(date);
        var timestamp =  datum / 1000;

        if (!datas[timestamp]) {
            datas[timestamp] = 0;
        }

        datas[timestamp] += 1;

        $('#js-placeholder').html('You just clicked <br/>on <b>' +
            timestamp + '</b> <br/>with <b>' +
            (nb === null ? 'unknown' : nb) + '</b> items'
        );

        this.update(datas);
    }
});

var email = 'git-art@budmore.pl';
var gitConfig = `git config user.name "Yoko"
&& git config user.email ${email} `;

var init = `&& touch github.art
&& git add . -A `;

function bashGenerator(db) {
    var result = gitConfig + init;

    for (var key in db) {
        if (db.hasOwnProperty(key)) {

            var timestamp = key * 1000;
            var counter = datas[key];

            var date = new Date(timestamp);

            var dd = date.getDate();
            var mm = date.getMonth()+1; //January is 0!
            var yyyy = date.getFullYear();

            if(dd<10){
                dd='0'+dd;
            }
            if(mm<10){
                mm='0'+mm;
            }
            var formatedDate = `${yyyy}.${dd}.${mm}T00:00`;

            result += createCommits(formatedDate, counter);

        }
    }

    return result;
}

function createCommits(date, counter) {
    var string = `&& echo 'a' >> github.art
    && git ci -am 'a' --date ${date} `;
    var result = '';
    for (var i=0; i < counter; i+=1) {
        result += string;
    }

    return result;
}


$('#js-generate').on('click', function() {

    var bashCode = bashGenerator(datas);
    $('#js-placeholder').text(bashCode);

});

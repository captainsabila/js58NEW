/*var config = {
    apiKey: "AIzaSyCL93RJhXbUkFkwhTPzu5Qa7-09q_YIwMo",
    authDomain: "final-project-draft.firebaseapp.com",
    databaseURL: "https://final-project-draft.firebaseio.com",
    projectId: "final-project-draft",
    storageBucket: "final-project-draft.appspot.com",
    messagingSenderId: "53288079429"
};
firebase.initializeApp(config);
var database = firebase.database();
*/
$(function() {
    $("#objectives").on('change', function(event) {
        if ($(this).val === "map") {
            $('#map-bid-type').show();
        } else {
            $('#map-bid-type').hide();
        }

    })
    $("#targeting-types").on('change', function(event) {
        if ($('#interests').is(':checked')) {
            ($('#interest-input').show())
        } else {
            ($('#interest-input').hide())
        }
    })

    $("#btn").on('click', function(event) {
        var startDate = ($('#campaign-start-date').val());
        var endDate = ($('#campaign-end-date').val());
        var dataArrayStart = startDate.split('-');
        var yearStart = dataArrayStart[0];
        var monthStart = dataArrayStart[1] - 1;
        var dayStart = dataArrayStart[2];

        var dataArrayEnd = endDate.split('-');
        var yearEnd = dataArrayEnd[0];
        var monthEnd = dataArrayEnd[1] - 1;
        var dayEnd = dataArrayEnd[2];

        var startDateObject = new Date;
        startDateObject.setMonth(monthStart);
        startDateObject.setDate(dayStart);
        startDateObject.setFullYear(yearStart);

        var endDateObject = new Date;
        endDateObject.setMonth(monthEnd);
        endDateObject.setDate(dayEnd);

        var dayDiff = (endDateObject - startDateObject) / (1000 * 60 * 60 * 24);
        var ioAmount = parseInt($('#io-amount').val());
        var numberCampaigns = parseInt($('#number-of-campaigns').val());
        var dailySpend = ioAmount / dayDiff;
        var dailySpendPerCampaign = dailySpend / numberCampaigns;
        console.log(dayDiff, ioAmount, dailySpendPerCampaign, numberCampaigns)

        console.log('numberCampaigns', numberCampaigns);
        var csvArray = [];
        for (var i = 0; i < numberCampaigns; i++) {
            var campaignID = "new_C" + (i + 1);
            var dailyBudgetCap = dailySpendPerCampaign;
            var row = { campaignID, dailyBudgetCap };
            csvArray.push(row);
        }

        var headers = "campaignID,Daily Budget Cap,Interest, Behaviors\n"
        var csvString = "";
        csvArray.forEach(function(row) {
        	csvString += row.campaignID + ',' + row.dailyBudgetCap + '\n';
        });

        var encodedUri = encodeURI("data:text/csv;charset=utf-8," + headers + csvString);
        window.open(encodedUri);
        // var headers = Object.keys(csvArray[0]);

    })
})
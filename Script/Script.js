$(document).ready(
    function() {
        $('#TopTitleDate').html(function(){
            var currentDate = new Date();
            return currentDate.toLocaleDateString('en-IN',{year:"numeric", month:"long", day:"numeric"});
        });
    }
);
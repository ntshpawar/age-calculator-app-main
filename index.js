
    

function getDateDifference(e) {

    e.preventDefault();
    let day = $('#day').val(); 
    let month = $('#month').val(); 
    let year = $('#year').val(); 
    let current = new Date();
    // Get the current date
    
    function validation()
    {

        let curr_year = current.getFullYear();
    
        if (day == '' || day == null) {
            $('#day-error').html('This field is required');
        }
        else if (day > 31) {
            $('#day-error').html('Must be a valid day');
        }
        else
        {
            $('#day-error').html('');
        }

        if (month == '' || month == null) {
            $('#month-error').html('This field is required');
        }

        else if (month > 12) {
            $('#month-error').html('Must be a valid month');
        }

        else
        {
            $('#month-error').html('');
        }

        if (year == '' || year == null) {
            $('#year-error').html('This field is required');
        }

        else if (year > curr_year) {
            $('#year-error').html('Must be in past');
        }
    
        else
        {
            $('#year-error').html('');
        }

    }

    

    validation()

    
    let error = $('.error').html();
    


    if (error = '') {
      
        // Create the past date object
    let past = new Date(year+'/'+month+'/'+day);
    
    
    // Calculate the time difference in milliseconds
    var timeDiff = current.getTime() - past.getTime();
    
    // Calculate the number of milliseconds in a day, month, and year
    var millisecondsInDay = 1000 * 60 * 60 * 24;
    var millisecondsInMonth = millisecondsInDay * 30.44; // Approximation of average month length
    var millisecondsInYear = millisecondsInDay * 365.25; // Approximation of average year length
    
    // Calculate the number of years
    var years = Math.floor(timeDiff / millisecondsInYear);
    
    // Calculate the remaining milliseconds after removing years
    var remainingMilliseconds = timeDiff % millisecondsInYear;
    
    // Calculate the number of months
    var months = Math.floor(remainingMilliseconds / millisecondsInMonth);
    
    // Calculate the remaining milliseconds after removing months
    remainingMilliseconds = remainingMilliseconds % millisecondsInMonth;
    
    // Calculate the number of days
    var days = Math.floor(remainingMilliseconds / millisecondsInDay);
    
    // Return the result as an object

    // console.log(years, months, days);

    $('#resYears').html(years);
    $('#resMonths').html(months);
    $('#resDays').html(days);

    return {
        years: years,
        months: months,
        days: days
    };
    }

}

 
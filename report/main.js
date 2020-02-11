$("#login-button").click(function(event){
    debugger;
    event.preventDefault();
    let queryId = $("#query-id").text
    $('form').fadeOut(500);
    $.get(
        "https://mrv-sharedfunction-dev.azurewebsites.net/api/CicleTimeReport?queryId="+queryId,
        function(data) {
            $('.wrapper').addClass('form-success');
            window.location.href = data;
        }
    );
}); 

function download()
{
    let queryId = document.getElementById('query-id').value;
    
    window.open('https://mrv-sharedfunction-dev.azurewebsites.net/api/CicleTimeReport?queryId='+queryId);
}
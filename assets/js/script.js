///SEARCH BAR





$(documennt).ready(function(){


    $("#search-form").submit(function(e){
        e.preventDefault()
    })



    function search(){
        $("#results").html("")
        $("#buttons").html("")
    
        ///GET FORM INPUTS
        q = $("#query").val();
    
        ////GET RUN REQUEST ON API
        $.get(
            "https://www.googleapis.com/youtube/v3/search",{
                part: 'snippet, id',
                q: q,
                type: 'video',
                key: "AIzaSyCWqsbZfTuSO4xxIhlOw0a8RM-s7Da6YIA"},
                function(data){
                    var nextPageToken = data.nextPageToken;
                    var prevPageToken = data.prevPageToken;
    
                    console.log(data)
    
                    
                }
        )
    }
})


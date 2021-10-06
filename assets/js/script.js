///SEARCH BAR





$(document).ready(function(){


    $("#search-form").submit(function(e){
        e.preventDefault();
    })
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
                //Log Data
                console.log(data)

                $.each(data.items, function(i, item){
                    ///GET OUTPUT
                    var output = getOutput(item);

                    //Display Results
                    $("#results").append(output)
                })
            }
    )
}

////Build OUTPUT
function getOutput(item){
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;


    ///Build Output
    var output = '<li>' +
    '<div class="list-left">' + 
    '<img src="'+thumb+'">' +
    '</div>' +
    
    '<div class="list-right">' +
    '<h3>'+title+'</h3>' +
    '<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
    '<p>'+description+'</p>' +
    '</div>' +
    '</li>' +


    '<div class="clearfix"></div>' + '';

    return output;

}


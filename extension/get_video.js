/* 2 cases
1) When your viewing an actual video  --> This case is super trivial 

2)  When your looking at a playlist 

Here, what I'm doing is going to get the div id - content to get an array of videos
Then, I'll find the css selectors that denote each individual video

Essentially, I'll be iterating through an array that will allow me to get an array of url videoss



AND 
What I just thought about, is we want to keep information that keeps track of the 
time stamp where we ended a video
*/


function get_single_video() {
    let video_url = window.location.href
    return video_url
}

function get_playlists_videos() {
    
}
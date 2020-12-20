




/* 2 cases
1) When your viewing an actual video  --> This case is super trivial 
   - This needs to be activated (or allowed to be) when the youtube url contains 'watch'. 
For example "youtube.com/watch?************"

2)  When your looking at a playlist 
   - This needs to be activated (or allowed to be) when the youtube url contains 'playlist'.
For example "yotuube.com/playlist?list=WL"


Here, what I'm doing is going to get the div id - content to get an array of videos
Then, I'll find the css selectors that denote each individual video

Essentially, I'll be iterating through an array that will allow me to get an array of url videoss



AND 
What I just thought about, is we want to keep information that keeps track of the 
time stamp where we ended a video

Future implementations:
1) Give user ability to index the videos they want to add to the
playlist

2) Automatically set it up so that a video after being watched through
has the option of being removed from the playlist

3) Potential issues with the time stamp

*/


function get_single_video() {
    let video_url = window.location.href
    return video_url
}

function get_playlists_videos() {
    const selectors = {
        playlist_contents: "#contents",
    }

    let playlist = document.querySelector(selectors.playlist_contents)
    console.log(playlist)






    return -1
}

get_playlists_videos()
console.log("test")


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


class Video{
    constructor() {
        this.title = [];
        this.url = [];
    }
}


function get_single_video() {
    const selectors = {
        title_content: "div[id='info-contents']",
        title: "h1[class='title style-scope ytd-video-primary-info-renderer']"
    }
    vid = new Video();
    let title_vid = document.querySelector(selectors.title).textContent
    console.log(title_vid)
    let video_url = window.location.href

    vid.title.push(title_vid)
    vid.url.push(video_url)
    
    console.log(vid.title)
    console.log(vid.url)

    return vid
}


/*

Input: Start_index and end_index denote the subset of videos the user is storing
Output: Multiple Video objects are created and stored in the chrome database
They contain a url and the title of the video

*/

function get_playlists_videos(start_index, end_index) {
    const selectors = {
        playlist_contents: "#contents",
        video: "[class='yt-simple-endpoint style-scope ytd-playlist-video-renderer']",
        title: "span[id='video-title']"
    }

    let playlist = document.querySelector(selectors.playlist_contents)
    let videos = sel(playlist, selectors.video)
    let titles = sel(playlist, selectors.title)
    console.log(titles)
    console.log(videos)

    for (video of videos) {
        let link = video.getAttribute('href')
        let title_vid = video.querySelector(selectors.title).textContent.trim()

        vid = new Video();
        vid.title.push(title_vid)
        vid.url.push(link)

        console.log(vid.title)
        console.log(vid.url)
    }
    console.log(vid.title)
    console.log(vid.url)

    return vid
}

function sel(em, sel) {
  return Array.prototype.slice.call(em.querySelectorAll(sel));
}


function main() {
    let current_url = String(window.location.href)

    //case 1 - url contains watch
    if (current_url.includes("watch")) {
        get_single_video()
    }

    //case 2 - url contains playlist
    if (current_url.includes("playlist")) {
        get_playlists_videos(start_index, end_index)
    }
}

main()




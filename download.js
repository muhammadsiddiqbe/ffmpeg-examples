// download a video from youtube using ffmpeg and ffprobe
const path = require("path");
const fs = require("fs");

const ytdl = require("ytdl-core");

ytVideoId = "https://www.youtube.com/watch?v=some-video-id";

function downloadFromYoutube() {
  ytdl(ytVideoId, { filter: "audio" }).pipe(
    fs.createWriteStream(
      path.join(__dirname, "./videos/video-from-youtube.mp4")
    )
  );
}

downloadFromYoutube();

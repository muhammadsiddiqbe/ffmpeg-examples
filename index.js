const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const video = path.join(__dirname, "./videos/video.mp4");

// mute audio of video
ffmpeg(video)
  .noAudio()
  .output(path.join(__dirname, "./videos/video-no-audio.mp4"))
  .on("end", () => {
    console.log("done");
  })
  .run();

// change resolution of video
ffmpeg(video)
  .size("320x240")
  .output(path.join(__dirname, "./videos/video-320x240.mp4"))
  .on("end", () => {
    console.log("done");
  })
  .run();

 // change quality of video
ffmpeg(video)
  .outputOptions(["-qscale:v", "8"])
  .output(path.join(__dirname, "./videos/video-qscale-2.mp4"))
  .on("end", () => {
    console.log("done");
  })
  .run();

//change fps of video and compress it
ffmpeg(video)
  .outputOptions(["-r", "15/1"])
  .output(path.join(__dirname, "./videos/video-fps-15.mp4"))
  .on("end", () => {
    console.log("done");
  })
  .run();

// show video info
ffmpeg.ffprobe(video, (err, data) => {
  console.log(data.streams[0]);
});

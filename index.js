const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const path = require("path");

const videoPath = path.join(__dirname, "./videos/video.mp4");
const videoPathFps2 = path.join(__dirname, "./videos/video-fps-2.mp4");

// // mute audio of video
// ffmpeg(videoPath).noAudio().output(path.join(__dirname, './videos/video-no-audio.mp4')).on('end', () => {
//   console.log('done');
// }).run();

// // change resolution of video
// ffmpeg(videoPath).size('320x240').output(path.join(__dirname, './videos/video-320x240.mp4')).on('end', () => {
//   console.log('done');
// }).run();

// save video with different resolution and log time to console how much does it take
// const start = Date.now();
// ffmpeg(videoPath)
//   .size("320x240")
//   .output(path.join(__dirname, "./videos/video-320x240.mp4"))
//   .on("end", () => {
//     console.log(`done in ${Date.now() - start}ms`)
//   })
//   .run();

// // change quality of video
const start = Date.now();
console.log((new Date(start)).toLocaleTimeString());

ffmpeg(videoPath)
  .outputOptions(["-qscale:v", "8"])
  .output(path.join(__dirname, "./videos/video-qscale-2.mp4"))
  .on("end", () => {
    console.log(`done in ${Date.now() - start}ms`);

    console.log("done");
  })
  .run();

// //change fps of video and compress it
// const start = Date.now();
// console.log((new Date(start)).toLocaleTimeString());

// ffmpeg(videoPath).outputOptions(["-r", "15/1"]).output(path.join(__dirname, "./videos/video-fps-15.mp4")).on("end", () => {
//   console.log(`done in ${Date.now() - start}ms`);

// }).run();

// show video info
// ffmpeg.ffprobe(videoPath, (err, data) => {
//   console.log(data.streams[0]);
// } );
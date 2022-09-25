async function setupCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error(
      'Browser API navigator.mediaDevices.getUserMedia not available'
    );
  }

  const videoConfig = {
    audio: false,
    video: {
      facingMode: 'user',
      width: 360,
      height: 270,
      frameRate: {
        ideal: 60,
      },
    },
  };
  const video = document.createElement('video')
  document.appendChild(video)
  video.style.display  = "none"
  const stream = await navigator.mediaDevices.getUserMedia(videoConfig);

  video.srcObject = stream;

  await new Promise((resolve) => {
    this.video.onloadedmetadata = () => {
      resolve(this.video);
    };
  });

  video.play();

  const videoWidth = this.video.videoWidth;
  const videoHeight = this.video.videoHeight;
  // Must set below two lines, otherwise video element doesn't show.
  video.width = videoWidth;
  video.height = videoHeight;

  return video;
}


module.exports = {setupCamera}


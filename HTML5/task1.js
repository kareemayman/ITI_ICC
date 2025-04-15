const vid = document.querySelector('video')
const duration = document.querySelector('.duration')
const time = document.querySelector('.time')
const vidSlider = document.querySelector('#video-slider')

document.addEventListener('click', function(e) {
    if (e.target.matches('#play')) {
        vid.play()
    } else if (e.target.matches('#stop')) {
        vid.pause()
    } else if (e.target.matches('#backward10')) {
        vid.currentTime -= 10
    } else if (e.target.matches('#forward10')) {
        vid.currentTime += 10
    } else if (e.target.matches('#backward5')) {
        vid.currentTime -= 5
    } else if (e.target.matches('#forward5')) {
        vid.currentTime += 5
    } else if (e.target.matches('#mute')) {
        if (vid.muted) {
            vid.muted = false
            e.target.textContent = "Mute"
        } else {
            vid.muted = true
            e.target.textContent = "Unmute"
        }
    }
})

document.addEventListener('change', function(e) {
    if (e.target.matches('#volume')) {
        vid.volume = e.target.value
    } else if (e.target.matches('#speed')) {
        vid.playbackRate = e.target.value
    } else if (e.target.matches('#video-slider')) {
        vid.currentTime = e.target.value
    }
})

vid.addEventListener('timeupdate', function(e) {
    duration.textContent = parseInt(vid.duration / 60)
    duration.textContent += ":" + parseInt(vid.duration % 60)
    time.textContent = parseInt(vid.currentTime / 60)
    time.textContent += ":" + parseInt(vid.currentTime % 60) + " / "
    vidSlider.value = vid.currentTime
    vidSlider.max = vid.duration
    vidSlider.min = 0
})
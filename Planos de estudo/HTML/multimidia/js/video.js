function getVideo() {
    return document.getElementById("video")
}
function play() {
    let video = getVideo()
    video.play()
}
function pause() {
    let video = getVideo()
    video.pause()
}
function stop() {
    let video = getVideo()
    video.load()
}
function volume(vol) {
    let video = getVideo()
    video.volume = (vol / 100)
}
function muted() {
    let video = getVideo()
    let mut = document.getElementById('muted')
    video.muted = video.muted ? false : true
}
function full() {
    let video = getVideo()
    video.webkitEnterFullScreen()
}
getVideo().onplay = () => {
    alert('O nosso video foi iniciado com o play')
}
getVideo().onpause = () => {
    alert('O nosso video foi pausado com o pause')
}
getVideo().onabort = () => {
    alert('O nosso video foi parado com o stop')
}
getVideo().onvolumechange = () => {
    alert('O nosso volume foi alterado')
}
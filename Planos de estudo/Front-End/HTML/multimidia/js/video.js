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
    // alert('O nosso video foi iniciado com o play')
    if (getVideo().currentTime === 0) {
        setStorage("video", {
            desc: ['O nosso video foi iniciado com o play'],
            time: [0],
            volume: [getVideo().volume]
        })
    } else {
        let objVideo = getStorage('video')
        objVideo.desc.push('O nosso video foi iniciado com o play')
        objVideo.time.push(getVideo().currentTime)
        objVideo.volume.push(getVideo().volume)
        setStorage('video', objVideo)
    }
}
getVideo().onpause = () => {
    alert('O nosso video foi pausado com o pause')
    let objVideo = getStorage('video')
    objVideo.desc.push('O nosso video foi pausado com o pause')
    objVideo.time.push(getVideo().currentTime)
    objVideo.volume.push(getVideo().volume)
    setStorage('video', objVideo)
}
getVideo().onabort = () => {
    alert('O nosso video foi parado com o stop')
    let objVideo = getStorage('video')
    objVideo.desc.push('O nosso video foi parado com o stop')
    objVideo.time.push(getVideo().currentTime)
    objVideo.volume.push(getVideo().volume)
    setStorage('video', objVideo)

    let listVideo = getStorage('listVideo')
    if (!listVideo.length) {
        listVideo = []
    }
    listVideo.push(objVideo)
    setStorage('listVideo', listVideo)

}
getVideo().onvolumechange = () => {
    alert('O nosso volume foi alterado')
    let objVideo = getStorage('video')
    objVideo.desc.push('O nosso volume foi alterado')
    objVideo.time.push(getVideo().currentTime)
    objVideo.volume.push(getVideo().volume)
    setStorage('video', objVideo)
}
function setStorage(id, list) {
    localStorage.setItem(id, JSON.stringify(list))
}
function getStorage(id) {
    let storage = localStorage.getItem(id)
    if (storage) {
        return JSON.parse(storage)
    } else {
        return new Object()
    }

}
function setTable(list){
    let table = '<thead><tr><td>...</td><td>Desc</td><td>Time</td><td>Volume</td></tr></thead>'
}
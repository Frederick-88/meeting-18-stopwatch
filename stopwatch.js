// PEMANGGILAN ISI JS KE HTML MADE SIMPLE.

// renderClock = () => {
//     let currentTime = new Date();
//     let tujuan = document.getElementById("clockDisplay")

//     tujuan.innerHTML = currentTime
// }
// renderClock()

// PEMANGGILAN ISI JS KE HTML MADE SIMPLE.


// CLASS IBARAT = FUNCTION SAMPLE
class stopWatchFunction{
    constructor(obj = {}){
        this.start = obj.start
        this.stop = obj.stop
        this.duration = parseInt(obj.stop) - parseInt(obj.start)
    }}

// CONST IBARAT = MENGGUNAKAN FUNCTION / MENJALANKAN FUNCTION --- DENGAN SYARAT OBJECT HARUS SAMA
    const stopWatchku = new stopWatchFunction ({
        start: new Date().toLocaleString("en-US", {timeZone:"Asia/Jakarta", hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true}),
        stop: new Date().toLocaleString("en-US", {timeZone:"Asia/Shanghai", hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true})
    })

    
    // console.log(stopWatchku); ---------- SISTEM CONSOLE LOG

    let displayStart = (`You Started the Stopwatch at ${stopWatchku.start}`)
    let displayStop = (`You Stopped the Stopwatch at ${stopWatchku.stop}`)
    let displayDuration = (`The duration of your StopWatch is ${stopWatchku.duration} HOUR`)

    console.log(displayStart);
    console.log(displayStop);
    console.log(displayDuration);
    
    // SISTEM HTML -----------------
    displayTime = () =>{
    let isiHTML =

        `You Started the Stopwatch at ${stopWatchku.start}
        <br>
        You Stopped the Stopwatch at ${stopWatchku.stop}
        <br>
        The duration of your StopWatch is ${stopWatchku.duration} HOUR
        `
    
    let target = document.getElementById("clockDisplay")

    target.innerHTML = isiHTML
    }
    displayTime()
    
    
    


    // NAMPILIN FUNCTION

// renderClock = () => {
//     let currentTime1 = new Date().toLocaleString("en-US", {timeZone:"Asia/Jakarta", hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true});

//     // let tujuan = document.getElementById("clockDisplay");
//     // let isiHTML = `You Started Stopwatch
//     // at ${currentTime1}`
//     // tujuan.innerHTML = isiHTML;

//     let totalWaktu = (`You Started the Stopwatch at ${currentTime1}`)
//         console.log(totalWaktu);
        
// }

// renderClock2 = () => {
//     let currentTime2 = new Date().toLocaleString("en-US", {timeZone:"Asia/Shanghai", hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true});

//     // let tujuan = document.getElementById("clockDisplay");
//     // let isiHTML = `You Started Stopwatch
//     // at ${currentTime2}`
//     // tujuan.innerHTML = isiHTML;

//     let totalWaktu2 = (`You Started the Stopwatch at ${currentTime2}`)
//         console.log(totalWaktu2);
        
// }

// // hitungDurasi = () => {
// //     renderClock() - renderClock2()
// // }

// renderClock()
// renderClock2()



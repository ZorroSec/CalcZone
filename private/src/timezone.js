const timezone = ()=>{
    let now = new Date()
    let hou = now.getHours()
    let minu = now.getMinutes()
    let seco = now.getSeconds()
    let day = now.toString()
    let min = checkTime(minu)
    let sec = checkTime(seco)
    document.querySelector('footer').innerHTML=`<i>${day}</i>`
    setTimeout('timezone()', 500)
}
const checkTime = (i)=>{
    if(i<=10){
        i = "0" + i
    }
    return i
}
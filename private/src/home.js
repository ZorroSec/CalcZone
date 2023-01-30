const home = ()=>{
    let calcs = document.getElementById('calcs')
    let btn = document.getElementById('btn')
    let calcS = ['Multiply', 'Share', 'Subtration', 'Add']
    if(btn){
        btn.onclick = ()=>{
            calcs.innerHTML=`
            <div class='calc'>
                <button id='btn1'>Multiply</button>
            </div>
            <div class='calc'>
                <button id='btn1'>Share</button>
            </div>
            <div class='calc'>
                <button id='btn1'>Subtration</button>
            </div>
            <div class='calc'>
                <button id='btn1'>Add</button>
            </div>
            <div id='result'></div>
            `
            let btn1 = document.getElementById('btn1')
            let result = document.getElementById('result')
            let n1 = document.getElementById('n1')
            let n2 = document.getElementById('n2')
            let mult = parseInt(n1.value)*parseInt(n2.value)
            let shar = parseInt(n1.value)/parseInt(n2.value)
            let subt = parseInt(n1.value)-parseInt(n2.value)
            let add = parseInt(n1.value)+parseInt(n2.value)
            if(btn1){
                btn1.onclick = ()=>{
                    result.innerHTML=`<h4>${mult}</h4>`
                }
            }
        }
    }
}


export { home }
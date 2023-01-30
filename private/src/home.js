const home = ()=>{
    let calcs = document.getElementById('calcs')
    let btn = document.getElementById('btn')
    let calcS = ['Multiply', 'Share', 'Subtration', 'Add']
    if(btn){
        btn.onclick = ()=>{
            calcs.innerHTML=`
            <div class='calc'>
                <button id='btn1'>Multiply</button>
                <button id='btn2'>Share</button>
                <button id='btn3'>Subtration</button>
                <button id='btn4'>Add</button>
                <button id='btn5'>Tudo</button>
            </div>
            <div id='result'></div>
            `
            let btn1 = document.getElementById('btn1')
            let btn2 = document.getElementById('btn2')
            let btn3 = document.getElementById('btn3')
            let btn4 = document.getElementById('btn4')
            let btn5 = document.getElementById('btn5')
            let result = document.getElementById('result')
            let n1 = document.getElementById('n1')
            let n2 = document.getElementById('n2')
            let n1P = parseInt(n1.value)
            let n2P = parseInt(n2.value)
            if(btn1){
                btn1.onclick = ()=>{
                    result.innerHTML=`<hr><h4>${n1P*n2P}</h4>`
                }
            }
            if(btn2){
                btn2.onclick = ()=>{
                    result.innerHTML=`<hr><h4>${n1P/n2P}</h4>`
                }
            }
            if(btn3){
                btn3.onclick = ()=>{
                    result.innerHTML=`<hr><h4>${n1P-n2P}</h4>`
                }
            }
            if(btn4){
                btn4.onclick = ()=>{
                    result.innerHTML=`<hr><h4>${n1P+n2P}</h4>`
                }
            }
            if(btn5){
                btn5.onclick = ()=>{
                    result.innerHTML=`
                    <hr>
                    <div class='all'>
                        <table>
                            <tr>
                                <th>Multiply</th>
                                <th>Share</th>
                                <th>Subtration</th>
                                <th>Add</th>
                            </tr>
                            <tr>
                                <td>${n1P*n2P}</td>
                                <td>${n1P/n2P}</td>
                                <td>${n1P-n2P}</td>
                                <td>${n1P+n2P}</td>
                            </tr>
                        </table>
                    </div>
                    `
                }
            }
        }
    }
}


export { home }
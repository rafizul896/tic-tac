const box = document.querySelectorAll('.box');
const resetBtn = document.getElementById('resetBtn');

for (const item of box){
    item.addEventListener('click',function(){
        item.innerHTML = 'x';
    })
}

resetBtn.addEventListener('click', function(){
    location.reload()
})
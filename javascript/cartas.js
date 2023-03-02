
window.addEventListener('scroll',function(){
    AnimationScrollAdd()
})
const AnimationScrollAdd = function(){
    const topPage = window.pageYOffset
    const cartas = document.querySelectorAll('.carta')
    let css = window.getComputedStyle(document.getElementById('boxProject'))
    let height = parseInt(css.height.replace('px',''));
    if(topPage >= height/2 && topPage < height*1.5){
        cartas.forEach((el)=>{
            if(el.classList.contains('inativo')){
                el.classList.remove('inativo') 
                el.classList.add('ativo')
            }
        })
    }else{
        cartas.forEach((el)=>{
            if(el.classList.contains('ativo')){
                el.classList.add('inativo')
                el.classList.remove('ativo')
            }
        })
    }
}
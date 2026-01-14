Array.from(document.getElementsByClassName('navbar-opt')).forEach(element => {
    const hoverWindowId=element.id+"-hoverwindow"
    const hoverWindow=document.getElementById(hoverWindowId)
    const parentId=element.id+"-parent"
    const parent=document.getElementById(parentId)
    const show =()=>hoverWindow.style.display="block"
    const hide =()=>hoverWindow.style.display="none"
    element.addEventListener("mouseover",show)
    parent.addEventListener("mouseleave",hide)
    element.addEventListener("click",show)
    document.addEventListener("click",(evt)=>{         
        if (evt.target !== element) {
            hide();
        }
    })
});
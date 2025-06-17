
document.addEventListener("DOMContentLoaded",function(){
    
    const progressBar =  document.querySelectorAll(".progress-bar");
    progressBar.forEach(bar => {
        const target = bar.getAttribute("data-bs-target");
        setTimeout(() => {
            bar.style.width = target + "%";
        },500)
    })






















})
const carousel_container = document.querySelector(".carousel-image-wrapper");
const carousel_images = document.querySelectorAll(".carousel-image-wrapper img");

const prev_btn=document.querySelector("#prev-btn");
const next_btn=document.querySelector("#next-btn");

const radioBtn= document.querySelectorAll(".radioBtn input")
var btn=document.querySelector(".btn");
let counter = 0;

const size= carousel_images[0].clientWidth;
console.log(size);

// carousel_container.style.transform = "translateX(1000px)";


// next_btn.addEventListener("click",carousel_imagesfunction()
//     {
//         carousel_container.style.transition= "transform 1s ease-in-out";
//         carousel_container.style.transform= "translateX(1024)";
    
//     });


    next_btn.addEventListener("click",function(){
        if(counter<=-3)
            {counter=0;}
        else{counter=counter-1;}
        carousel_images.forEach(function(val,ind)
        {
            
            carousel_container.style.transform = "translateX("+ size*counter+"px)";
            carousel_container.style.transition ="transform 0.4s ease-in-out"
            
            console.log(size);
            // alert("it works");
        })
        })


        prev_btn.addEventListener("click",function(){
            if(counter>=0)
            {counter=-3;}
        else{counter=counter+1;}
            carousel_images.forEach(function(val,ind)
            {
                
                carousel_container.style.transform = "translateX("+ size*counter+"px)";
                carousel_container.style.transition ="transform 0.4s ease-in-out"
                
                console.log(size);
                //alert("it works");
            })
            })

// radioBtn.forEach.addEventListener("click",function(ind,val){
    // counter=ind;
    // carousel_container.style.transform = "translateX("+ size*counter+"px)";
    // carousel_container.style.transition ="transform 0.4s ease-in-out"
    // alert("hi");
// })

radioBtn.forEach(function(val,ind){
    val.addEventListener("click",function(){
        counter=ind;
        console.log(ind);
        carousel_container.style.transform = "translateX("+ -size*counter+"px)";
        carousel_container.style.transition ="transform 0.4s ease-in-out";
        document.querySelector(".radioBtn .active").classList.remove("active");
        val.classList.add("active");
        // alert("hi");
    })
})

$(()=>{ 

    let reg = new RegExp("[0-9]","gm")

    $('#dog').val('empty')
 
    // #reasons means textarea
    
    $('#reasons').val('') 

    let i = 0
    
    let arrayImg = [$('#1'),$('#2'),$('#3'),$('#4'),$('#5')]

    let arrayli = [$('#li1'),$('#li2'),$('#li3'),$('#li4'),$('#li5')]

    let names = ["Yakori","Chouchou Bleu","Bichon","Bichon Malt","Timakro"]
    
    let texteChien = $('.dogsNames')

    //  #divPathDog means an image in png (logo)
    
    $('#divPathDog').on("mouseenter", (e)=>{
        
        $("#dogPath > .img-fluid").fadeOut()

        $('#dogPath > .img-fluid').attr('src',"./img/patte-chien-bleu-os.png").fadeIn()
    
    })
   
   $('#text p').css("text-shadow", ".2rem .2rem .3rem")

    texteChien.css({

        "transform" : "translate(36%, -190%)",
        "color" : "white",
        "font-size" : "2em"

    })

    $('form').on("mouseenter",(e)=>{ 
       
        // #reasons means textarea

        $('#reasons').on('keyup',(e)=>{
           console.log(reg.test($("#reasons").val()))
            if($('#reasons').val().length < 15 || reg.test($('#reasons').val()) == true){

                $('#reasons').addClass('border border-danger')

            }else{

                $('#reasons').removeClass('border border-danger')

            }

     })
    
     $('#button').on("click",(e)=>{

        // We verify in first if there is a value inferior to 15 and in second if there is a value equal to 0 and of the same type
  
     if($("#reasons").val().length < 15 || $('#dog').val() === "empty" || reg.test($('#reasons').val()) == true){

        //  we cancel the behavior by default of the form
        
            e.preventDefault()

            // prev() is opposite to next()
            $('#button').prev().text("Vos champs sont invalides").css({

                "font-weight": "bold",
                "color": "red",
                "position": "absolute",
                "transform": "translateX(60%)"

            })
          
         }
        
        // We verify in first if there is a value superior or equal to 15 and in second if there is different value to 0

    if($("#reasons").val().length >= 15 && $('#dog').val() !== "empty" && reg.test($('#reasons').val()) == false){

            //  We hide the form
             
             $('form').hide()

             // We add a text

             $('#form').text("Votre formulaire est enregistré").css({

                   "font-weight": "bold",
                   "display": "flex",
                   "justify-content": "center"
                                    
                })
            
            }

        }) 

        // we verify the option selected before sent data
        
        if($('#dog').val() === "empty"){

        
            $('#dog').addClass('border border-danger')

        }else{

            $('#dog').removeClass('border border-danger')

        } 
        
        // we verify the textarea value before sent data

        if($('#reasons').val().length === 0){

            $('#reasons').addClass('border border-danger')

        }
        
        if($('#reasons').val().length >= 15)
        {

            $('#reasons').removeClass('border border-danger')

        }

    })

    $('.carousel-control-next').on('click', (e)=>{
   
    switch(i){
        
        case 0 : arrayImg[0].removeClass('active')
        arrayli[0].removeClass('active')
        arrayImg[1].addClass('active')
        arrayli[1].addClass('active')
        texteChien.text(names[1])      
        i++
        break
        case 1 : arrayImg[1].removeClass('active')
        arrayli[1].removeClass('active')
        arrayImg[2].addClass('active')
        arrayli[2].addClass('active')
        texteChien.text(names[2]) 
        i++
        break
        case 2 : arrayImg[2].removeClass('active')
        arrayli[2].removeClass('active')
        arrayImg[3].addClass('active')
        arrayli[3].addClass('active')
        texteChien.text(names[3]) 
        i++
        break
        case 3 : arrayImg[3].removeClass('active')
        arrayli[3].removeClass('active')
        arrayImg[4].addClass('active')
        arrayli[4].addClass('active')
        texteChien.text(names[4]) 
        i++
        break
        case 4 : arrayImg[4].removeClass('active')
        arrayli[4].removeClass('active')
        arrayImg[0].addClass('active')
        arrayli[0].addClass('active')
        texteChien.text(names[0]) 
        i -= 4
        break
   
   }
})

$('.carousel-control-prev').on('click', function(){

    switch(i){
     
     case 0 : 
     arrayImg[0].removeClass('active')
     arrayli[0].removeClass('active')
     arrayImg[4].addClass('active')
     arrayli[4].addClass('active')
     texteChien.text(names[4]) 
     i += 4
     break
     case 4 : arrayImg[4].removeClass('active')
     arrayli[4].removeClass('active')
     arrayImg[3].addClass('active')
     arrayli[3].addClass('active')
     texteChien.text(names[3]) 
     i--
     break
     case 3 : arrayImg[3].removeClass('active')
     arrayli[3].removeClass('active')
     arrayImg[2].addClass('active')
     arrayli[2].addClass('active')
     texteChien.text(names[2]) 
     i--
     break
     case 2 : arrayImg[2].removeClass('active')
     arrayli[2].removeClass('active')
     arrayImg[1].addClass('active')
     arrayli[1].addClass('active')
     texteChien.text(names[1]) 
     i--
     break
     case 1 : arrayImg[1].removeClass('active')
     arrayli[1].removeClass('active')
     arrayImg[0].addClass('active')
     arrayli[0].addClass('active')
     texteChien.text(names[0]) 
     i--
     break
    
    }

})

$('#li1').on('click', (e)=>{

    switch(i){

        case 1 : arrayImg[1].removeClass('active')
        arrayli[1].removeClass('active')
        arrayImg[0].addClass('active')
        arrayli[0].addClass('active')
        texteChien.text(names[0]) 
        i--
        break
        case 2 : arrayImg[2].removeClass('active')
        arrayli[2].removeClass('active')
        arrayImg[0].addClass('active')
        arrayli[0].addClass('active')
        texteChien.text(names[0]) 
        i -= 2
        break
        case 3 : arrayImg[3].removeClass('active')
        arrayli[3].removeClass('active')
        arrayImg[0].addClass('active')
        arrayli[0].addClass('active')
        texteChien.text(names[0]) 
        i -= 3
        break
        case 4 : arrayImg[4].removeClass('active')
        arrayli[4].removeClass('active')
        arrayImg[0].addClass('active')
        arrayli[0].addClass('active')
        texteChien.text(names[0]) 
        i -= 4
        break

    }

})

$('#li2').on('click', (e)=>{

    switch(i){

        case 0 : arrayImg[0].removeClass('active')
        arrayli[0].removeClass('active')
        arrayImg[1].addClass('active')
        arrayli[1].addClass('active')
        texteChien.text(names[1]) 
        i++
        break
        case 2 : arrayImg[2].removeClass('active')
        arrayli[2].removeClass('active')
        arrayImg[1].addClass('active')
        arrayli[1].addClass('active')
        texteChien.text(names[1]) 
        i--
        break
        case 3 : arrayImg[3].removeClass('active')
        arrayli[3].removeClass('active')
        arrayImg[1].addClass('active')
        arrayli[1].addClass('active')
        texteChien.text(names[1]) 
        i -= 2
        break
        case 4 : arrayImg[4].removeClass('active')
        arrayli[4].removeClass('active')
        arrayImg[1].addClass('active')
        arrayli[1].addClass('active')
        texteChien.text(names[1]) 
        i -= 3
        break
    
    }

})

$('#li3').on('click', (e)=>{

    switch(i){

        case 0 : arrayImg[0].removeClass('active')
        arrayli[0].removeClass('active')
        arrayImg[2].addClass('active')
        arrayli[2].addClass('active')
        texteChien.text(names[2]) 
        i += 2
        break
        case 1 : arrayImg[1].removeClass('active')
        arrayli[1].removeClass('active')
        arrayImg[2].addClass('active')
        arrayli[2].addClass('active')
        texteChien.text(names[2]) 
        i++
        break
        case 3 : arrayImg[3].removeClass('active')
        arrayli[3].removeClass('active')
        arrayImg[2].addClass('active')
        arrayli[2].addClass('active')
        texteChien.text(names[2]) 
        i--
        break
        case 4 : arrayImg[4].removeClass('active')
        arrayli[4].removeClass('active')
        arrayImg[2].addClass('active')
        arrayli[2].addClass('active')
        texteChien.text(names[2]) 
        i -= 2
        break

    }

})

$('#li4').on('click', (e)=>{

    switch(i){

        case 0 : arrayImg[0].removeClass('active')
        arrayli[0].removeClass('active')
        arrayImg[3].addClass('active')
        arrayli[3].addClass('active')
        texteChien.text(names[3])
        i += 3
        break
        case 1 : arrayImg[1].removeClass('active')
        arrayli[1].removeClass('active')
        arrayImg[3].addClass('active')
        arrayli[3].addClass('active')
        texteChien.text(names[3]) 
        i += 2
        break
        case 2 : arrayImg[2].removeClass('active')
        arrayli[2].removeClass('active')
        arrayImg[3].addClass('active')
        arrayli[3].addClass('active')
        texteChien.text(names[3]) 
        i++
        break
        case 4 : arrayImg[4].removeClass('active')
        arrayli[4].removeClass('active')
        arrayImg[3].addClass('active')
        arrayli[3].addClass('active')
        texteChien.text(names[3]) 
        i--
        break

    }

})

$('#li5').on('click', (e)=>{

    switch(i){

        case 0 : arrayImg[0].removeClass('active')
        arrayli[0].removeClass('active')
        arrayImg[4].addClass('active')
        arrayli[4].addClass('active')
        texteChien.text(names[4]) 
        i += 4
        break
        case 1 : arrayImg[1].removeClass('active')
        arrayli[1].removeClass('active')
        arrayImg[4].addClass('active')
        arrayli[4].addClass('active')
        texteChien.text(names[4]) 
        i += 3
        break
        case 2 : arrayImg[2].removeClass('active')
        arrayli[2].removeClass('active')
        arrayImg[4].addClass('active')
        arrayli[4].addClass('active')
        texteChien.text(names[4]) 
        i += 2
        break
        case 3 : arrayImg[3].removeClass('active')
        arrayli[3].removeClass('active')
        arrayImg[4].addClass('active')
        arrayli[4].addClass('active')
        texteChien.text(names[4]) 
        i++
        break

    }

})

})  

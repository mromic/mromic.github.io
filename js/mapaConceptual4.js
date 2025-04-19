
    
            	        
  
  
  

    // ultima modificacion 6 de mayo de 2021	
        // soy hotspot 13:15
    // SCALING OPTIONS
    // scaling can have values as follows with full being the default
    // "fit"	sets canvas and stage to dimensions and scales to fit inside window size
    // "outside"	sets canvas and stage to dimensions and scales to fit outside window size
    // "full"	sets stage to window size with no scaling
    // "tagID"	add canvas to HTML tag of ID - set to dimensions if provided - no scaling
   export function mapaConceptual(){
    var scaling = "fit"; // this will resize to fit inside the screen dimensions
    var width = 1000;
    var height = 800;
    var color = dark; // or any HTML color such as "violet" or "#333333"
    var outerColor = light;
    
    //const frame = new Frame({assets:{id:"special", src:"http://romiserver.work/assets/anat_mic_tgi.PNG", noCORSonImage:true}});
    //const frame = new Frame({assets:"http://romiserver.work/assets/anat_mic_tgi.PNG"});
    // si corro este desde local me da este error.
    //Access to XMLHttpRequest at 'http://romiserver.work/assets/anat_mic_tgi.PNG' from origin 
    //'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    //var frame = new Frame(scaling, width, height, color, outerColor, assets, path,  waiter);
    
    window.addEventListener("DOMContentLoaded", function(e) {
    const frame = new Frame(scaling,width,height,color,outerColor,"sdMapaConceptual.jpg", "img/");
    
    
    frame.on("ready", () => {
        var stage = frame.stage;
        var stageW = frame.width;
        var stageH = frame.height;
        frame.canvas.style.position = "absolute";
        frame.canvas.style.zIndex = -1;
       
    
       var imagen= asset("sdMapaConceptual.jpg").centerReg().mov(0, -40);
    
        
    
        // used these to determine rectangle for vertical DAN ZEN logo (hit P for pixels)
         new Grid(stage).addTo();
        
        
    
    
    
    
    
        // 2. add them to a HotSpots() object
        var hs = new HotSpots([
            // 3. pass in a callback function for each spot
            //{page:stage, rect:[141,71,700,550], call:function(){zgo("https://es.wikipedia.org/wiki/Aparato_digestivo", "_blank");}},
            {page:stage, rect:[621,331,43,17], call:function() {despliega("Boca");}},
            
    
    
    
            
        ]);
      
        var resultado;

  
var concepts= [{"id":"1","concept":"Boca","img":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg", "info":"Bla bla bla........"}];

      
      
        // almacena el string del concepto pulsado en el localStorage
      function despliega(concepto){
        localStorage.setItem("concepto", concepto);
        const myModal = document.getElementById('exampleModal1');
        const modal = new bootstrap.Modal(myModal)
        modal.show()

        // select items
        const img = document.getElementById("img");
        const concept = document.getElementById("concept");
        const info = document.getElementById("info");
        const div = document.getElementById("video"); 

        div.innerHTML = "<iframe width='560'height='315' src='https://www.youtube.com/embed/9BDXskAqPcA' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"; // Interpreta el HTML


        // show concept based on item
        concepto =localStorage.getItem("concepto");
        // crear una instancia del objeto Modal y abrir el modal

        currentItem =buscar("concepto", concepto);
  
  
        img.src = currentItem.img;
        concept.textContent = currentItem.concept;
  
         info.textContent = currentItem.info;
 
        
      }
        
      
        // 5. show() the HotSpots if you want to (will show rectangles only - not objects)
        // hs.show(); // a little hard to see in this case - but play around with position to test
    
    
    var title = "Sistema Digestivo";
    var label = new Label(title, 30, null, "#666").pos(20, 20);
    
    function buscar(concept, value){
 
            resultado =  concepts.findBy('concept', value);
 
 
             return resultado;
}
Array.prototype.findBy = function (column, value) {
for (var i=0; i<this.length; i++) {
    var object = this[i];
    if (column in object && object[column] === value) {
        return object;
    }
}

} 
    
        stage.update();
    }); //fin de ready
    }); // end of dom loaded
  }
    
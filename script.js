 
        // czas poczatkowy
        var start = new Date().getTime();

        // tworzy shape
            function makeShapeAppear() {

                var top = Math.random() * 400;
                var left = Math.random() * 400;
                var width = (Math.random() * 200)+20;
                
                if (Math.random() > 0.5) {
                    document.getElementById("shape").style.borderRadius="50%";
                }
                else
                {
                    document.getElementById("shape").style.borderRadius="0";
                }
                //var height = Math.random() * (30,300);
                //document.getElementById("shape").style.height = height + "px";

                document.getElementById("shape").style.backgroundColor = getRandomColor();
                
                document.getElementById("shape").style.width = width + "px";

                document.getElementById("shape").style.height = width + "px";

                document.getElementById("shape").style.top = top + "px";

                document.getElementById("shape").style.left = left + "px";
                
                document.getElementById("shape").style.display = "block";

                start = new Date().getTime(); 

            }
        // losowy kolor
            function getRandomColor() {
                var allowable = "0123456789abcdef";
                var color = "#"
                for (var i=0; i<6; i++)
                {
                    color += allowable[Math.floor(Math.random() * 16)];
                }
                return color;
            }

        // opoznienie w milisekundach
            function appearAfterDelay() {

            setTimeout(makeShapeAppear, Math.random() * 2000);

            }
        // wywolanie metody(funkcji)
            appearAfterDelay();

        // obsluga znikania ksztaltow
            document.getElementById("shape").onclick = function() {

                document.getElementById("shape").style.display = "none";

                var end = new Date().getTime();

                var timeTaken = (end - start) / 1000;

                document.getElementById("time").innerHTML = (timeTaken) + "s";

                start = new Date().getTime();

                appearAfterDelay();
    
            }
        
        

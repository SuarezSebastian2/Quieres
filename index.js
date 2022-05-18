
        function accionParaCuandoEllaDigaQueSi(){
            alert('Que linda ahora ya somos novios ❤️ Jaja, sabia que ibas a decir que si UwU');
        }

        function mueveElBoton(){
            width = window.innerWidth;
            height = window.innerHeight;

            newWidth = (Math.random() * width);
            newHeight = (Math.random() * height);

            document.getElementById('btnNo').style.position = "absolute";
            document.getElementById('btnNo').style.left = newWidth + "px";
            document.getElementById('btnNo').style.top = newHeight + "px";
            

        }
        // Seu código JavaScript aqui
        window.onload = function() {
            console.log("A página foi carregada!");
            
            // Exemplo: mudar a cor do título quando o mouse passar por cima
            document.querySelector('h1').addEventListener('mouseover', function() {
                this.style.color = 'white';
                this.style.background='#E07424';
            });
            document.querySelector('h1').addEventListener('mouseout', function() {
                this.style.color = '#E07424';
                this.style.background='black';
                
            });
        };   
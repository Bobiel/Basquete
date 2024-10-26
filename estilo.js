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
        let list = document.querySelectorAll('.item')
        let next = document.getElementById('next')
        let prev = document.getElementById('prev')
        
        let count = list.length
        let active = 0
        
        next.onclick = () => {
          let activeOld =document.querySelector('.active')
          activeOld.classList.remove('active')
          
          active = active >= count-1 ? 0 : active +1
          list[active].classList.add('active')
        
        }
        
        prev.onclick = () => {
          let activeOld =document.querySelector('.active')
          activeOld.classList.remove('active')
          
          active = active <= 0 ? count-1 : active-1
          list[active].classList.add('active')
        
        }
        function menuShow() {
          let menuMobile = document.querySelector(".mobile-menu");
          if (menuMobile.classList.contains("open")) {
            menuMobile.classList.remove("open");
          } else {
            menuMobile.classList.add("open");
          }
        }
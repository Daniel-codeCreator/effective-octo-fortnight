let noButtonClickCount = 0
let noButtonState = 0

//muestra el primer gif
document.getElementById('gifContainer').style.display = 'block'
//oculta los demas gif y muestra 
document.getElementById('siBtn').addEventListener('click', function () {
    document.querySelectorAll('.sadGifContainer, .sadGifContainer2, .sadGifContainer3').forEach(el => el.style.display = 'none')
    document.getElementById('gifContainer').style.display = 'none'
    document.querySelector('.happyGifContainer').style.display = 'block'

    // Ocultar los botones "Pregunta Sí" y "No"
    document.getElementById('question').style.display = 'none'
    document.getElementById('siBtn').style.display = 'none'
    document.body.classList.add('bg-green')
    document.getElementById('noBtn').style.display = 'none'

    //muestra el mensaje especifico
    document.getElementById('messageContainer').style.display = 'block'
    document.getElementById('messageContainer').innerHTML = 'EL DIBUUUU'

    setTimeout(function () {
        document.querySelector('.happyGifContainer').style.display = 'none'
        document.querySelector('.happyGifContainer4').style.display = 'block'
    }, 1000)

    setTimeout(function () {
        document.querySelector('.happyGifContainer4').style.display = 'none'
        document.querySelector('.happyGifContainer').style.display = 'block'
    }, 2000)
})

document.getElementById('noBtn').addEventListener('click', function () {
    switch (noButtonState) {
        case 0:

            document.querySelectorAll('.happyGifContainer,.happyGifContainer4').forEach(el => el.style.display = 'none')
            document.getElementById('gifContainer').style.display = 'none'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('noBtn').innerHTML = '¡Oh no! Estas Segura?'
            document.getElementById('noBtn').style.backgroundColor = '#F1330A'

            document.getElementById('siBtn').style.fontSize = '40px'
            document.getElementById('siBtn').style.padding = 'px 40px'

            noButtonState++
            break

        case 1 :

            document.getElementById('noBtn').innerHTML = 'Estas completamente segura?'
            document.getElementById('noBtn').style.backgroundColor = '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '50px'
            document.getElementById('siBtn').style.padding = '40px 50px'

            noButtonState++
            break
        
        case 2:
            
            document.getElementById('noBtn').innerHTML = 'Pero segura segura?'
            document.getElementById('noBtn').style.backgroundColor= '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '60px'
            document.getElementById('siBtn').style.padding = '50px 60px'

            noButtonState++
            break

        case 3:

            document.getElementById('noBtn').innerHTML = 'Por favor?'
            document.getElementById('noBtn').style.backgroundColor= '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '70px'
            document.getElementById('siBtn').style.padding = '60px 70px'

            noButtonState++
            break

        case 4:

            document.getElementById('noBtn').innerHTML = 'Por favor por favor?'
            document.getElementById('noBtn').style.backgroundColor= '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '80px'
            document.getElementById('siBtn').style.padding = '70px 80px'

            noButtonState++
            break
        
        case 5:

            document.getElementById('noBtn').innerHTML = 'Andale perdoname'
            document.getElementById('noBtn').style.backgroundColor= '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '90px'
            document.getElementById('siBtn').style.padding = '80px 90px'

            noButtonState++
            break

        case 6:

            document.getElementById('noBtn').innerHTML = 'Deja de dar click aqui'
            document.getElementById('noBtn').style.backgroundColor= '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '100px'
            document.getElementById('siBtn').style.padding = '90px 100px'

            noButtonState++
            break
        
        case 7:

            document.getElementById('noBtn').innerHTML = 'Ya perdoname!!!!!'
            document.getElementById('noBtn').style.backgroundColor= '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '110px'
            document.getElementById('siBtn').style.padding = '100px 110px'

            noButtonState++
            break

        case 8:

            document.getElementById('noBtn').innerHTML = 'No puedes decir que no'
            document.getElementById('noBtn').style.backgroundColor= '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '110px'
            document.getElementById('siBtn').style.padding = '100px 110px'   
            
            noButtonState++
            break

        case 9:

            document.getElementById('noBtn').innerHTML = 'añañe amorcito'
            document.getElementById('noBtn').style.backgroundColor= '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '120px'
            document.getElementById('siBtn').style.padding = '110px 120px' 

            noButtonState++
            break
            
        case 10:

            document.getElementById('noBtn').innerHTML = 'añañe amor chi'
            document.getElementById('noBtn').style.backgroundColor= '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '130px'
            document.getElementById('siBtn').style.padding = '120x 130px' 

            noButtonState++
            break

        case 11:

            document.getElementById('noBtn').innerHTML = 'añañe amor chi'
            document.getElementById('noBtn').style.backgroundColor= '#F1330A'
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '150px'
            document.getElementById('siBtn').style.padding = '140x 150px' 

            noButtonState++
            break

        case 12:

            document.getElementById('noBtn').innerHTML = 'Si dices que no, estaré muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block' 
 
            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '150px 160px';

            noButtonState++;
            break;
                
        case 13:

            document.getElementById('noBtn').innerHTML = 'Si dices que no, estaré muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block'
    
            document.getElementById('siBtn').style.fontSize = '170px';
            document.getElementById('siBtn').style.padding = '160px 170px';

            noButtonState++;
            break;

        case 14:

            document.getElementById('noBtn').innerHTML = 'Estás rompiendo mi corazón :(';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block'
          
            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';

            noButtonState++;
            break;

        case 15:

            document.getElementById('noBtn').innerHTML = 'NO... ya di que sí';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block'

            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';
   
            document.getElementById('siBtn').style.fontSize = '260px';
                
            noButtonState++;
            break;

        case 16:

            document.getElementById('noBtn').innerHTML = 'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block'
            
            document.getElementById('siBtn').style.fontSize = '280px';
            document.getElementById('siBtn').style.padding = '170px 280px';

            noButtonState++;
            break;

        case 17:

            document.getElementById('noBtn').innerHTML = 'Por favor di que sí';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '290px'
            document.getElementById('siBtn').style.padding = '180px 290px'

            noButtonState++;
            break;
    
        case 18:

            document.getElementById('noBtn').innerHTML = 'No me hagas esto :(';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '300px'
            document.getElementById('siBtn').style.padding = '190px 300px'

            noButtonState++;
            break;
    
        case 19:

            document.getElementById('noBtn').innerHTML = 'Estoy triste...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '310px'
            document.getElementById('siBtn').style.padding = '200px 310px'

            noButtonState++;
            break;
    
        case 20:

            document.getElementById('noBtn').innerHTML = 'Por favor reconsidera';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '320px'
            document.getElementById('siBtn').style.padding = '210px 310px'

            noButtonState++;
            break;
    
        case 21:

            document.getElementById('noBtn').innerHTML = 'Mi corazón se rompe';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '330px'
            document.getElementById('siBtn').style.padding = '220px 330px'

            noButtonState++;
            break;
    
        case 22:

            document.getElementById('noBtn').innerHTML = 'No podré soportarlo';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block';
            
            document.getElementById('siBtn').style.fontSize = '340px'
            document.getElementById('siBtn').style.padding = '230px 340px'

            noButtonState++;
            break;
    
        case 23:

            document.getElementById('noBtn').innerHTML = 'Estoy muy triste...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '350px'
            document.getElementById('siBtn').style.padding = '240px 350px'

            noButtonState++;
            break;
    
        case 24:

            document.getElementById('noBtn').innerHTML = 'Solo di que sí';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '360px'
            document.getElementById('siBtn').style.padding = '250px 360px'

            noButtonState++;
            break;
    
        case 25:

            document.getElementById('noBtn').innerHTML = 'Hazlo por mí';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.querySelector('.sadGifContainer2').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '370px'
            document.getElementById('siBtn').style.padding = '260px 370px'

            noButtonState++;
            break;
        
    }
})

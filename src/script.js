const myImage = new Image();
myImage.src = ' data:image/jpeg;base64,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zzzzzzzzzzzzzyyABCTzzxhCBCTzzzzzzzzzzzzzzzzzzzzwgADDxAAAAADjzzzzzzzzzzzzzzzzzzzzggAAhyxwAAABjzzzzzzzzzzzzzzzzzzzzwAAgSzxjQQCRzzzzzzzzzzzzzzzywzjzzjgBihNHgDQzDDjSwzTzzzzzzzzzzzzzTzyADABOGeAARzyjjzzzzzzzzzzzzzzzwjTxgAAgc54ABDjiRzzzzzzzzzzzzzzzzzxzgAABNXwnIABTBTzzzzzzzzzzzzzzzzzwxgAAD6j74wAADTzzzzzzzzzzzzzzzzzzzywAACRb77r8AAjzzzzzzzzzzzzzzzzzzzzQAC8oL75CcADTzzzzzzzzzzzzzzzzzzzwAAAyf777gAABDzzzzzzzzzzzzzzzzzzyQABCPb7755EAADTzzzzzzzzzzzzzzzzywgADs1z777ksAACTTzzzzzzzzzzzzzzzhAAABCN375YGAAAADTzzzzzzzzzzzzzzzSAAAAD/wD++rnAAAAAQ8888888888884wwoAMwIAURIX+8w0QMoA808888888888ssMMMMcgAEMMBscQ8gEMMsMM8888888888888888YIE0888EMk088888888888888888888888EQQ8888k0c88888888888888888888888wAk088gAEU88888888888888888888o4wAAsc88gAAQw88888888888888888888gMMM8888YkY488888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//xAAjEQEAAQQCAQUBAQAAAAAAAAABABEhMUAQQSBQUWFxkLHR/9oACAEDAQE/EPzEL2JSzR9AUUdjBCOM77syMEjldiwrMwJdfW8DGq8w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';
myImage.addEventListener('load',function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
    canvas.width = 1920;
    canvas.height = 1080;


    ctx.drawImage(myImage, 0,0, canvas.width, canvas.height);

    const pixels = ctx.getImageData(0,0, canvas.width, canvas.height);
    ctx.clearRect(0,0,canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 7500;

    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++){
        let row = [];
        for(let x = 0; x < canvas.width; x++){
            const red = pixels.data[(y * 4* pixels.width) + (x*4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 +1)];
            const blue = pixels.data[(y *4 * pixels.width) +( x*4 +2)];
            const color = 'rgb(' + red +',' + green + ',' + blue + ')';
            const brightness = calculateRelativeBrightness(red,green,blue);
            const cell = [cellColor = color,cellBrightness = brightness,];
            row.push(cell);
        }
        mappedImage.push(row);
    }
     function calculateRelativeBrightness(red,green,blue){
         return Math.sqrt(
             (red *red) * 0.299 +
             (green * green)* 0.387 +
             (blue * blue) *0.114)/100;
     }

    
    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 2;
            this.size = Math.random() * 1.3 + .5;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }
        update(){
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mappedImage[this.position1][this.position2][1];
            let movement = (2.5 - this.speed) + this.velocity;

            this.y += movement;
            if (this.y >= canvas.height){
                this.y =0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw(){
            ctx.globalAlpha =1;//luminosidad + color
            ctx.beginPath();
            ctx.fillStyle = mappedImage[this.position1][this.position2][0];;
            //ctx.fillStyle = 'white';
            ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
            ctx.fill();
        }
    }
    function init(){
        for(let i = 0; i< numberOfParticles; i++){
            particlesArray.push(new Particle);
        }
    }
    init();
    function animate(){
        // ctx.drawImage(myImage,0,0, canvas.width, canvas.height)
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0,0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for(let i =0; i < particlesArray.length; i++){
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 5;
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
});


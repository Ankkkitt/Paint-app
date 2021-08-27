window.addEventListener('load', () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    let clearbtn = document.getElementById("clear");;
    ctx.width = window.innerWidth;
    let painting = false;           // to know we should draw or not

    function startPosition(){
        painting = true;
    }
    function finishPosition(){
        painting = false;
        ctx.beginPath();
    }


    function draw(e){
        if(!painting) return; //

        ctx.lineWidth = document.getElementById('size').value;
        ctx.lineCap = 'round';   // it will make just round like line
        ctx.strokeStyle = document.getElementById('colors').value;
        ctx.lineTo(e.offsetX, e.offsetY);  // mouseposition of mouse
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }
    
    function clearCanvas(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    // Eventlisteners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishPosition);
    canvas.addEventListener('mousemove', draw);
    clearbtn.addEventListener('click', clearCanvas);

})



// Resizing the
    
    // ctx.fillRect(50, 50, 200, 200);          // x, y, width, height

    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 5;
    // ctx.strokeRect(100, 100, 200, 200);    // x, y, width, height
    // ctx.strokeStyle = 'blue';
    // ctx.strokeRect(200, 200, 200, 200);

    // ctx.beginPath(); nt
    // ctx.lineTo(200, 100);       // width, height
    // ctx.lineTo(200, 150);       // width, height
    // ctx.closePath();            // it will simple close the diagram.
    // ctx.stroke();               // to show it on canvas.

    // variables for
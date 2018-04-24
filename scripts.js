document.addEventListener('DOMContentLoaded', function () {
    // A button that create black squares when clicked
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.className = 'button';
    button.appendChild(btnText);
    document.body.appendChild(button);

    let id = 0;

    button.addEventListener('click', function () {
        let div = document.createElement('div');
        div.className = 'square';
        id++;
        div.id = id;
        let p = document.createElement('p');
        let text = document.createTextNode(id);
        p.appendChild(text);
        div.appendChild(p);
        p.className = 'squareText';
        p.style.opacity = '0';
        document.body.appendChild(div);

        p.addEventListener('mouseenter', hover);

        function hover() {
            p.style.opacity = '1';
        }

        p.addEventListener('mouseleave', noHover);

        function noHover() {
            p.style.opacity = ('0');
        }

        //Random colors for the squares
        let colors = ['silver', 'red', 'teal', 'blue', 'limegreen', 'gold', 'pink'];

        //Changes the squares to a random color when clicked
        div.addEventListener('click', function () {
            let randomColor = Math.floor(Math.random() * colors.length);
            div.style.backgroundColor = colors[randomColor];
        })

        div.addEventListener('dblclick', divDoubleClick); 
        function divDoubleClick() {
            if (div.id % 2 == 0) {
              let squareId = parseInt(div.id) + 1;
              let square = document.getElementById(squareId);
              if (square == null) {
                  alert('This is not the square you are looking for');
              } else {
                    square.parentNode.removeChild(square);
              } 
        }   else {
            let squareId = parseInt(div.id) - 1;
            let square = document.getElementById(squareId);
            if(square == null) {
                alert('No, no, Mr. Square no here...');
            } else {
                square.parentNode.removeChild(square);
            }
        }
    }

    })

})
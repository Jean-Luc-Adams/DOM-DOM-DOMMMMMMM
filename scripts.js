document.addEventListener('DOMContentLoaded', function () {
    // A button that create black squares when clicked
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.className = 'button';
    button.appendChild(btnText);
    document.body.appendChild(button);

    let id = 0;

    button.addEventListener('click', function(){
        let div = document.createElement('div');
        div.className = 'square';
        id++;
        let p = document.createElement('p');
        let text = document.createTextNode(id);
        p.appendChild(text);
        div.appendChild(p);
        p.className = 'squareText';
        p.style.opacity = '0';
        document.body.appendChild(div);

        p.addEventListener('mouseenter', hover);
        function hover() {
            p.style.opacity= '1';
        }

        p.addEventListener('mouseleave', noHover);
        function noHover() {
            p.style.opacity=('0');
        }
            
    })
    
})
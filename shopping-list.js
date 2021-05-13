const list = document.querySelector('ul');
          const input = document.querySelector('input');
          const btn = document.getElementById('btn');
          btn.onclick = response;

          function response(e) {
                let dane = document.getElementById('item').value;
                document.getElementById('item').value = '';

                const element = document.createElement('li');
                element.className="list-group-item";
                element.style.padding='0px 0px 0px 10px';
                
                const sp = document.createElement('span');
                const btn2 = document.createElement('button');
                btn2.className="btn btn-primary";
                btn2.id="btn2";
                btn2.style.float='right';
                btn2.style.borderBottomLeftRadius='0';
                btn2.style.borderTopLeftRadius='0';
                element.appendChild(sp);
                element.append(btn2);
                sp.textContent = dane;
                
                btn2.textContent = 'Delete';
                list.appendChild(element);
                btn2.addEventListener("click",remove);

                function remove() {
                  element.remove();
                  input.focus();
                }
                
          }
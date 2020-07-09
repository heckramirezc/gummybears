import $ from 'jquery';

function liselector(completeSentence) {
  $(document).ready(() => {
    let li;
    let liSelected;
    let up = false;
    let down = false;
    let cont = 0;
    let str;
    $('#search-box').keydown((e) => {
      if (e.which === 40) {
        li = document.getElementById('search-list').getElementsByTagName('li');
        down = true;
        if (up) {
          cont += 2;
          up = false;
        }
        if (liSelected) {
          liSelected.className = '';
          if (cont === li.length) {
            liSelected = li[0];
            liSelected.className = 'selected';
            cont = 1;
          } else {
            liSelected = li[cont];
            liSelected.className = 'selected';
            cont += 1;
          }
        } else {
          liSelected = li[0];
          liSelected.className = 'selected';
          cont = 1;
        }
        str = liSelected.textContent;
        document.getElementById('search-box').value = str;
        completeSentence(str);
      } else if (e.which === 38) {
        li = document.getElementById('search-list').getElementsByTagName('li');
        up = true;
        if (down) {
          cont -= 2;
          down = false;
        }
        if (liSelected) {
          liSelected.className = '';
          if (cont === -1) {
            liSelected = li[li.length - 1];
            liSelected.className = 'selected';
            cont = li.length - 2;
          } else {
            liSelected = li[cont];
            liSelected.className = 'selected';
            cont -= 1;
          }
        } else {
          liSelected = li[li.length - 1];
          liSelected.className = 'selected';
          cont = li.length - 2;
        }
        str = liSelected.textContent;
        completeSentence(str);
        document.getElementById('search-box').value = str;
      }
    });
  });
}

export default liselector;

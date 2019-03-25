window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  let tabsWrapper = '.info-header-tab',
      tabsName = '.info-header',
      tabContent = '.info-tabcontent';

function useJsTabs (tabsWrapper, tabsName, tabContent) {
let tab = document.querySelectorAll(tabsWrapper),
    info = document.querySelector(tabsName),
    tabContents = document.querySelectorAll(tabContent);

    function hideTabContent (a) {
        for (let i = a; i < tabContents.length; i++) {
            tabContents[i].classList.remove('show');
            tabContents[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(a) {
        if (tabContents[a].classList.contains('hide')){
            tabContents[a].classList.remove('hide');
            tabContents[a].classList.add('show');            
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
  }
});
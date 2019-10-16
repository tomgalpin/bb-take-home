(function() {
  "use strict";

  var buttons = document.querySelectorAll('button');
  var numRows = 5;
  
  function addRows(greeting) {
    /**
    * Adds 5 rows to the ordered list
    * @param {string} greeting
    * @return {function} append()
    * @return {function} appendChild()
    */ 

    var list = document.getElementById('list-container');
    var listTextNode = document.createTextNode(greeting);
    var listItem;

    for (var i=0; i<numRows; i++) {
      listItem = document.createElement('li');
      listItem.innerHTML = greeting;
      list.appendChild(listItem);
    }
  }

  function changeRowsGreeting(greeting) {
    /**
    * Change the list items innerHTML
    * @param {string} greeting
    * @return {function} innerHTML()
    */ 

    var listItems = document.querySelectorAll('li');

    listItems.forEach(function(item){
      item.innerHTML = greeting;
    });
  }  

  function checkRows(greeting, appContainer) {
    /**
    * Checks if rows need to add another row
    * @param {string} greeting
    * @param {obj} appContainer
    * @return {bool} shouldAddRow
    */ 

    var appGreeting = appContainer.getAttribute('data-greeting');
    var hasSameGreeting = greeting === appGreeting;
    var hasNoListItems = document.getElementsByTagName('li').length === 0;
    var shouldAddRow = ((appGreeting === null) || hasSameGreeting && hasNoListItems) ? true : false;

    return shouldAddRow;
  }

  function createRow() {
    /**
    * Parent function on click that creates rows and/or checks if rows need to be changed
    * @return {function} addsetAttributeRow()
    * @return {function} addRow()
    * @return {function} changeRowsGreeting()
    */ 

    var greeting = getGreeting(event);
    var appContainer = document.getElementById('app-container');
    var shouldAddRow = checkRows(greeting, appContainer);

    appContainer.setAttribute('data-greeting', greeting);

    if (shouldAddRow) {
      addRows(greeting);
    } else {
      changeRowsGreeting(greeting);
    }
  }

  function getGreeting(event) {
    /**
    * Return greeting attribute from button
    * @param {obj} event
    * @return {string} greeting
    */ 

    var target = event.target;
    var greeting = target.getAttribute('value');
    
    return greeting;
  }

  buttons.forEach(function(item){
    item.addEventListener('click', createRow, false);
  });
})();


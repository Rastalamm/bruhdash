var global = window || GLOBAL;

global.bruhdash = {
  chunk : function ( array, size ) {
    var newArr = [];
    for (var i = 0; i < array.length; i += size) {
      newArr.push(array.slice(i, i + size));
    }
    return newArr;
  },

  compact : function(array) {
    var newArr = [];
    for ( var i = 0; i < array.length; i++ ) {
      if (array[i]) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  },

  difference : function ( array, vals) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
      if (vals.indexOf(array[i]) === -1) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  },

  drop: function(array, n){
    var newArr = [];
    if (n === null ){

    newArr = array.slice(n, array.length);
    }else{
     var n = 1;
      newArr = array.slice(n, array.length);
    }
    return newArr;
  },

  dropRight: function(array, n) {
    var newArr = [];
    newArr = array.slice(0, -n);
    return newArr;
  },

  fill: function(array, a) {
    newArr = [];
    if(arguments[2] === undefined){
      for(var i =0; i < array.length; i++){
      newArr.push(a);
      }
    }else{
      array.splice(arguments[2], 1,a);
      newArr = array;
    }
    return newArr;
  },

  first: function (array) {
    return array[0];
  },

  indexOf: function (array, value) {
    var newArr = [];
    if(arguments[2] !== undefined){
      newArr = array.indexOf(value, arguments[2]);
    }else{
      newArr = array.indexOf(value);
    }
    return newArr;
  },

  inital: function (array) {
    var newArr = [];
    newArr = array.slice(0, -1);
    return newArr;
  },

  last: function (array) {
    var newArr = [];
    newArr = array.slice(-1);
    return newArr;
  },

  lastIndexof: function (array, value) {
    var newArr = [];
    if(arguments[2] !== undefined){
      newArr = array.lastIndexOf(value, arguments[2]);
    }else{
      newArr = array.lastIndexOf(value);
    }
    return newArr;
  },

  pull: function (array, num1, num2) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      if(array[i] === num1 || array[i] === num2){
         newArr = array.splice(i, i+1);
        }
    }
    return array;
  },

  pullAt : function ( array ) {
    var newArr = [];
    var arguments = Array.prototype.slice.call( arguments, 1);
    arguments.sort(function(a, b){return a-b});
    arguments.reverse();
    for ( var i = 0; i < arguments.length; i++ ) {
      array.splice( arguments[i], 1 );
    }
    return array;
  },

  rest: function (array) {
    var newArr = [];
    newArr = array.slice(1);
    return newArr;
  },

  slice: function (array) {
    var newArr = [];
    newArr = array.slice(0, (array.length-1));
    return newArr;
  },

  take: function (array, end) {
    var newArr = [];
    if(end === undefined)
    {
      newArr = array.slice(0,1);
    }else{
      newArr = array.slice(0,end);
    }
    return newArr;
  },

  takeRight: function (array, start) {
    var newArr = [];
   if(start === undefined){
      newArr = array.slice(array.length-1);
    }else if (array.length - start < 0){
      newArr = array.slice(0);
    }else{
      newArr = array.slice(array.length-start);
    }
    return newArr;
  },

  zip: function () {
    var finalArr = [];
      for(var i = 0; i < arguments[0].length; i++){
        var temp = [];
          for(var j = 0; j < arguments.length; j++){
            temp.push(arguments[j][i]);
          }
        finalArr.push(temp);
      }
    return finalArr;
  },

  unzip: function (array) {
    var longestNumber;
      for (var i = 0; i < array.length -1; i++){
      if(array[i].length <= array[i + 1].length){
        longestNumber = array[i + 1].length;
      }else{
        longestNumber = array[i].length;
      }
    }
    if ( array.length > 0 ) {
      var newArr = [];
      for(var i = 0; i < longestNumber; i++){ //
        var temp = [];
        for(var j = 0; j < array.length; j++){ //
          if(array[j][i] === undefined || array[j] === undefined){
            temp.push(null);
          }else{
          temp.push(array[j][i]);
          }
        }
        newArr.push(temp);
      }
      return newArr;
    }else{
      return 'Give me an array';
    }
  },

  without: function(array, num1, num2) {
  for(var i =0; i <= array.length; i++){
      if(array.indexOf(num1) >= 0 || array.indexOf(num2) >= 0 ){
        array.splice(0,1);
      }
  }
    return array;
  }
};
var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(array, size){
    var newArr = [];

  for(var i = 0; i < array.length; i += size){
    newArr.push(array.slice(i, i + size));
  }

  return newArr;

  },

  compact: function(array) {
       var newArr = [];
       for(var i = 0; i < array.length; i++){
       if(array[i]){
          newArr.push(array[i]);
        }
   }
    return newArr;
  },

  difference: function() {



  },

  drop: function(array, n){
    var newArr = [];
    newArr = array.slice(n, array.length);
    return newArr;

  },

  dropRight: function(array, n) {
    var newArr = [];
    newArr = array.slice(0, -n);
    return newArr;
  },

  fill: function(array, a) {
    //example 3 is not working

    newArr = [];

    for(var i =0; i < array.length; i++){

      newArr.push(a);

    }

    return newArr;
  },

  first: function (array) {
    return array[0];
  },

  indexOf: function (array, value, n) {

    /*need to figure out the SameValueZero part of this
    if(){
      array.indexOf(value);
    }else{
      array.lastIndexOf(value);
    }

    console.log(array);*/
  },

  inital: function (array) {
    var newArr = [];
    newArr = array.slice(0, -1);
    return newArr;
  },

  last: function () {

  },

  lastIndexof: function () {

  },

  pull: function () {

  },

  pullAt: function () {

  },

  rest: function () {

  },

  slice: function () {

  },

  take: function () {

  },

  takeRight: function () {

  },

  zip: function () {

  },

  unzip: function () {

  },

  without: function() {

  }
};
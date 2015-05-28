var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(array, size){
    var newArr = [];

  for(var i = 0; i < array.length; i += size){
    newArr.push(array.slice(i, i + size));

  }
  return newArr;
  },

  compact: function() {
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

  drop: function(){

  },

  dropRight: function() {

  },

  fill: function() {

  },

  first: function (array) {
    return array[0];
  },

  indexOf: function () {

  },

  inital: function () {

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
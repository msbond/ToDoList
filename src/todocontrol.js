

var Application=function(){


  return {

    init: function(){


var i = [];
var iCounter = [];
var count=-1;
  jQuery('#click1').click( function(){


var text = jQuery("#todoinput").val();
console.log("text is"+text);

 if(text.length){

   count++;
   iCounter.push(count);

   i.push('<div id= "'+count+'" >' + ' <input type="checkbox" id = "checkboxid'+count+'"  class = "checkbox1" /> ' + text  + "<br />" +'</div>')

   jQuery('#checkboxes').html(i);
   console.log(iCounter);

}

  });

  jQuery('#checkboxes').change(function() {

for (var j=0;j<iCounter.length;j++) {
  c=iCounter[j];
  console.log(c);
  if(jQuery('#checkboxid'+c+'').is(":checked")) {

    console.log("c="+c);
    console.log(index1(c));
           i.splice(index1(c), 1);

           $("#"+c+"").hide();
           iCounter.splice(index1(c), 1);
           break;
        }

}
  console.log(iCounter);
  });
  var index1=function(index2){
    for(var i=iCounter.length-1;i>=0;i--){
      if(index2==iCounter[i])
        return i;
    }
    return -1;

  }
}
};
};



//});

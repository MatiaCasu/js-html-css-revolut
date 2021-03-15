// $(function(){
//
//   var buttonList = $("li.li_list");
//
//   buttonList.hover(function(){
//     $(this).children(".hidden_list").fadeToggle();
//   });
// });

$(function(){

  var buttonList = $("li.li_list");

  buttonList.click(function(){
    $(this).children(".hidden_list").slideToggle();
  });
});

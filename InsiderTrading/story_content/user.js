function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6r8HBPnRKxE":
        Script1();
        break;
      case "5XKxuVESgoL":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  $(".volume").after($("#tab-customlink"));
$("#tab-customlink").addClass('btn cs-button');

$("#tab-customlink").hide();


}

window.Script2 = function()
{
  window.print();
$(".volume").after($("#tab-customlink"));
$("#tab-customlink").addClass('btn cs-button');
$("#tab-customlink").hide();
$("#tab-customlink").show();

}

};

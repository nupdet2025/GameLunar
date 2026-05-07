gdjs.CENA_951_951Code = {};
gdjs.CENA_951_951Code.localVariables = [];
gdjs.CENA_951_951Code.idToCallbackMap = new Map();
gdjs.CENA_951_951Code.GDCHAR_95952Objects1= [];
gdjs.CENA_951_951Code.GDCHAR_95952Objects2= [];
gdjs.CENA_951_951Code.GDCHAR_95952Objects3= [];
gdjs.CENA_951_951Code.GDBALAO_95951Objects1= [];
gdjs.CENA_951_951Code.GDBALAO_95951Objects2= [];
gdjs.CENA_951_951Code.GDBALAO_95951Objects3= [];
gdjs.CENA_951_951Code.GDFUNDO_9595PADRAOObjects1= [];
gdjs.CENA_951_951Code.GDFUNDO_9595PADRAOObjects2= [];
gdjs.CENA_951_951Code.GDFUNDO_9595PADRAOObjects3= [];
gdjs.CENA_951_951Code.GDCURSORObjects1= [];
gdjs.CENA_951_951Code.GDCURSORObjects2= [];
gdjs.CENA_951_951Code.GDCURSORObjects3= [];
gdjs.CENA_951_951Code.GDBTN_9595DNVObjects1= [];
gdjs.CENA_951_951Code.GDBTN_9595DNVObjects2= [];
gdjs.CENA_951_951Code.GDBTN_9595DNVObjects3= [];


gdjs.CENA_951_951Code.asyncCallback23212260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_951_951Code.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Cena_2_Balao.mp3", 2, false, 80, 1);
}
gdjs.CENA_951_951Code.localVariables.length = 0;
}
gdjs.CENA_951_951Code.idToCallbackMap.set(23212260, gdjs.CENA_951_951Code.asyncCallback23212260);
gdjs.CENA_951_951Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_951_951Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CENA_951_951Code.asyncCallback23212260(runtimeScene, asyncObjectsList)), 23212260, asyncObjectsList);
}
}

}


};gdjs.CENA_951_951Code.asyncCallback23211412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_951_951Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BALAO_1"), gdjs.CENA_951_951Code.GDBALAO_95951Objects2);
{for(var i = 0, len = gdjs.CENA_951_951Code.GDBALAO_95951Objects2.length ;i < len;++i) {
    gdjs.CENA_951_951Code.GDBALAO_95951Objects2[i].getBehavior("Tween").addObjectPositionTween2("QUADRO", 568, 113, "bouncePast", 1, false);
}
}

{ //Subevents
gdjs.CENA_951_951Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.CENA_951_951Code.localVariables.length = 0;
}
gdjs.CENA_951_951Code.idToCallbackMap.set(23211412, gdjs.CENA_951_951Code.asyncCallback23211412);
gdjs.CENA_951_951Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_951_951Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CENA_951_951Code.asyncCallback23211412(runtimeScene, asyncObjectsList)), 23211412, asyncObjectsList);
}
}

}


};gdjs.CENA_951_951Code.asyncCallback23213412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_951_951Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CHAR_2"), gdjs.CENA_951_951Code.GDCHAR_95952Objects2);

{for(var i = 0, len = gdjs.CENA_951_951Code.GDCHAR_95952Objects2.length ;i < len;++i) {
    gdjs.CENA_951_951Code.GDCHAR_95952Objects2[i].getBehavior("Tween").addObjectPositionYTween2("subida", 245, "linear", 1.5, false);
}
}
gdjs.CENA_951_951Code.localVariables.length = 0;
}
gdjs.CENA_951_951Code.idToCallbackMap.set(23213412, gdjs.CENA_951_951Code.asyncCallback23213412);
gdjs.CENA_951_951Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_951_951Code.localVariables);
for (const obj of gdjs.CENA_951_951Code.GDCHAR_95952Objects1) asyncObjectsList.addObject("CHAR_2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_951_951Code.asyncCallback23213412(runtimeScene, asyncObjectsList)), 23213412, asyncObjectsList);
}
}

}


};gdjs.CENA_951_951Code.asyncCallback23214516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_951_951Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_2", false);
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "INTRO");
}
gdjs.CENA_951_951Code.localVariables.length = 0;
}
gdjs.CENA_951_951Code.idToCallbackMap.set(23214516, gdjs.CENA_951_951Code.asyncCallback23214516);
gdjs.CENA_951_951Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_951_951Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4.7), (runtimeScene) => (gdjs.CENA_951_951Code.asyncCallback23214516(runtimeScene, asyncObjectsList)), 23214516, asyncObjectsList);
}
}

}


};gdjs.CENA_951_951Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Trilha_sonora.mp3", 1, true, 90, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "INTRO");
}

{ //Subevents
gdjs.CENA_951_951Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CHAR_2"), gdjs.CENA_951_951Code.GDCHAR_95952Objects1);
{for(var i = 0, len = gdjs.CENA_951_951Code.GDCHAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_951_951Code.GDCHAR_95952Objects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(5, 5, 5, 3, 4, 4, true, null);
}
}
{for(var i = 0, len = gdjs.CENA_951_951Code.GDCHAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_951_951Code.GDCHAR_95952Objects1[i].getBehavior("Tween").addObjectPositionYTween2("subida", 200, "linear", 1.5, false);
}
}

{ //Subevents
gdjs.CENA_951_951Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.CENA_951_951Code.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.CENA_951_951Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CENA_951_951Code.GDCHAR_95952Objects1.length = 0;
gdjs.CENA_951_951Code.GDCHAR_95952Objects2.length = 0;
gdjs.CENA_951_951Code.GDCHAR_95952Objects3.length = 0;
gdjs.CENA_951_951Code.GDBALAO_95951Objects1.length = 0;
gdjs.CENA_951_951Code.GDBALAO_95951Objects2.length = 0;
gdjs.CENA_951_951Code.GDBALAO_95951Objects3.length = 0;
gdjs.CENA_951_951Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_951_951Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_951_951Code.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.CENA_951_951Code.GDCURSORObjects1.length = 0;
gdjs.CENA_951_951Code.GDCURSORObjects2.length = 0;
gdjs.CENA_951_951Code.GDCURSORObjects3.length = 0;
gdjs.CENA_951_951Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_951_951Code.GDBTN_9595DNVObjects2.length = 0;
gdjs.CENA_951_951Code.GDBTN_9595DNVObjects3.length = 0;

gdjs.CENA_951_951Code.eventsList4(runtimeScene);
gdjs.CENA_951_951Code.GDCHAR_95952Objects1.length = 0;
gdjs.CENA_951_951Code.GDCHAR_95952Objects2.length = 0;
gdjs.CENA_951_951Code.GDCHAR_95952Objects3.length = 0;
gdjs.CENA_951_951Code.GDBALAO_95951Objects1.length = 0;
gdjs.CENA_951_951Code.GDBALAO_95951Objects2.length = 0;
gdjs.CENA_951_951Code.GDBALAO_95951Objects3.length = 0;
gdjs.CENA_951_951Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_951_951Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_951_951Code.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.CENA_951_951Code.GDCURSORObjects1.length = 0;
gdjs.CENA_951_951Code.GDCURSORObjects2.length = 0;
gdjs.CENA_951_951Code.GDCURSORObjects3.length = 0;
gdjs.CENA_951_951Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_951_951Code.GDBTN_9595DNVObjects2.length = 0;
gdjs.CENA_951_951Code.GDBTN_9595DNVObjects3.length = 0;


return;

}

gdjs['CENA_951_951Code'] = gdjs.CENA_951_951Code;

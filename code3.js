gdjs.CENA_952Code = {};
gdjs.CENA_952Code.localVariables = [];
gdjs.CENA_952Code.idToCallbackMap = new Map();
gdjs.CENA_952Code.GDCHAR_95953Objects1= [];
gdjs.CENA_952Code.GDCHAR_95953Objects2= [];
gdjs.CENA_952Code.GDCHAR_95953Objects3= [];
gdjs.CENA_952Code.GDQUADRO_95952Objects1= [];
gdjs.CENA_952Code.GDQUADRO_95952Objects2= [];
gdjs.CENA_952Code.GDQUADRO_95952Objects3= [];
gdjs.CENA_952Code.GDFOGUETEObjects1= [];
gdjs.CENA_952Code.GDFOGUETEObjects2= [];
gdjs.CENA_952Code.GDFOGUETEObjects3= [];
gdjs.CENA_952Code.GDANIM_9595fumacaObjects1= [];
gdjs.CENA_952Code.GDANIM_9595fumacaObjects2= [];
gdjs.CENA_952Code.GDANIM_9595fumacaObjects3= [];
gdjs.CENA_952Code.GDFUNDO_9595PADRAOObjects1= [];
gdjs.CENA_952Code.GDFUNDO_9595PADRAOObjects2= [];
gdjs.CENA_952Code.GDFUNDO_9595PADRAOObjects3= [];
gdjs.CENA_952Code.GDCURSORObjects1= [];
gdjs.CENA_952Code.GDCURSORObjects2= [];
gdjs.CENA_952Code.GDCURSORObjects3= [];
gdjs.CENA_952Code.GDBTN_9595DNVObjects1= [];
gdjs.CENA_952Code.GDBTN_9595DNVObjects2= [];
gdjs.CENA_952Code.GDBTN_9595DNVObjects3= [];


gdjs.CENA_952Code.asyncCallback22153740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_952Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ANIM_fumaca"), gdjs.CENA_952Code.GDANIM_9595fumacaObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("FOGUETE"), gdjs.CENA_952Code.GDFOGUETEObjects3);

{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/Foguete_Decolagem_Sound.mp3", false, 30, 1);
}
{for(var i = 0, len = gdjs.CENA_952Code.GDFOGUETEObjects3.length ;i < len;++i) {
    gdjs.CENA_952Code.GDFOGUETEObjects3[i].getBehavior("Tween").addObjectPositionYTween2("foguete", 576, "easeInQuart", 1, false);
}
}
{for(var i = 0, len = gdjs.CENA_952Code.GDANIM_9595fumacaObjects3.length ;i < len;++i) {
    gdjs.CENA_952Code.GDANIM_9595fumacaObjects3[i].hide(false);
}
}
gdjs.CENA_952Code.localVariables.length = 0;
}
gdjs.CENA_952Code.idToCallbackMap.set(22153740, gdjs.CENA_952Code.asyncCallback22153740);
gdjs.CENA_952Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_952Code.localVariables);
/* Don't save ANIM_fumaca as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.CENA_952Code.GDFOGUETEObjects2) asyncObjectsList.addObject("FOGUETE", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.8), (runtimeScene) => (gdjs.CENA_952Code.asyncCallback22153740(runtimeScene, asyncObjectsList)), 22153740, asyncObjectsList);
}
}

}


};gdjs.CENA_952Code.asyncCallback22152372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_952Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("FOGUETE"), gdjs.CENA_952Code.GDFOGUETEObjects2);
gdjs.copyArray(runtimeScene.getObjects("QUADRO_2"), gdjs.CENA_952Code.GDQUADRO_95952Objects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Decolagem_autorizada.mp3", 2, false, 80, 1);
}
{for(var i = 0, len = gdjs.CENA_952Code.GDQUADRO_95952Objects2.length ;i < len;++i) {
    gdjs.CENA_952Code.GDQUADRO_95952Objects2[i].getBehavior("Tween").addObjectPositionTween2("QUADRO", 1102, 309, "bouncePast", 1, false);
}
}
{for(var i = 0, len = gdjs.CENA_952Code.GDFOGUETEObjects2.length ;i < len;++i) {
    gdjs.CENA_952Code.GDFOGUETEObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1.6, 10, 2, 2, 1.5, false, null);
}
}

{ //Subevents
gdjs.CENA_952Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.CENA_952Code.localVariables.length = 0;
}
gdjs.CENA_952Code.idToCallbackMap.set(22152372, gdjs.CENA_952Code.asyncCallback22152372);
gdjs.CENA_952Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_952Code.localVariables);
for (const obj of gdjs.CENA_952Code.GDANIM_9595fumacaObjects1) asyncObjectsList.addObject("ANIM_fumaca", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CENA_952Code.asyncCallback22152372(runtimeScene, asyncObjectsList)), 22152372, asyncObjectsList);
}
}

}


};gdjs.CENA_952Code.asyncCallback22155348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_952Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CHAR_3"), gdjs.CENA_952Code.GDCHAR_95953Objects2);

{for(var i = 0, len = gdjs.CENA_952Code.GDCHAR_95953Objects2.length ;i < len;++i) {
    gdjs.CENA_952Code.GDCHAR_95953Objects2[i].getBehavior("Tween").addObjectPositionYTween2("subida", 245, "linear", 1.5, false);
}
}
gdjs.CENA_952Code.localVariables.length = 0;
}
gdjs.CENA_952Code.idToCallbackMap.set(22155348, gdjs.CENA_952Code.asyncCallback22155348);
gdjs.CENA_952Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_952Code.localVariables);
for (const obj of gdjs.CENA_952Code.GDCHAR_95953Objects1) asyncObjectsList.addObject("CHAR_3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_952Code.asyncCallback22155348(runtimeScene, asyncObjectsList)), 22155348, asyncObjectsList);
}
}

}


};gdjs.CENA_952Code.asyncCallback22154916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_952Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_3_QUESTION_1", false);
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "INTRO");
}
gdjs.CENA_952Code.localVariables.length = 0;
}
gdjs.CENA_952Code.idToCallbackMap.set(22154916, gdjs.CENA_952Code.asyncCallback22154916);
gdjs.CENA_952Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.CENA_952Code.asyncCallback22154916(runtimeScene, asyncObjectsList)), 22154916, asyncObjectsList);
}
}

}


};gdjs.CENA_952Code.eventsList4 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("ANIM_fumaca"), gdjs.CENA_952Code.GDANIM_9595fumacaObjects1);
{for(var i = 0, len = gdjs.CENA_952Code.GDANIM_9595fumacaObjects1.length ;i < len;++i) {
    gdjs.CENA_952Code.GDANIM_9595fumacaObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Trilha_sonora.mp3", 1, true, 90, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "INTRO");
}

{ //Subevents
gdjs.CENA_952Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CHAR_3"), gdjs.CENA_952Code.GDCHAR_95953Objects1);
{for(var i = 0, len = gdjs.CENA_952Code.GDCHAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_952Code.GDCHAR_95953Objects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(3, 5, 5, 3, 4, 4, true, null);
}
}
{for(var i = 0, len = gdjs.CENA_952Code.GDCHAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_952Code.GDCHAR_95953Objects1[i].getBehavior("Tween").addObjectPositionYTween2("subida", 200, "linear", 1.5, false);
}
}

{ //Subevents
gdjs.CENA_952Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.CENA_952Code.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.CENA_952Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CENA_952Code.GDCHAR_95953Objects1.length = 0;
gdjs.CENA_952Code.GDCHAR_95953Objects2.length = 0;
gdjs.CENA_952Code.GDCHAR_95953Objects3.length = 0;
gdjs.CENA_952Code.GDQUADRO_95952Objects1.length = 0;
gdjs.CENA_952Code.GDQUADRO_95952Objects2.length = 0;
gdjs.CENA_952Code.GDQUADRO_95952Objects3.length = 0;
gdjs.CENA_952Code.GDFOGUETEObjects1.length = 0;
gdjs.CENA_952Code.GDFOGUETEObjects2.length = 0;
gdjs.CENA_952Code.GDFOGUETEObjects3.length = 0;
gdjs.CENA_952Code.GDANIM_9595fumacaObjects1.length = 0;
gdjs.CENA_952Code.GDANIM_9595fumacaObjects2.length = 0;
gdjs.CENA_952Code.GDANIM_9595fumacaObjects3.length = 0;
gdjs.CENA_952Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_952Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_952Code.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.CENA_952Code.GDCURSORObjects1.length = 0;
gdjs.CENA_952Code.GDCURSORObjects2.length = 0;
gdjs.CENA_952Code.GDCURSORObjects3.length = 0;
gdjs.CENA_952Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_952Code.GDBTN_9595DNVObjects2.length = 0;
gdjs.CENA_952Code.GDBTN_9595DNVObjects3.length = 0;

gdjs.CENA_952Code.eventsList4(runtimeScene);
gdjs.CENA_952Code.GDCHAR_95953Objects1.length = 0;
gdjs.CENA_952Code.GDCHAR_95953Objects2.length = 0;
gdjs.CENA_952Code.GDCHAR_95953Objects3.length = 0;
gdjs.CENA_952Code.GDQUADRO_95952Objects1.length = 0;
gdjs.CENA_952Code.GDQUADRO_95952Objects2.length = 0;
gdjs.CENA_952Code.GDQUADRO_95952Objects3.length = 0;
gdjs.CENA_952Code.GDFOGUETEObjects1.length = 0;
gdjs.CENA_952Code.GDFOGUETEObjects2.length = 0;
gdjs.CENA_952Code.GDFOGUETEObjects3.length = 0;
gdjs.CENA_952Code.GDANIM_9595fumacaObjects1.length = 0;
gdjs.CENA_952Code.GDANIM_9595fumacaObjects2.length = 0;
gdjs.CENA_952Code.GDANIM_9595fumacaObjects3.length = 0;
gdjs.CENA_952Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_952Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_952Code.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.CENA_952Code.GDCURSORObjects1.length = 0;
gdjs.CENA_952Code.GDCURSORObjects2.length = 0;
gdjs.CENA_952Code.GDCURSORObjects3.length = 0;
gdjs.CENA_952Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_952Code.GDBTN_9595DNVObjects2.length = 0;
gdjs.CENA_952Code.GDBTN_9595DNVObjects3.length = 0;


return;

}

gdjs['CENA_952Code'] = gdjs.CENA_952Code;

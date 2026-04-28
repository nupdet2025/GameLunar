gdjs.FINAL_952Code = {};
gdjs.FINAL_952Code.localVariables = [];
gdjs.FINAL_952Code.idToCallbackMap = new Map();
gdjs.FINAL_952Code.GDFOGUETEObjects1= [];
gdjs.FINAL_952Code.GDFOGUETEObjects2= [];
gdjs.FINAL_952Code.GDSOMBRA_9595FOGUETEObjects1= [];
gdjs.FINAL_952Code.GDSOMBRA_9595FOGUETEObjects2= [];
gdjs.FINAL_952Code.GDFUNDO_9595ESCUROObjects1= [];
gdjs.FINAL_952Code.GDFUNDO_9595ESCUROObjects2= [];
gdjs.FINAL_952Code.GDCHAR_95957Objects1= [];
gdjs.FINAL_952Code.GDCHAR_95957Objects2= [];
gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1= [];
gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects2= [];
gdjs.FINAL_952Code.GDFUNDO_9595PADRAOObjects1= [];
gdjs.FINAL_952Code.GDFUNDO_9595PADRAOObjects2= [];
gdjs.FINAL_952Code.GDCURSORObjects1= [];
gdjs.FINAL_952Code.GDCURSORObjects2= [];
gdjs.FINAL_952Code.GDBTN_9595DNVObjects1= [];
gdjs.FINAL_952Code.GDBTN_9595DNVObjects2= [];


gdjs.FINAL_952Code.asyncCallback23914188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FINAL_952Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CHAR_7"), gdjs.FINAL_952Code.GDCHAR_95957Objects2);

{for(var i = 0, len = gdjs.FINAL_952Code.GDCHAR_95957Objects2.length ;i < len;++i) {
    gdjs.FINAL_952Code.GDCHAR_95957Objects2[i].getBehavior("Tween").addObjectPositionYTween2("foguete", 90, "easeInQuart", 1.5, false);
}
}
gdjs.FINAL_952Code.localVariables.length = 0;
}
gdjs.FINAL_952Code.idToCallbackMap.set(23914188, gdjs.FINAL_952Code.asyncCallback23914188);
gdjs.FINAL_952Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FINAL_952Code.localVariables);
for (const obj of gdjs.FINAL_952Code.GDCHAR_95957Objects1) asyncObjectsList.addObject("CHAR_7", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.FINAL_952Code.asyncCallback23914188(runtimeScene, asyncObjectsList)), 23914188, asyncObjectsList);
}
}

}


};gdjs.FINAL_952Code.asyncCallback23918156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FINAL_952Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INTRO", false);
}
gdjs.FINAL_952Code.localVariables.length = 0;
}
gdjs.FINAL_952Code.idToCallbackMap.set(23918156, gdjs.FINAL_952Code.asyncCallback23918156);
gdjs.FINAL_952Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FINAL_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.FINAL_952Code.asyncCallback23918156(runtimeScene, asyncObjectsList)), 23918156, asyncObjectsList);
}
}

}


};gdjs.FINAL_952Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.FINAL_952Code.GDCURSORObjects1);
{for(var i = 0, len = gdjs.FINAL_952Code.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.FINAL_952Code.GDCURSORObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.FINAL_952Code.GDCURSORObjects1);
{for(var i = 0, len = gdjs.FINAL_952Code.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.FINAL_952Code.GDCURSORObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
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
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "espera_audio");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Trilha_sonora.mp3", 1, true, 90, 1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__UAUUU.mp3", 3, false, 80, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CHAR_7"), gdjs.FINAL_952Code.GDCHAR_95957Objects1);
{for(var i = 0, len = gdjs.FINAL_952Code.GDCHAR_95957Objects1.length ;i < len;++i) {
    gdjs.FINAL_952Code.GDCHAR_95957Objects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(6, 5, 5, 2, 4, 4, true, null);
}
}
{for(var i = 0, len = gdjs.FINAL_952Code.GDCHAR_95957Objects1.length ;i < len;++i) {
    gdjs.FINAL_952Code.GDCHAR_95957Objects1[i].getBehavior("Tween").addObjectPositionYTween2("Subida", 63, "easeInQuart", 1.5, false);
}
}

{ //Subevents
gdjs.FINAL_952Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "espera_audio") > 4;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23916388);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_Reiniciar"), gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1);
{for(var i = 0, len = gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length ;i < len;++i) {
    gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1.5, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.FINAL_952Code.GDCURSORObjects1);
{for(var i = 0, len = gdjs.FINAL_952Code.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.FINAL_952Code.GDCURSORObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_Reiniciar"), gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length;i<l;++i) {
    if ( gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[k] = gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[i];
        ++k;
    }
}
gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1 */
{for(var i = 0, len = gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length ;i < len;++i) {
    gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[i].getBehavior("Scale").setScale(1);
}
}

{ //Subevents
gdjs.FINAL_952Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_Reiniciar"), gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length;i<l;++i) {
    if ( gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[k] = gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[i];
        ++k;
    }
}
gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1 */
{for(var i = 0, len = gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length ;i < len;++i) {
    gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_Reiniciar"), gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length;i<l;++i) {
    if ( gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[k] = gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[i];
        ++k;
    }
}
gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1 */
{for(var i = 0, len = gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length ;i < len;++i) {
    gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
}

}


};

gdjs.FINAL_952Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FINAL_952Code.GDFOGUETEObjects1.length = 0;
gdjs.FINAL_952Code.GDFOGUETEObjects2.length = 0;
gdjs.FINAL_952Code.GDSOMBRA_9595FOGUETEObjects1.length = 0;
gdjs.FINAL_952Code.GDSOMBRA_9595FOGUETEObjects2.length = 0;
gdjs.FINAL_952Code.GDFUNDO_9595ESCUROObjects1.length = 0;
gdjs.FINAL_952Code.GDFUNDO_9595ESCUROObjects2.length = 0;
gdjs.FINAL_952Code.GDCHAR_95957Objects1.length = 0;
gdjs.FINAL_952Code.GDCHAR_95957Objects2.length = 0;
gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length = 0;
gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects2.length = 0;
gdjs.FINAL_952Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.FINAL_952Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.FINAL_952Code.GDCURSORObjects1.length = 0;
gdjs.FINAL_952Code.GDCURSORObjects2.length = 0;
gdjs.FINAL_952Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.FINAL_952Code.GDBTN_9595DNVObjects2.length = 0;

gdjs.FINAL_952Code.eventsList2(runtimeScene);
gdjs.FINAL_952Code.GDFOGUETEObjects1.length = 0;
gdjs.FINAL_952Code.GDFOGUETEObjects2.length = 0;
gdjs.FINAL_952Code.GDSOMBRA_9595FOGUETEObjects1.length = 0;
gdjs.FINAL_952Code.GDSOMBRA_9595FOGUETEObjects2.length = 0;
gdjs.FINAL_952Code.GDFUNDO_9595ESCUROObjects1.length = 0;
gdjs.FINAL_952Code.GDFUNDO_9595ESCUROObjects2.length = 0;
gdjs.FINAL_952Code.GDCHAR_95957Objects1.length = 0;
gdjs.FINAL_952Code.GDCHAR_95957Objects2.length = 0;
gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects1.length = 0;
gdjs.FINAL_952Code.GDBTN_9595ReiniciarObjects2.length = 0;
gdjs.FINAL_952Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.FINAL_952Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.FINAL_952Code.GDCURSORObjects1.length = 0;
gdjs.FINAL_952Code.GDCURSORObjects2.length = 0;
gdjs.FINAL_952Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.FINAL_952Code.GDBTN_9595DNVObjects2.length = 0;


return;

}

gdjs['FINAL_952Code'] = gdjs.FINAL_952Code;

gdjs.FINAL_951Code = {};
gdjs.FINAL_951Code.localVariables = [];
gdjs.FINAL_951Code.idToCallbackMap = new Map();
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects1= [];
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects2= [];
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects3= [];
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects4= [];
gdjs.FINAL_951Code.GDMISSAOObjects1= [];
gdjs.FINAL_951Code.GDMISSAOObjects2= [];
gdjs.FINAL_951Code.GDMISSAOObjects3= [];
gdjs.FINAL_951Code.GDMISSAOObjects4= [];
gdjs.FINAL_951Code.GDESTRELAObjects1= [];
gdjs.FINAL_951Code.GDESTRELAObjects2= [];
gdjs.FINAL_951Code.GDESTRELAObjects3= [];
gdjs.FINAL_951Code.GDESTRELAObjects4= [];
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects1= [];
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects2= [];
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects3= [];
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects4= [];
gdjs.FINAL_951Code.GDCHAR_95956Objects1= [];
gdjs.FINAL_951Code.GDCHAR_95956Objects2= [];
gdjs.FINAL_951Code.GDCHAR_95956Objects3= [];
gdjs.FINAL_951Code.GDCHAR_95956Objects4= [];
gdjs.FINAL_951Code.GDSOMBRAObjects1= [];
gdjs.FINAL_951Code.GDSOMBRAObjects2= [];
gdjs.FINAL_951Code.GDSOMBRAObjects3= [];
gdjs.FINAL_951Code.GDSOMBRAObjects4= [];
gdjs.FINAL_951Code.GDFOGUETEObjects1= [];
gdjs.FINAL_951Code.GDFOGUETEObjects2= [];
gdjs.FINAL_951Code.GDFOGUETEObjects3= [];
gdjs.FINAL_951Code.GDFOGUETEObjects4= [];
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects1= [];
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects2= [];
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects3= [];
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects4= [];
gdjs.FINAL_951Code.GDfumacinhaObjects1= [];
gdjs.FINAL_951Code.GDfumacinhaObjects2= [];
gdjs.FINAL_951Code.GDfumacinhaObjects3= [];
gdjs.FINAL_951Code.GDfumacinhaObjects4= [];
gdjs.FINAL_951Code.GDceuObjects1= [];
gdjs.FINAL_951Code.GDceuObjects2= [];
gdjs.FINAL_951Code.GDceuObjects3= [];
gdjs.FINAL_951Code.GDceuObjects4= [];
gdjs.FINAL_951Code.GDterraObjects1= [];
gdjs.FINAL_951Code.GDterraObjects2= [];
gdjs.FINAL_951Code.GDterraObjects3= [];
gdjs.FINAL_951Code.GDterraObjects4= [];
gdjs.FINAL_951Code.GDluaObjects1= [];
gdjs.FINAL_951Code.GDluaObjects2= [];
gdjs.FINAL_951Code.GDluaObjects3= [];
gdjs.FINAL_951Code.GDluaObjects4= [];
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects1= [];
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects2= [];
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects3= [];
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects4= [];
gdjs.FINAL_951Code.GDCURSORObjects1= [];
gdjs.FINAL_951Code.GDCURSORObjects2= [];
gdjs.FINAL_951Code.GDCURSORObjects3= [];
gdjs.FINAL_951Code.GDCURSORObjects4= [];
gdjs.FINAL_951Code.GDBTN_9595DNVObjects1= [];
gdjs.FINAL_951Code.GDBTN_9595DNVObjects2= [];
gdjs.FINAL_951Code.GDBTN_9595DNVObjects3= [];
gdjs.FINAL_951Code.GDBTN_9595DNVObjects4= [];


gdjs.FINAL_951Code.asyncCallback23862708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FINAL_951Code.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__missao concluida.mp3", 3, false, 80, 1);
}
gdjs.FINAL_951Code.localVariables.length = 0;
}
gdjs.FINAL_951Code.idToCallbackMap.set(23862708, gdjs.FINAL_951Code.asyncCallback23862708);
gdjs.FINAL_951Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.FINAL_951Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.FINAL_951Code.asyncCallback23862708(runtimeScene, asyncObjectsList)), 23862708, asyncObjectsList);
}
}

}


};gdjs.FINAL_951Code.asyncCallback12152052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FINAL_951Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("ESTRELA"), gdjs.FINAL_951Code.GDESTRELAObjects3);
gdjs.copyArray(runtimeScene.getObjects("MISSAO"), gdjs.FINAL_951Code.GDMISSAOObjects3);
gdjs.copyArray(runtimeScene.getObjects("SUB_TITULO"), gdjs.FINAL_951Code.GDSUB_9595TITULOObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("fumacinha"), gdjs.FINAL_951Code.GDfumacinhaObjects3);

{for(var i = 0, len = gdjs.FINAL_951Code.GDfumacinhaObjects3.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDfumacinhaObjects3[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 0, "easeInOutQuad", 0.2, false);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDESTRELAObjects3.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDESTRELAObjects3[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1.5, false);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDESTRELAObjects3.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDESTRELAObjects3[i].getBehavior("Tween").addObjectScaleTween3("Pulso", 0.70, "easeOutBounce", 1.5, false, true);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDMISSAOObjects3.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDMISSAOObjects3[i].getBehavior("Tween").addObjectPositionTween2("QUADRO", 960, 220, "bouncePast", 1, false);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDSUB_9595TITULOObjects3.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDSUB_9595TITULOObjects3[i].getBehavior("Tween").addObjectPositionTween2("QUADRO", 960, 342, "bouncePast", 1.3, false);
}
}

{ //Subevents
gdjs.FINAL_951Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.FINAL_951Code.localVariables.length = 0;
}
gdjs.FINAL_951Code.idToCallbackMap.set(12152052, gdjs.FINAL_951Code.asyncCallback12152052);
gdjs.FINAL_951Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.FINAL_951Code.localVariables);
for (const obj of gdjs.FINAL_951Code.GDfumacinhaObjects2) asyncObjectsList.addObject("fumacinha", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.FINAL_951Code.asyncCallback12152052(runtimeScene, asyncObjectsList)), 12152052, asyncObjectsList);
}
}

}


};gdjs.FINAL_951Code.asyncCallback25064284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FINAL_951Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("fumacinha"), gdjs.FINAL_951Code.GDfumacinhaObjects2);
{for(var i = 0, len = gdjs.FINAL_951Code.GDfumacinhaObjects2.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDfumacinhaObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDfumacinhaObjects2.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDfumacinhaObjects2[i].getBehavior("Animation").setAnimationName("fumacinha");
}
}

{ //Subevents
gdjs.FINAL_951Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.FINAL_951Code.localVariables.length = 0;
}
gdjs.FINAL_951Code.idToCallbackMap.set(25064284, gdjs.FINAL_951Code.asyncCallback25064284);
gdjs.FINAL_951Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FINAL_951Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.3), (runtimeScene) => (gdjs.FINAL_951Code.asyncCallback25064284(runtimeScene, asyncObjectsList)), 25064284, asyncObjectsList);
}
}

}


};gdjs.FINAL_951Code.asyncCallback23864436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FINAL_951Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CHAR_6"), gdjs.FINAL_951Code.GDCHAR_95956Objects2);

{for(var i = 0, len = gdjs.FINAL_951Code.GDCHAR_95956Objects2.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDCHAR_95956Objects2[i].getBehavior("Tween").addObjectPositionYTween2("foguete", 416, "easeInQuart", 1.5, false);
}
}
gdjs.FINAL_951Code.localVariables.length = 0;
}
gdjs.FINAL_951Code.idToCallbackMap.set(23864436, gdjs.FINAL_951Code.asyncCallback23864436);
gdjs.FINAL_951Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FINAL_951Code.localVariables);
for (const obj of gdjs.FINAL_951Code.GDCHAR_95956Objects1) asyncObjectsList.addObject("CHAR_6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.FINAL_951Code.asyncCallback23864436(runtimeScene, asyncObjectsList)), 23864436, asyncObjectsList);
}
}

}


};gdjs.FINAL_951Code.asyncCallback23865708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FINAL_951Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("SOMBRA"), gdjs.FINAL_951Code.GDSOMBRAObjects2);

{for(var i = 0, len = gdjs.FINAL_951Code.GDSOMBRAObjects2.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDSOMBRAObjects2[i].getBehavior("Tween").addObjectScaleTween3("Pulso", 0.90, "linear", 5, false, true);
}
}
gdjs.FINAL_951Code.localVariables.length = 0;
}
gdjs.FINAL_951Code.idToCallbackMap.set(23865708, gdjs.FINAL_951Code.asyncCallback23865708);
gdjs.FINAL_951Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FINAL_951Code.localVariables);
for (const obj of gdjs.FINAL_951Code.GDSOMBRAObjects1) asyncObjectsList.addObject("SOMBRA", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.FINAL_951Code.asyncCallback23865708(runtimeScene, asyncObjectsList)), 23865708, asyncObjectsList);
}
}

}


};gdjs.FINAL_951Code.eventsList5 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("FOGUETE"), gdjs.FINAL_951Code.GDFOGUETEObjects1);
gdjs.copyArray(runtimeScene.getObjects("SOMBRA_FOGUETE"), gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects1);
gdjs.copyArray(runtimeScene.getObjects("terra"), gdjs.FINAL_951Code.GDterraObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "espera_audio");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Trilha_sonora.mp3", 1, true, 90, 1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Sounds and Music/Sound_Victory.mp3", 2, false, 40, 1);
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects1[i].getBehavior("Tween").addObjectOpacityTween2("sombra", 80, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDFOGUETEObjects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDFOGUETEObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(2, 20, 3, 3, 1.8, false, null);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDFOGUETEObjects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDFOGUETEObjects1[i].getBehavior("Tween").addObjectPositionYTween2("foguete", 560, "easeInQuart", 1.5, false);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDterraObjects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDterraObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(9, 5, 3, 3, 5, true, null);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDterraObjects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDterraObjects1[i].getBehavior("Tween").addObjectPositionYTween2("foguete", 438, "easeInQuart", 12, false);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects1[i].getBehavior("Tween").addObjectScaleTween3("sombra", 0.8, "linear", 1.6, false, true);
}
}

{ //Subevents
gdjs.FINAL_951Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CHAR_6"), gdjs.FINAL_951Code.GDCHAR_95956Objects1);
{for(var i = 0, len = gdjs.FINAL_951Code.GDCHAR_95956Objects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDCHAR_95956Objects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(10, 5, 5, 4, 4, 4, true, null);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDCHAR_95956Objects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDCHAR_95956Objects1[i].getBehavior("Tween").addObjectPositionYTween2("foguete", 384, "easeInQuart", 1.5, false);
}
}

{ //Subevents
gdjs.FINAL_951Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SOMBRA"), gdjs.FINAL_951Code.GDSOMBRAObjects1);
{for(var i = 0, len = gdjs.FINAL_951Code.GDSOMBRAObjects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDSOMBRAObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(10, 5, 5, 4, 4, 4, true, null);
}
}
{for(var i = 0, len = gdjs.FINAL_951Code.GDSOMBRAObjects1.length ;i < len;++i) {
    gdjs.FINAL_951Code.GDSOMBRAObjects1[i].getBehavior("Tween").addObjectScaleTween3("Pulso", 1, "linear", 5, false, true);
}
}

{ //Subevents
gdjs.FINAL_951Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "espera_audio") > 10;
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23867988);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.tween.addLayoutValueTween(runtimeScene, "transicao", 100, 0, "linear", 1, false);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FINAL_2", false);
}
}

}


};

gdjs.FINAL_951Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects1.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects2.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects3.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects4.length = 0;
gdjs.FINAL_951Code.GDMISSAOObjects1.length = 0;
gdjs.FINAL_951Code.GDMISSAOObjects2.length = 0;
gdjs.FINAL_951Code.GDMISSAOObjects3.length = 0;
gdjs.FINAL_951Code.GDMISSAOObjects4.length = 0;
gdjs.FINAL_951Code.GDESTRELAObjects1.length = 0;
gdjs.FINAL_951Code.GDESTRELAObjects2.length = 0;
gdjs.FINAL_951Code.GDESTRELAObjects3.length = 0;
gdjs.FINAL_951Code.GDESTRELAObjects4.length = 0;
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects1.length = 0;
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects2.length = 0;
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects3.length = 0;
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects4.length = 0;
gdjs.FINAL_951Code.GDCHAR_95956Objects1.length = 0;
gdjs.FINAL_951Code.GDCHAR_95956Objects2.length = 0;
gdjs.FINAL_951Code.GDCHAR_95956Objects3.length = 0;
gdjs.FINAL_951Code.GDCHAR_95956Objects4.length = 0;
gdjs.FINAL_951Code.GDSOMBRAObjects1.length = 0;
gdjs.FINAL_951Code.GDSOMBRAObjects2.length = 0;
gdjs.FINAL_951Code.GDSOMBRAObjects3.length = 0;
gdjs.FINAL_951Code.GDSOMBRAObjects4.length = 0;
gdjs.FINAL_951Code.GDFOGUETEObjects1.length = 0;
gdjs.FINAL_951Code.GDFOGUETEObjects2.length = 0;
gdjs.FINAL_951Code.GDFOGUETEObjects3.length = 0;
gdjs.FINAL_951Code.GDFOGUETEObjects4.length = 0;
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects1.length = 0;
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects2.length = 0;
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects3.length = 0;
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects4.length = 0;
gdjs.FINAL_951Code.GDfumacinhaObjects1.length = 0;
gdjs.FINAL_951Code.GDfumacinhaObjects2.length = 0;
gdjs.FINAL_951Code.GDfumacinhaObjects3.length = 0;
gdjs.FINAL_951Code.GDfumacinhaObjects4.length = 0;
gdjs.FINAL_951Code.GDceuObjects1.length = 0;
gdjs.FINAL_951Code.GDceuObjects2.length = 0;
gdjs.FINAL_951Code.GDceuObjects3.length = 0;
gdjs.FINAL_951Code.GDceuObjects4.length = 0;
gdjs.FINAL_951Code.GDterraObjects1.length = 0;
gdjs.FINAL_951Code.GDterraObjects2.length = 0;
gdjs.FINAL_951Code.GDterraObjects3.length = 0;
gdjs.FINAL_951Code.GDterraObjects4.length = 0;
gdjs.FINAL_951Code.GDluaObjects1.length = 0;
gdjs.FINAL_951Code.GDluaObjects2.length = 0;
gdjs.FINAL_951Code.GDluaObjects3.length = 0;
gdjs.FINAL_951Code.GDluaObjects4.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects4.length = 0;
gdjs.FINAL_951Code.GDCURSORObjects1.length = 0;
gdjs.FINAL_951Code.GDCURSORObjects2.length = 0;
gdjs.FINAL_951Code.GDCURSORObjects3.length = 0;
gdjs.FINAL_951Code.GDCURSORObjects4.length = 0;
gdjs.FINAL_951Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.FINAL_951Code.GDBTN_9595DNVObjects2.length = 0;
gdjs.FINAL_951Code.GDBTN_9595DNVObjects3.length = 0;
gdjs.FINAL_951Code.GDBTN_9595DNVObjects4.length = 0;

gdjs.FINAL_951Code.eventsList5(runtimeScene);
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects1.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects2.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects3.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595CLAROObjects4.length = 0;
gdjs.FINAL_951Code.GDMISSAOObjects1.length = 0;
gdjs.FINAL_951Code.GDMISSAOObjects2.length = 0;
gdjs.FINAL_951Code.GDMISSAOObjects3.length = 0;
gdjs.FINAL_951Code.GDMISSAOObjects4.length = 0;
gdjs.FINAL_951Code.GDESTRELAObjects1.length = 0;
gdjs.FINAL_951Code.GDESTRELAObjects2.length = 0;
gdjs.FINAL_951Code.GDESTRELAObjects3.length = 0;
gdjs.FINAL_951Code.GDESTRELAObjects4.length = 0;
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects1.length = 0;
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects2.length = 0;
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects3.length = 0;
gdjs.FINAL_951Code.GDSUB_9595TITULOObjects4.length = 0;
gdjs.FINAL_951Code.GDCHAR_95956Objects1.length = 0;
gdjs.FINAL_951Code.GDCHAR_95956Objects2.length = 0;
gdjs.FINAL_951Code.GDCHAR_95956Objects3.length = 0;
gdjs.FINAL_951Code.GDCHAR_95956Objects4.length = 0;
gdjs.FINAL_951Code.GDSOMBRAObjects1.length = 0;
gdjs.FINAL_951Code.GDSOMBRAObjects2.length = 0;
gdjs.FINAL_951Code.GDSOMBRAObjects3.length = 0;
gdjs.FINAL_951Code.GDSOMBRAObjects4.length = 0;
gdjs.FINAL_951Code.GDFOGUETEObjects1.length = 0;
gdjs.FINAL_951Code.GDFOGUETEObjects2.length = 0;
gdjs.FINAL_951Code.GDFOGUETEObjects3.length = 0;
gdjs.FINAL_951Code.GDFOGUETEObjects4.length = 0;
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects1.length = 0;
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects2.length = 0;
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects3.length = 0;
gdjs.FINAL_951Code.GDSOMBRA_9595FOGUETEObjects4.length = 0;
gdjs.FINAL_951Code.GDfumacinhaObjects1.length = 0;
gdjs.FINAL_951Code.GDfumacinhaObjects2.length = 0;
gdjs.FINAL_951Code.GDfumacinhaObjects3.length = 0;
gdjs.FINAL_951Code.GDfumacinhaObjects4.length = 0;
gdjs.FINAL_951Code.GDceuObjects1.length = 0;
gdjs.FINAL_951Code.GDceuObjects2.length = 0;
gdjs.FINAL_951Code.GDceuObjects3.length = 0;
gdjs.FINAL_951Code.GDceuObjects4.length = 0;
gdjs.FINAL_951Code.GDterraObjects1.length = 0;
gdjs.FINAL_951Code.GDterraObjects2.length = 0;
gdjs.FINAL_951Code.GDterraObjects3.length = 0;
gdjs.FINAL_951Code.GDterraObjects4.length = 0;
gdjs.FINAL_951Code.GDluaObjects1.length = 0;
gdjs.FINAL_951Code.GDluaObjects2.length = 0;
gdjs.FINAL_951Code.GDluaObjects3.length = 0;
gdjs.FINAL_951Code.GDluaObjects4.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.FINAL_951Code.GDFUNDO_9595PADRAOObjects4.length = 0;
gdjs.FINAL_951Code.GDCURSORObjects1.length = 0;
gdjs.FINAL_951Code.GDCURSORObjects2.length = 0;
gdjs.FINAL_951Code.GDCURSORObjects3.length = 0;
gdjs.FINAL_951Code.GDCURSORObjects4.length = 0;
gdjs.FINAL_951Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.FINAL_951Code.GDBTN_9595DNVObjects2.length = 0;
gdjs.FINAL_951Code.GDBTN_9595DNVObjects3.length = 0;
gdjs.FINAL_951Code.GDBTN_9595DNVObjects4.length = 0;


return;

}

gdjs['FINAL_951Code'] = gdjs.FINAL_951Code;

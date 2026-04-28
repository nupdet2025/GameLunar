gdjs.INTROCode = {};
gdjs.INTROCode.localVariables = [];
gdjs.INTROCode.idToCallbackMap = new Map();
gdjs.INTROCode.GDCHAR_95951Objects1= [];
gdjs.INTROCode.GDCHAR_95951Objects2= [];
gdjs.INTROCode.GDCHAR_95951Objects3= [];
gdjs.INTROCode.GDQUADROObjects1= [];
gdjs.INTROCode.GDQUADROObjects2= [];
gdjs.INTROCode.GDQUADROObjects3= [];
gdjs.INTROCode.GDBTN_9595INICIARObjects1= [];
gdjs.INTROCode.GDBTN_9595INICIARObjects2= [];
gdjs.INTROCode.GDBTN_9595INICIARObjects3= [];
gdjs.INTROCode.GDBTN_9595RETURNObjects1= [];
gdjs.INTROCode.GDBTN_9595RETURNObjects2= [];
gdjs.INTROCode.GDBTN_9595RETURNObjects3= [];
gdjs.INTROCode.GDTITULO_9595MISSAOObjects1= [];
gdjs.INTROCode.GDTITULO_9595MISSAOObjects2= [];
gdjs.INTROCode.GDTITULO_9595MISSAOObjects3= [];
gdjs.INTROCode.GDTXT_95950Objects1= [];
gdjs.INTROCode.GDTXT_95950Objects2= [];
gdjs.INTROCode.GDTXT_95950Objects3= [];
gdjs.INTROCode.GDFUNDO_9595PADRAOObjects1= [];
gdjs.INTROCode.GDFUNDO_9595PADRAOObjects2= [];
gdjs.INTROCode.GDFUNDO_9595PADRAOObjects3= [];
gdjs.INTROCode.GDCURSORObjects1= [];
gdjs.INTROCode.GDCURSORObjects2= [];
gdjs.INTROCode.GDCURSORObjects3= [];
gdjs.INTROCode.GDBTN_9595DNVObjects1= [];
gdjs.INTROCode.GDBTN_9595DNVObjects2= [];
gdjs.INTROCode.GDBTN_9595DNVObjects3= [];


gdjs.INTROCode.asyncCallback21983892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.INTROCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("TXT_0"), gdjs.INTROCode.GDTXT_95950Objects3);
{for(var i = 0, len = gdjs.INTROCode.GDTXT_95950Objects3.length ;i < len;++i) {
    gdjs.INTROCode.GDTXT_95950Objects3[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Cena_1.mp3", 2, false, 80, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
gdjs.INTROCode.localVariables.length = 0;
}
gdjs.INTROCode.idToCallbackMap.set(21983892, gdjs.INTROCode.asyncCallback21983892);
gdjs.INTROCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.INTROCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.INTROCode.asyncCallback21983892(runtimeScene, asyncObjectsList)), 21983892, asyncObjectsList);
}
}

}


};gdjs.INTROCode.asyncCallback21983444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.INTROCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("TITULO_MISSAO"), gdjs.INTROCode.GDTITULO_9595MISSAOObjects2);
{for(var i = 0, len = gdjs.INTROCode.GDTITULO_9595MISSAOObjects2.length ;i < len;++i) {
    gdjs.INTROCode.GDTITULO_9595MISSAOObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}

{ //Subevents
gdjs.INTROCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.INTROCode.localVariables.length = 0;
}
gdjs.INTROCode.idToCallbackMap.set(21983444, gdjs.INTROCode.asyncCallback21983444);
gdjs.INTROCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.INTROCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.INTROCode.asyncCallback21983444(runtimeScene, asyncObjectsList)), 21983444, asyncObjectsList);
}
}

}


};gdjs.INTROCode.asyncCallback21985748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.INTROCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CHAR_1"), gdjs.INTROCode.GDCHAR_95951Objects2);

{for(var i = 0, len = gdjs.INTROCode.GDCHAR_95951Objects2.length ;i < len;++i) {
    gdjs.INTROCode.GDCHAR_95951Objects2[i].getBehavior("Tween").addObjectPositionYTween2("subida", 245, "linear", 1.5, false);
}
}
gdjs.INTROCode.localVariables.length = 0;
}
gdjs.INTROCode.idToCallbackMap.set(21985748, gdjs.INTROCode.asyncCallback21985748);
gdjs.INTROCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.INTROCode.localVariables);
for (const obj of gdjs.INTROCode.GDCHAR_95951Objects1) asyncObjectsList.addObject("CHAR_1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.INTROCode.asyncCallback21985748(runtimeScene, asyncObjectsList)), 21985748, asyncObjectsList);
}
}

}


};gdjs.INTROCode.asyncCallback21994324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.INTROCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BTN_INICIAR"), gdjs.INTROCode.GDBTN_9595INICIARObjects2);

{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_1_1", false);
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "INTRO");
}
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595INICIARObjects2.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595INICIARObjects2[i].getBehavior("Scale").setScale(1);
}
}
gdjs.INTROCode.localVariables.length = 0;
}
gdjs.INTROCode.idToCallbackMap.set(21994324, gdjs.INTROCode.asyncCallback21994324);
gdjs.INTROCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.INTROCode.localVariables);
for (const obj of gdjs.INTROCode.GDBTN_9595INICIARObjects1) asyncObjectsList.addObject("BTN_INICIAR", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.INTROCode.asyncCallback21994324(runtimeScene, asyncObjectsList)), 21994324, asyncObjectsList);
}
}

}


};gdjs.INTROCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.INTROCode.GDCURSORObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDCURSORObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.INTROCode.GDCURSORObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDCURSORObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.INTROCode.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDCURSORObjects1[i].hide(false);
}
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
gdjs.copyArray(runtimeScene.getObjects("QUADRO"), gdjs.INTROCode.GDQUADROObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Trilha_sonora.mp3", 1, true, 70, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "INTRO");
}
{for(var i = 0, len = gdjs.INTROCode.GDQUADROObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDQUADROObjects1[i].getBehavior("Tween").addObjectPositionTween2("QUADRO", 1032, 489, "bouncePast", 1, false);
}
}

{ //Subevents
gdjs.INTROCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CHAR_1"), gdjs.INTROCode.GDCHAR_95951Objects1);
{for(var i = 0, len = gdjs.INTROCode.GDCHAR_95951Objects1.length ;i < len;++i) {
    gdjs.INTROCode.GDCHAR_95951Objects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(10, 5, 5, 3, 4, 4, true, null);
}
}
{for(var i = 0, len = gdjs.INTROCode.GDCHAR_95951Objects1.length ;i < len;++i) {
    gdjs.INTROCode.GDCHAR_95951Objects1[i].getBehavior("Tween").addObjectPositionYTween2("subida", 200, "linear", 1.5, false);
}
}

{ //Subevents
gdjs.INTROCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21987076);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_INICIAR"), gdjs.INTROCode.GDBTN_9595INICIARObjects1);
gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.INTROCode.GDBTN_9595RETURNObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595INICIARObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595INICIARObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeOutQuad", 1.5, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.INTROCode.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.INTROCode.GDBTN_9595RETURNObjects1[k] = gdjs.INTROCode.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.INTROCode.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21988652);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.INTROCode.GDBTN_9595RETURNObjects1 */
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.2);
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Cena_1.mp3", 3, false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.INTROCode.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( !(gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.INTROCode.GDBTN_9595RETURNObjects1[k] = gdjs.INTROCode.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.INTROCode.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.INTROCode.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Animation").setAnimationName("Padrao_BTN");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.INTROCode.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.INTROCode.GDBTN_9595RETURNObjects1[k] = gdjs.INTROCode.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.INTROCode.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.INTROCode.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Animation").setAnimationName("Selecionada_BTN");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.INTROCode.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.INTROCode.GDBTN_9595RETURNObjects1[k] = gdjs.INTROCode.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.INTROCode.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.INTROCode.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_INICIAR"), gdjs.INTROCode.GDBTN_9595INICIARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.INTROCode.GDBTN_9595INICIARObjects1.length;i<l;++i) {
    if ( gdjs.INTROCode.GDBTN_9595INICIARObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.INTROCode.GDBTN_9595INICIARObjects1[k] = gdjs.INTROCode.GDBTN_9595INICIARObjects1[i];
        ++k;
    }
}
gdjs.INTROCode.GDBTN_9595INICIARObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Start.mp3", false, 40, 1);
}

{ //Subevents
gdjs.INTROCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_INICIAR"), gdjs.INTROCode.GDBTN_9595INICIARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.INTROCode.GDBTN_9595INICIARObjects1.length;i<l;++i) {
    if ( gdjs.INTROCode.GDBTN_9595INICIARObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.INTROCode.GDBTN_9595INICIARObjects1[k] = gdjs.INTROCode.GDBTN_9595INICIARObjects1[i];
        ++k;
    }
}
gdjs.INTROCode.GDBTN_9595INICIARObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.INTROCode.GDBTN_9595INICIARObjects1 */
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595INICIARObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595INICIARObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_INICIAR"), gdjs.INTROCode.GDBTN_9595INICIARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.INTROCode.GDBTN_9595INICIARObjects1.length;i<l;++i) {
    if ( gdjs.INTROCode.GDBTN_9595INICIARObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.INTROCode.GDBTN_9595INICIARObjects1[k] = gdjs.INTROCode.GDBTN_9595INICIARObjects1[i];
        ++k;
    }
}
gdjs.INTROCode.GDBTN_9595INICIARObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.INTROCode.GDBTN_9595INICIARObjects1 */
{for(var i = 0, len = gdjs.INTROCode.GDBTN_9595INICIARObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDBTN_9595INICIARObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.INTROCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.INTROCode.GDCHAR_95951Objects1.length = 0;
gdjs.INTROCode.GDCHAR_95951Objects2.length = 0;
gdjs.INTROCode.GDCHAR_95951Objects3.length = 0;
gdjs.INTROCode.GDQUADROObjects1.length = 0;
gdjs.INTROCode.GDQUADROObjects2.length = 0;
gdjs.INTROCode.GDQUADROObjects3.length = 0;
gdjs.INTROCode.GDBTN_9595INICIARObjects1.length = 0;
gdjs.INTROCode.GDBTN_9595INICIARObjects2.length = 0;
gdjs.INTROCode.GDBTN_9595INICIARObjects3.length = 0;
gdjs.INTROCode.GDBTN_9595RETURNObjects1.length = 0;
gdjs.INTROCode.GDBTN_9595RETURNObjects2.length = 0;
gdjs.INTROCode.GDBTN_9595RETURNObjects3.length = 0;
gdjs.INTROCode.GDTITULO_9595MISSAOObjects1.length = 0;
gdjs.INTROCode.GDTITULO_9595MISSAOObjects2.length = 0;
gdjs.INTROCode.GDTITULO_9595MISSAOObjects3.length = 0;
gdjs.INTROCode.GDTXT_95950Objects1.length = 0;
gdjs.INTROCode.GDTXT_95950Objects2.length = 0;
gdjs.INTROCode.GDTXT_95950Objects3.length = 0;
gdjs.INTROCode.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.INTROCode.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.INTROCode.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.INTROCode.GDCURSORObjects1.length = 0;
gdjs.INTROCode.GDCURSORObjects2.length = 0;
gdjs.INTROCode.GDCURSORObjects3.length = 0;
gdjs.INTROCode.GDBTN_9595DNVObjects1.length = 0;
gdjs.INTROCode.GDBTN_9595DNVObjects2.length = 0;
gdjs.INTROCode.GDBTN_9595DNVObjects3.length = 0;

gdjs.INTROCode.eventsList4(runtimeScene);
gdjs.INTROCode.GDCHAR_95951Objects1.length = 0;
gdjs.INTROCode.GDCHAR_95951Objects2.length = 0;
gdjs.INTROCode.GDCHAR_95951Objects3.length = 0;
gdjs.INTROCode.GDQUADROObjects1.length = 0;
gdjs.INTROCode.GDQUADROObjects2.length = 0;
gdjs.INTROCode.GDQUADROObjects3.length = 0;
gdjs.INTROCode.GDBTN_9595INICIARObjects1.length = 0;
gdjs.INTROCode.GDBTN_9595INICIARObjects2.length = 0;
gdjs.INTROCode.GDBTN_9595INICIARObjects3.length = 0;
gdjs.INTROCode.GDBTN_9595RETURNObjects1.length = 0;
gdjs.INTROCode.GDBTN_9595RETURNObjects2.length = 0;
gdjs.INTROCode.GDBTN_9595RETURNObjects3.length = 0;
gdjs.INTROCode.GDTITULO_9595MISSAOObjects1.length = 0;
gdjs.INTROCode.GDTITULO_9595MISSAOObjects2.length = 0;
gdjs.INTROCode.GDTITULO_9595MISSAOObjects3.length = 0;
gdjs.INTROCode.GDTXT_95950Objects1.length = 0;
gdjs.INTROCode.GDTXT_95950Objects2.length = 0;
gdjs.INTROCode.GDTXT_95950Objects3.length = 0;
gdjs.INTROCode.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.INTROCode.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.INTROCode.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.INTROCode.GDCURSORObjects1.length = 0;
gdjs.INTROCode.GDCURSORObjects2.length = 0;
gdjs.INTROCode.GDCURSORObjects3.length = 0;
gdjs.INTROCode.GDBTN_9595DNVObjects1.length = 0;
gdjs.INTROCode.GDBTN_9595DNVObjects2.length = 0;
gdjs.INTROCode.GDBTN_9595DNVObjects3.length = 0;


return;

}

gdjs['INTROCode'] = gdjs.INTROCode;

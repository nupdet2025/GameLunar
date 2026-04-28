gdjs.CENA_956_95ERROCode = {};
gdjs.CENA_956_95ERROCode.localVariables = [];
gdjs.CENA_956_95ERROCode.idToCallbackMap = new Map();
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1= [];
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects2= [];
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects3= [];
gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects1= [];
gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects2= [];
gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects3= [];
gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects1= [];
gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects2= [];
gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects3= [];
gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects1= [];
gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects2= [];
gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects3= [];
gdjs.CENA_956_95ERROCode.GDFUNDO_9595PADRAOObjects1= [];
gdjs.CENA_956_95ERROCode.GDFUNDO_9595PADRAOObjects2= [];
gdjs.CENA_956_95ERROCode.GDFUNDO_9595PADRAOObjects3= [];
gdjs.CENA_956_95ERROCode.GDCURSORObjects1= [];
gdjs.CENA_956_95ERROCode.GDCURSORObjects2= [];
gdjs.CENA_956_95ERROCode.GDCURSORObjects3= [];
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1= [];
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects2= [];
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects3= [];


gdjs.CENA_956_95ERROCode.asyncCallback24170668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_956_95ERROCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BALAO_NEGATIVA_4"), gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects3);
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects3.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects3[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1.3, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
gdjs.CENA_956_95ERROCode.localVariables.length = 0;
}
gdjs.CENA_956_95ERROCode.idToCallbackMap.set(24170668, gdjs.CENA_956_95ERROCode.asyncCallback24170668);
gdjs.CENA_956_95ERROCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_956_95ERROCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.CENA_956_95ERROCode.asyncCallback24170668(runtimeScene, asyncObjectsList)), 24170668, asyncObjectsList);
}
}

}


};gdjs.CENA_956_95ERROCode.asyncCallback30731196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_956_95ERROCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("QUADRO_QUASE"), gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Quase.mp3", 5, false, 90, 1);
}
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects2.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects2[i].getBehavior("Tween").addObjectPositionTween2("QUADRO", 672, 214, "easeOutBounce", 0.95, false);
}
}

{ //Subevents
gdjs.CENA_956_95ERROCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.CENA_956_95ERROCode.localVariables.length = 0;
}
gdjs.CENA_956_95ERROCode.idToCallbackMap.set(30731196, gdjs.CENA_956_95ERROCode.asyncCallback30731196);
gdjs.CENA_956_95ERROCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_956_95ERROCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.CENA_956_95ERROCode.asyncCallback30731196(runtimeScene, asyncObjectsList)), 30731196, asyncObjectsList);
}
}

}


};gdjs.CENA_956_95ERROCode.asyncCallback26567428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_956_95ERROCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CHAR_2"), gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects2);

{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects2.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects2[i].getBehavior("Tween").addObjectPositionYTween2("subida", 245, "linear", 1.5, false);
}
}
gdjs.CENA_956_95ERROCode.localVariables.length = 0;
}
gdjs.CENA_956_95ERROCode.idToCallbackMap.set(26567428, gdjs.CENA_956_95ERROCode.asyncCallback26567428);
gdjs.CENA_956_95ERROCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_956_95ERROCode.localVariables);
for (const obj of gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects1) asyncObjectsList.addObject("CHAR_2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_956_95ERROCode.asyncCallback26567428(runtimeScene, asyncObjectsList)), 26567428, asyncObjectsList);
}
}

}


};gdjs.CENA_956_95ERROCode.asyncCallback30716700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_956_95ERROCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BTN_DNV"), gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects2);

{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_6_QUESTION_4", false);
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "INTRO");
}
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects2.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects2[i].getBehavior("Scale").setScale(1);
}
}
gdjs.CENA_956_95ERROCode.localVariables.length = 0;
}
gdjs.CENA_956_95ERROCode.idToCallbackMap.set(30716700, gdjs.CENA_956_95ERROCode.asyncCallback30716700);
gdjs.CENA_956_95ERROCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_956_95ERROCode.localVariables);
for (const obj of gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1) asyncObjectsList.addObject("BTN_DNV", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_956_95ERROCode.asyncCallback30716700(runtimeScene, asyncObjectsList)), 30716700, asyncObjectsList);
}
}

}


};gdjs.CENA_956_95ERROCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.CENA_956_95ERROCode.GDCURSORObjects1);
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDCURSORObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.CENA_956_95ERROCode.GDCURSORObjects1);
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDCURSORObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDCURSORObjects1[i].hide(false);
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
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "INTRO");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Trilha_sonora.mp3", 1, true, 90, 1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Sounds and Music/Sound_WrongPass.mp3", 2, false, 5, 1);
}

{ //Subevents
gdjs.CENA_956_95ERROCode.eventsList1(runtimeScene);} //End of subevents
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
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Negativa_4.mp3", 3, false, 80, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CHAR_2"), gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects1);
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(10, 5, 5, 3, 4, 4, true, null);
}
}
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects1[i].getBehavior("Tween").addObjectPositionYTween2("subida", 200, "linear", 1.5, false);
}
}

{ //Subevents
gdjs.CENA_956_95ERROCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 3));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12232764);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_DNV"), gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1);
gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1);
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeOutQuad", 1.5, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15162532);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1 */
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 3, 0, 0.2);
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Negativa_4.mp3", 4, false, 80, 1);
}
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( !(gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Animation").setAnimationName("Padrao_BTN");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Animation").setAnimationName("Selecionada_BTN");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_DNV"), gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length;i<l;++i) {
    if ( gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[k] = gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[i];
        ++k;
    }
}
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Start.mp3", false, 40, 1);
}

{ //Subevents
gdjs.CENA_956_95ERROCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_DNV"), gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length;i<l;++i) {
    if ( gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[k] = gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[i];
        ++k;
    }
}
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1 */
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_DNV"), gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length;i<l;++i) {
    if ( gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[k] = gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[i];
        ++k;
    }
}
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1 */
{for(var i = 0, len = gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length ;i < len;++i) {
    gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.CENA_956_95ERROCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length = 0;
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects2.length = 0;
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects3.length = 0;
gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects1.length = 0;
gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects2.length = 0;
gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects3.length = 0;
gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects1.length = 0;
gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects2.length = 0;
gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects3.length = 0;
gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects1.length = 0;
gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects2.length = 0;
gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects3.length = 0;
gdjs.CENA_956_95ERROCode.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_956_95ERROCode.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_956_95ERROCode.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.CENA_956_95ERROCode.GDCURSORObjects1.length = 0;
gdjs.CENA_956_95ERROCode.GDCURSORObjects2.length = 0;
gdjs.CENA_956_95ERROCode.GDCURSORObjects3.length = 0;
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects2.length = 0;
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects3.length = 0;

gdjs.CENA_956_95ERROCode.eventsList4(runtimeScene);
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects1.length = 0;
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects2.length = 0;
gdjs.CENA_956_95ERROCode.GDBTN_9595RETURNObjects3.length = 0;
gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects1.length = 0;
gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects2.length = 0;
gdjs.CENA_956_95ERROCode.GDCHAR_95952Objects3.length = 0;
gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects1.length = 0;
gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects2.length = 0;
gdjs.CENA_956_95ERROCode.GDQUADRO_9595QUASEObjects3.length = 0;
gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects1.length = 0;
gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects2.length = 0;
gdjs.CENA_956_95ERROCode.GDBALAO_9595NEGATIVA_95954Objects3.length = 0;
gdjs.CENA_956_95ERROCode.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_956_95ERROCode.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_956_95ERROCode.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.CENA_956_95ERROCode.GDCURSORObjects1.length = 0;
gdjs.CENA_956_95ERROCode.GDCURSORObjects2.length = 0;
gdjs.CENA_956_95ERROCode.GDCURSORObjects3.length = 0;
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects2.length = 0;
gdjs.CENA_956_95ERROCode.GDBTN_9595DNVObjects3.length = 0;


return;

}

gdjs['CENA_956_95ERROCode'] = gdjs.CENA_956_95ERROCode;

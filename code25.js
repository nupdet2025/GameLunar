gdjs.CENA_9510_95RecapCode = {};
gdjs.CENA_9510_95RecapCode.localVariables = [];
gdjs.CENA_9510_95RecapCode.idToCallbackMap = new Map();
gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects1= [];
gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects2= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects2= [];
gdjs.CENA_9510_95RecapCode.GDQUADRO_9595MISSAOObjects1= [];
gdjs.CENA_9510_95RecapCode.GDQUADRO_9595MISSAOObjects2= [];
gdjs.CENA_9510_95RecapCode.GDTITULO_95951Objects1= [];
gdjs.CENA_9510_95RecapCode.GDTITULO_95951Objects2= [];
gdjs.CENA_9510_95RecapCode.GDBALAOObjects1= [];
gdjs.CENA_9510_95RecapCode.GDBALAOObjects2= [];
gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1= [];
gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects2= [];
gdjs.CENA_9510_95RecapCode.GDQUADROObjects1= [];
gdjs.CENA_9510_95RecapCode.GDQUADROObjects2= [];
gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1= [];
gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects2= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects2= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects2= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects2= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects2= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects2= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1= [];
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects2= [];
gdjs.CENA_9510_95RecapCode.GDFUNDO_9595PADRAOObjects1= [];
gdjs.CENA_9510_95RecapCode.GDFUNDO_9595PADRAOObjects2= [];
gdjs.CENA_9510_95RecapCode.GDCURSORObjects1= [];
gdjs.CENA_9510_95RecapCode.GDCURSORObjects2= [];
gdjs.CENA_9510_95RecapCode.GDBTN_9595DNVObjects1= [];
gdjs.CENA_9510_95RecapCode.GDBTN_9595DNVObjects2= [];


gdjs.CENA_9510_95RecapCode.asyncCallback24504604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_9510_95RecapCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CHAR_3"), gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects2);

{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects2.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects2[i].getBehavior("Tween").addObjectPositionYTween2("subida", 245, "linear", 1.5, false);
}
}
gdjs.CENA_9510_95RecapCode.localVariables.length = 0;
}
gdjs.CENA_9510_95RecapCode.idToCallbackMap.set(24504604, gdjs.CENA_9510_95RecapCode.asyncCallback24504604);
gdjs.CENA_9510_95RecapCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_9510_95RecapCode.localVariables);
for (const obj of gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects1) asyncObjectsList.addObject("CHAR_3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_9510_95RecapCode.asyncCallback24504604(runtimeScene, asyncObjectsList)), 24504604, asyncObjectsList);
}
}

}


};gdjs.CENA_9510_95RecapCode.asyncCallback18279924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_9510_95RecapCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BTN_FINALIZAR"), gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects2);

{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FINAL_1", false);
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "INTRO");
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects2.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects2[i].getBehavior("Scale").setScale(1);
}
}
gdjs.CENA_9510_95RecapCode.localVariables.length = 0;
}
gdjs.CENA_9510_95RecapCode.idToCallbackMap.set(18279924, gdjs.CENA_9510_95RecapCode.asyncCallback18279924);
gdjs.CENA_9510_95RecapCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_9510_95RecapCode.localVariables);
for (const obj of gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1) asyncObjectsList.addObject("BTN_FINALIZAR", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.3), (runtimeScene) => (gdjs.CENA_9510_95RecapCode.asyncCallback18279924(runtimeScene, asyncObjectsList)), 18279924, asyncObjectsList);
}
}

}


};gdjs.CENA_9510_95RecapCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.CENA_9510_95RecapCode.GDCURSORObjects1);
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDCURSORObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.CENA_9510_95RecapCode.GDCURSORObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDCURSORObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDCURSORObjects1[i].hide(false);
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
{
gdjs.copyArray(runtimeScene.getObjects("CHAR_3"), gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects1);
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(10, 5, 5, 3, 4, 4, true, null);
}
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects1[i].getBehavior("Tween").addObjectPositionYTween2("subida", 200, "linear", 1.5, false);
}
}

{ //Subevents
gdjs.CENA_9510_95RecapCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("BALAO"), gdjs.CENA_9510_95RecapCode.GDBALAOObjects1);
gdjs.copyArray(runtimeScene.getObjects("TITULO_1"), gdjs.CENA_9510_95RecapCode.GDTITULO_95951Objects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Trilha_sonora.mp3", 1, true, 90, 1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__recap.mp3", 2, false, 80, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "INTRO");
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTITULO_95951Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTITULO_95951Objects1[i].getBehavior("Tween").addObjectPositionTween2("QUADRO", 645, 128, "bouncePast", 0.5, false);
}
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDBALAOObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDBALAOObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1.3, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17871908);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QUADRO"), gdjs.CENA_9510_95RecapCode.GDQUADROObjects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_1"), gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_2"), gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_3"), gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_4"), gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_5"), gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_6"), gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_7"), gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1);
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("Tween").addObjectScaleTween3("Pulso", 0.65, "easeOutBounce", 1, false, true);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("Tween").addObjectScaleTween3("Pulso", 0.65, "easeOutBounce", 1, false, true);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("Tween").addObjectScaleTween3("Pulso", 0.65, "easeOutBounce", 1, false, true);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("Tween").addObjectScaleTween3("Pulso", 0.65, "easeOutBounce", 1, false, true);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("Tween").addObjectScaleTween3("Pulso", 0.65, "easeOutBounce", 1, false, true);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("Tween").addObjectScaleTween3("Pulso", 0.65, "easeOutBounce", 1, false, true);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("Tween").addObjectScaleTween3("Pulso", 0.65, "easeOutBounce", 1, false, true);
}
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDQUADROObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDQUADROObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_1"), gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_2"), gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_3"), gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_4"), gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_5"), gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_6"), gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_7"), gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24922660);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1 */
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.2);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("Scale").setScale(0.65);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_1"), gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_2"), gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_3"), gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_4"), gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_5"), gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_6"), gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_7"), gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1 */
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("Scale").setScale(0.65);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("Scale").setScale(0.65);
}
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("Animation").setAnimationName("Padrao");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("Animation").setAnimationName("Padrao");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("Animation").setAnimationName("Padrao");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("Animation").setAnimationName("Padrao");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("Animation").setAnimationName("Padrao");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("Animation").setAnimationName("Padrao");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("Animation").setAnimationName("Padrao");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_1"), gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_2"), gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_3"), gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_4"), gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_5"), gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_6"), gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_7"), gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1 */
/* Reuse gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1 */
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("Scale").setScale(0.5);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("Scale").setScale(0.5);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("Scale").setScale(0.5);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("Scale").setScale(0.5);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("Scale").setScale(0.5);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("Scale").setScale(0.5);
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("Animation").setAnimationName("Selecionada");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("Animation").setAnimationName("Selecionada");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("Animation").setAnimationName("Selecionada");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("Animation").setAnimationName("Selecionada");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("Animation").setAnimationName("Selecionada");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("Animation").setAnimationName("Selecionada");
}
for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("Animation").setAnimationName("Selecionada");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_1"), gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_2"), gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_3"), gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_4"), gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_5"), gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_6"), gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1);
gdjs.copyArray(runtimeScene.getObjects("STAR_7"), gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("Tween").hasFinished("Pulso") ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("Tween").hasFinished("Pulso") ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("Tween").hasFinished("Pulso") ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("Tween").hasFinished("Pulso") ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("Tween").hasFinished("Pulso") ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("Tween").hasFinished("Pulso") ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("Tween").hasFinished("Pulso") ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2));
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_7"), gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TEXTOS"), gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Correto.mp3", 2, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Recap_7.mp3", 3, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Animation").setAnimationName("TXT_7");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_6"), gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TEXTOS"), gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Correto.mp3", 2, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Recap_6.mp3", 3, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Animation").setAnimationName("TXT_6");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_5"), gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TEXTOS"), gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Correto.mp3", 2, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Recap_5.mp3", 3, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Animation").setAnimationName("TXT_5");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_4"), gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TEXTOS"), gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Correto.mp3", 2, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Recap_4.mp3", 3, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Animation").setAnimationName("TXT_4");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_3"), gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TEXTOS"), gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Correto.mp3", 2, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Recap_3.mp3", 3, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Animation").setAnimationName("TXT_3");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_2"), gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TEXTOS"), gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Correto.mp3", 2, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Recap_2.mp3", 3, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Animation").setAnimationName("TXT_2");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("STAR_1"), gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[k] = gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TEXTOS"), gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Correto.mp3", 2, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Recap_1.mp3", 3, false, 60, 1);
}
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1[i].getBehavior("Animation").setAnimationName("TXT_1");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 7);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19226716);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26533220);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_FINALIZAR"), gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1);
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_FINALIZAR"), gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 7);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[k] = gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12947284);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/Sound_CorrectPass.mp3", false, 40, 1);
}

{ //Subevents
gdjs.CENA_9510_95RecapCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_FINALIZAR"), gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[k] = gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1 */
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_FINALIZAR"), gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length;i<l;++i) {
    if ( gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[k] = gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[i];
        ++k;
    }
}
gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1 */
{for(var i = 0, len = gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length ;i < len;++i) {
    gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
}

}


};

gdjs.CENA_9510_95RecapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDQUADRO_9595MISSAOObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDQUADRO_9595MISSAOObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDTITULO_95951Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDTITULO_95951Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDBALAOObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDBALAOObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDQUADROObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDQUADROObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDCURSORObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDCURSORObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDBTN_9595DNVObjects2.length = 0;

gdjs.CENA_9510_95RecapCode.eventsList2(runtimeScene);
gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDCHAR_95953Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95951Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDQUADRO_9595MISSAOObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDQUADRO_9595MISSAOObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDTITULO_95951Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDTITULO_95951Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDBALAOObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDBALAOObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDBTN_9595FINALIZARObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDQUADROObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDQUADROObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDTEXTOSObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95952Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95953Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95954Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95955Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95956Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDSTAR_95957Objects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDCURSORObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDCURSORObjects2.length = 0;
gdjs.CENA_9510_95RecapCode.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_9510_95RecapCode.GDBTN_9595DNVObjects2.length = 0;


return;

}

gdjs['CENA_9510_95RecapCode'] = gdjs.CENA_9510_95RecapCode;

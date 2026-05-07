gdjs.CENA_954_95QUESTION_952Code = {};
gdjs.CENA_954_95QUESTION_952Code.localVariables = [];
gdjs.CENA_954_95QUESTION_952Code.idToCallbackMap = new Map();
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects3= [];
gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects3= [];
gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects3= [];
gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects3= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects3= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects3= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects3= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects3= [];
gdjs.CENA_954_95QUESTION_952Code.GDFUNDO_9595PADRAOObjects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDFUNDO_9595PADRAOObjects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDFUNDO_9595PADRAOObjects3= [];
gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects3= [];
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595DNVObjects1= [];
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595DNVObjects2= [];
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595DNVObjects3= [];


gdjs.CENA_954_95QUESTION_952Code.asyncCallback10485484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CHAR_4"), gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects2);

{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects2[i].getBehavior("Tween").addObjectPositionYTween2("subida", 245, "linear", 1.5, false);
}
}
gdjs.CENA_954_95QUESTION_952Code.localVariables.length = 0;
}
gdjs.CENA_954_95QUESTION_952Code.idToCallbackMap.set(10485484, gdjs.CENA_954_95QUESTION_952Code.asyncCallback10485484);
gdjs.CENA_954_95QUESTION_952Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
for (const obj of gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects1) asyncObjectsList.addObject("CHAR_4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_954_95QUESTION_952Code.asyncCallback10485484(runtimeScene, asyncObjectsList)), 10485484, asyncObjectsList);
}
}

}


};gdjs.CENA_954_95QUESTION_952Code.asyncCallback10488636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("ALT2_A"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2);
gdjs.copyArray(runtimeScene.getObjects("ALT2_B"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2);
gdjs.copyArray(runtimeScene.getObjects("ALT2_C"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2);
gdjs.copyArray(runtimeScene.getObjects("ALT2_D"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2);
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Question_2.mp3", 3, false, 80, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
gdjs.CENA_954_95QUESTION_952Code.localVariables.length = 0;
}
gdjs.CENA_954_95QUESTION_952Code.idToCallbackMap.set(10488636, gdjs.CENA_954_95QUESTION_952Code.asyncCallback10488636);
gdjs.CENA_954_95QUESTION_952Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.CENA_954_95QUESTION_952Code.asyncCallback10488636(runtimeScene, asyncObjectsList)), 10488636, asyncObjectsList);
}
}

}


};gdjs.CENA_954_95QUESTION_952Code.asyncCallback10496444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_4_ERRO", false);
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "INTRO");
}
gdjs.CENA_954_95QUESTION_952Code.localVariables.length = 0;
}
gdjs.CENA_954_95QUESTION_952Code.idToCallbackMap.set(10496444, gdjs.CENA_954_95QUESTION_952Code.asyncCallback10496444);
gdjs.CENA_954_95QUESTION_952Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_954_95QUESTION_952Code.asyncCallback10496444(runtimeScene, asyncObjectsList)), 10496444, asyncObjectsList);
}
}

}


};gdjs.CENA_954_95QUESTION_952Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ALT2_A"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Wrong.mp3", false, 60, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i].getBehavior("Animation").setAnimationName("ERRADA_A");
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 15, 5, 1, 0.6, false, null);
}
}

{ //Subevents
gdjs.CENA_954_95QUESTION_952Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_A"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i].getBehavior("Scale").setScale(0.98);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i].getBehavior("Animation").setAnimationName("SELECIONADA");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_A"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length;i<l;++i) {
    if ( !(gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2[i].getBehavior("Animation").setAnimationName("PADRAO");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_A"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


};gdjs.CENA_954_95QUESTION_952Code.asyncCallback10504780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_4_ACERTO", false);
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "INTRO");
}
gdjs.CENA_954_95QUESTION_952Code.localVariables.length = 0;
}
gdjs.CENA_954_95QUESTION_952Code.idToCallbackMap.set(10504780, gdjs.CENA_954_95QUESTION_952Code.asyncCallback10504780);
gdjs.CENA_954_95QUESTION_952Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_954_95QUESTION_952Code.asyncCallback10504780(runtimeScene, asyncObjectsList)), 10504780, asyncObjectsList);
}
}

}


};gdjs.CENA_954_95QUESTION_952Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ALT2_B"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Correct2.mp3", false, 80, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i].getBehavior("Animation").setAnimationName("CORRETA");
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 3, 3, 3, 1, false, null);
}
}

{ //Subevents
gdjs.CENA_954_95QUESTION_952Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_B"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i].getBehavior("Scale").setScale(0.98);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i].getBehavior("Animation").setAnimationName("SELECIONADA");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_B"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length;i<l;++i) {
    if ( !(gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2[i].getBehavior("Animation").setAnimationName("PADRAO");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_B"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


};gdjs.CENA_954_95QUESTION_952Code.asyncCallback10513772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_4_ERRO", false);
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "INTRO");
}
gdjs.CENA_954_95QUESTION_952Code.localVariables.length = 0;
}
gdjs.CENA_954_95QUESTION_952Code.idToCallbackMap.set(10513772, gdjs.CENA_954_95QUESTION_952Code.asyncCallback10513772);
gdjs.CENA_954_95QUESTION_952Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.8), (runtimeScene) => (gdjs.CENA_954_95QUESTION_952Code.asyncCallback10513772(runtimeScene, asyncObjectsList)), 10513772, asyncObjectsList);
}
}

}


};gdjs.CENA_954_95QUESTION_952Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ALT2_C"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Wrong.mp3", false, 80, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i].getBehavior("Animation").setAnimationName("ERRADA");
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 15, 5, 1, 0.6, false, null);
}
}

{ //Subevents
gdjs.CENA_954_95QUESTION_952Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_C"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i].getBehavior("Scale").setScale(0.98);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i].getBehavior("Animation").setAnimationName("SELECIONADA");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_C"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length;i<l;++i) {
    if ( !(gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2[i].getBehavior("Animation").setAnimationName("PADRAO");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_C"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


};gdjs.CENA_954_95QUESTION_952Code.asyncCallback10522948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_4_ERRO", false);
}
gdjs.CENA_954_95QUESTION_952Code.localVariables.length = 0;
}
gdjs.CENA_954_95QUESTION_952Code.idToCallbackMap.set(10522948, gdjs.CENA_954_95QUESTION_952Code.asyncCallback10522948);
gdjs.CENA_954_95QUESTION_952Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_954_95QUESTION_952Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_954_95QUESTION_952Code.asyncCallback10522948(runtimeScene, asyncObjectsList)), 10522948, asyncObjectsList);
}
}

}


};gdjs.CENA_954_95QUESTION_952Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ALT2_D"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Wrong.mp3", false, 60, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i].getBehavior("Animation").setAnimationName("ERRADA");
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 15, 5, 1, 0.6, false, null);
}
}

{ //Subevents
gdjs.CENA_954_95QUESTION_952Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_D"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i].getBehavior("Scale").setScale(0.98);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i].getBehavior("Animation").setAnimationName("SELECIONADA");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_D"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length;i<l;++i) {
    if ( !(gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2[i].getBehavior("Animation").setAnimationName("PADRAO");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT2_D"), gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1[k] = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


};gdjs.CENA_954_95QUESTION_952Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects1[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("BALAO_2"), gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Trilha_sonora.mp3", 1, true, 90, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "INTRO");
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__ Question2_Balao.mp3", 2, false, 80, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CHAR_4"), gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects1);
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(10, 5, 5, 3, 4, 4, true, null);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects1[i].getBehavior("Tween").addObjectPositionYTween2("subida", 200, "linear", 1.5, false);
}
}

{ //Subevents
gdjs.CENA_954_95QUESTION_952Code.eventsList0(runtimeScene);} //End of subevents
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10486860);
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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10488012);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QUESTION_2"), gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects1);
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects1[i].getBehavior("Tween").addObjectPositionTween2("QUADRO", 900, 78, "bouncePast", 1, false);
}
}

{ //Subevents
gdjs.CENA_954_95QUESTION_952Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 3));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CENA_954_95QUESTION_952Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CENA_954_95QUESTION_952Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CENA_954_95QUESTION_952Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CENA_954_95QUESTION_952Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 3));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10529156);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1);
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 3));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10531332);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1 */
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.2);
}
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 3, 0, 0.2);
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Question_2.mp3", 4, false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i].getBehavior("Animation").setAnimationName("Selecionada_BTN");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( !(gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1[i].getBehavior("Animation").setAnimationName("Padrao_BTN");
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

gdjs.CENA_954_95QUESTION_952Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595DNVObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595DNVObjects3.length = 0;

gdjs.CENA_954_95QUESTION_952Code.eventsList10(runtimeScene);
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595RETURNObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCHAR_95954Objects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDQUESTION_95952Objects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBALAO_95952Objects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595AObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595BObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595CObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDALT2_9595DObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDCURSORObjects3.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595DNVObjects2.length = 0;
gdjs.CENA_954_95QUESTION_952Code.GDBTN_9595DNVObjects3.length = 0;


return;

}

gdjs['CENA_954_95QUESTION_952Code'] = gdjs.CENA_954_95QUESTION_952Code;

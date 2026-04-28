gdjs.CENA_959_95QUESTION_957Code = {};
gdjs.CENA_959_95QUESTION_957Code.localVariables = [];
gdjs.CENA_959_95QUESTION_957Code.idToCallbackMap = new Map();
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects3= [];
gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects3= [];
gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects3= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects3= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects3= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects3= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects3= [];
gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects3= [];
gdjs.CENA_959_95QUESTION_957Code.GDFUNDO_9595PADRAOObjects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDFUNDO_9595PADRAOObjects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDFUNDO_9595PADRAOObjects3= [];
gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects3= [];
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595DNVObjects1= [];
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595DNVObjects2= [];
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595DNVObjects3= [];


gdjs.CENA_959_95QUESTION_957Code.asyncCallback23508892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CHAR_4"), gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects2);

{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects2[i].getBehavior("Tween").addObjectPositionYTween2("subida", 245, "linear", 1.5, false);
}
}
gdjs.CENA_959_95QUESTION_957Code.localVariables.length = 0;
}
gdjs.CENA_959_95QUESTION_957Code.idToCallbackMap.set(23508892, gdjs.CENA_959_95QUESTION_957Code.asyncCallback23508892);
gdjs.CENA_959_95QUESTION_957Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
for (const obj of gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects1) asyncObjectsList.addObject("CHAR_4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_959_95QUESTION_957Code.asyncCallback23508892(runtimeScene, asyncObjectsList)), 23508892, asyncObjectsList);
}
}

}


};gdjs.CENA_959_95QUESTION_957Code.asyncCallback23511028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("ALT_7A"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2);
gdjs.copyArray(runtimeScene.getObjects("ALT_7B"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2);
gdjs.copyArray(runtimeScene.getObjects("ALT_7C"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2);
gdjs.copyArray(runtimeScene.getObjects("ALT_7D"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2);
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Question_7.mp3", 3, false, 80, 1);
}
gdjs.CENA_959_95QUESTION_957Code.localVariables.length = 0;
}
gdjs.CENA_959_95QUESTION_957Code.idToCallbackMap.set(23511028, gdjs.CENA_959_95QUESTION_957Code.asyncCallback23511028);
gdjs.CENA_959_95QUESTION_957Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.CENA_959_95QUESTION_957Code.asyncCallback23511028(runtimeScene, asyncObjectsList)), 23511028, asyncObjectsList);
}
}

}


};gdjs.CENA_959_95QUESTION_957Code.asyncCallback23517220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "CENA_9_ERRO");
}
gdjs.CENA_959_95QUESTION_957Code.localVariables.length = 0;
}
gdjs.CENA_959_95QUESTION_957Code.idToCallbackMap.set(23517220, gdjs.CENA_959_95QUESTION_957Code.asyncCallback23517220);
gdjs.CENA_959_95QUESTION_957Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_959_95QUESTION_957Code.asyncCallback23517220(runtimeScene, asyncObjectsList)), 23517220, asyncObjectsList);
}
}

}


};gdjs.CENA_959_95QUESTION_957Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ALT_7A"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Wrong.mp3", false, 60, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i].getBehavior("Animation").setAnimationName("ERRADA_A");
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 15, 5, 1, 0.6, false, null);
}
}

{ //Subevents
gdjs.CENA_959_95QUESTION_957Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7A"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i].getBehavior("Scale").setScale(0.98);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i].getBehavior("Animation").setAnimationName("Selecionada_A");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7A"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length;i<l;++i) {
    if ( !(gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2[i].getBehavior("Animation").setAnimationName("Padrao_A");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7A"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


};gdjs.CENA_959_95QUESTION_957Code.asyncCallback23523372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_9_ACERTO", false);
}
gdjs.CENA_959_95QUESTION_957Code.localVariables.length = 0;
}
gdjs.CENA_959_95QUESTION_957Code.idToCallbackMap.set(23523372, gdjs.CENA_959_95QUESTION_957Code.asyncCallback23523372);
gdjs.CENA_959_95QUESTION_957Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_959_95QUESTION_957Code.asyncCallback23523372(runtimeScene, asyncObjectsList)), 23523372, asyncObjectsList);
}
}

}


};gdjs.CENA_959_95QUESTION_957Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ALT_7B"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Correct2.mp3", false, 80, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i].getBehavior("Animation").setAnimationName("CORRETA_B");
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 3, 3, 3, 1, false, null);
}
}

{ //Subevents
gdjs.CENA_959_95QUESTION_957Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7B"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i].getBehavior("Scale").setScale(0.98);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i].getBehavior("Animation").setAnimationName("Selecionada_A");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7B"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length;i<l;++i) {
    if ( !(gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2[i].getBehavior("Animation").setAnimationName("Padrao_B");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7B"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


};gdjs.CENA_959_95QUESTION_957Code.asyncCallback23529580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_9_ERRO", false);
}
gdjs.CENA_959_95QUESTION_957Code.localVariables.length = 0;
}
gdjs.CENA_959_95QUESTION_957Code.idToCallbackMap.set(23529580, gdjs.CENA_959_95QUESTION_957Code.asyncCallback23529580);
gdjs.CENA_959_95QUESTION_957Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.8), (runtimeScene) => (gdjs.CENA_959_95QUESTION_957Code.asyncCallback23529580(runtimeScene, asyncObjectsList)), 23529580, asyncObjectsList);
}
}

}


};gdjs.CENA_959_95QUESTION_957Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ALT_7C"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Wrong.mp3", false, 80, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i].getBehavior("Animation").setAnimationName("ERRADA_C");
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 15, 5, 1, 0.6, false, null);
}
}

{ //Subevents
gdjs.CENA_959_95QUESTION_957Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7C"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i].getBehavior("Scale").setScale(0.98);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i].getBehavior("Animation").setAnimationName("Selecionada_C");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7C"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length;i<l;++i) {
    if ( !(gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2[i].getBehavior("Animation").setAnimationName("Padrao_C");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7C"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


};gdjs.CENA_959_95QUESTION_957Code.asyncCallback23535780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CENA_9_ERRO", false);
}
gdjs.CENA_959_95QUESTION_957Code.localVariables.length = 0;
}
gdjs.CENA_959_95QUESTION_957Code.idToCallbackMap.set(23535780, gdjs.CENA_959_95QUESTION_957Code.asyncCallback23535780);
gdjs.CENA_959_95QUESTION_957Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CENA_959_95QUESTION_957Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.CENA_959_95QUESTION_957Code.asyncCallback23535780(runtimeScene, asyncObjectsList)), 23535780, asyncObjectsList);
}
}

}


};gdjs.CENA_959_95QUESTION_957Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ALT_7D"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "ELEMENTOS/Sounds and Music/BTN_Wrong.mp3", false, 60, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i].getBehavior("Animation").setAnimationName("ERRADA_D");
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 15, 5, 1, 0.6, false, null);
}
}

{ //Subevents
gdjs.CENA_959_95QUESTION_957Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7D"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i].getBehavior("Scale").setScale(0.98);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i].getBehavior("Animation").setAnimationName("Selecionada_D");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7D"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length;i<l;++i) {
    if ( !(gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2[i].getBehavior("Animation").setAnimationName("Padrao_D");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ALT_7D"), gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1[k] = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


};gdjs.CENA_959_95QUESTION_957Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1);
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CURSOR"), gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("BALAO_7"), gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects1);
gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Trilha_sonora.mp3", 1, true, 90, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "INTRO");
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Question7_balao.mp3", 2, false, 80, 1);
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CHAR_4"), gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects1);
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(10, 5, 5, 3, 4, 4, true, null);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects1[i].getBehavior("Tween").addObjectPositionYTween2("subida", 200, "linear", 1.5, false);
}
}

{ //Subevents
gdjs.CENA_959_95QUESTION_957Code.eventsList0(runtimeScene);} //End of subevents
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23510388);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23511156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QUESTION_7"), gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects1);
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects1[i].getBehavior("Tween").addObjectPositionTween2("QUADRO", 900, 137, "bouncePast", 1, false);
}
}

{ //Subevents
gdjs.CENA_959_95QUESTION_957Code.eventsList1(runtimeScene);} //End of subevents
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
gdjs.CENA_959_95QUESTION_957Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CENA_959_95QUESTION_957Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CENA_959_95QUESTION_957Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CENA_959_95QUESTION_957Code.eventsList9(runtimeScene);} //End of subevents
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23540228);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1);
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FADE_IN", 255, "easeInOutQuad", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1);

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
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23541556);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.2);
}
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 3, 0, 0.2);
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(1);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ELEMENTOS/Dublagem/G__Question_7.mp3", 2, false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("Scale").setScale(0.95);
}
}
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("Animation").setAnimationName("Selecionada_BTN");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_RETURN"), gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length;i<l;++i) {
    if ( !(gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[k] = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i];
        ++k;
    }
}
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1 */
{for(var i = 0, len = gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length ;i < len;++i) {
    gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1[i].getBehavior("Animation").setAnimationName("Padrao_BTN");
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

gdjs.CENA_959_95QUESTION_957Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595DNVObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595DNVObjects3.length = 0;

gdjs.CENA_959_95QUESTION_957Code.eventsList10(runtimeScene);
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595RETURNObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCHAR_95954Objects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDQUESTION_95957Objects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957AObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957BObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957CObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDALT_95957DObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBALAO_95957Objects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDFUNDO_9595PADRAOObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDFUNDO_9595PADRAOObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDFUNDO_9595PADRAOObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDCURSORObjects3.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595DNVObjects1.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595DNVObjects2.length = 0;
gdjs.CENA_959_95QUESTION_957Code.GDBTN_9595DNVObjects3.length = 0;


return;

}

gdjs['CENA_959_95QUESTION_957Code'] = gdjs.CENA_959_95QUESTION_957Code;

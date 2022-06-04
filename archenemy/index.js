var cards = new Array();
var ongoing = new Array();
var selectedArray = new Array();
var ongoingTemp = new Array();
var qChecker = false;


cards[0] = "cards/i-bask-in-your-silent-awe.jpg";
cards[1] = "cards/i-know-all-i-see-all.jpg";
cards[2] = "cards/imprison-this-insolent-wretch.jpg";
cards[3] = "cards/my-undead-horde-awakens.jpg";
cards[4] = "cards/nature-shields-its-own.jpg";
cards[5] = "cards/nothing-can-stop-me-now.jpg";
cards[6] = "cards/the-very-soil-shall-shake.jpg";
cards[7] = "cards/your-inescapable-doom.jpg";
for (let index = 0; index <= 7; index++) {
    ongoing[index] = cards[index];
}
cards[8] = "cards/a-display-of-my-dark-power.jpg";
cards[9] = "cards/all-in-good-time.jpg";
cards[10] = "cards/all-shall-smolder-in-my-wake.jpg";
cards[11] = "cards/approach-my-molten-realm.jpg";
cards[12] = "cards/behold-the-power-of-destruction.jpg";
cards[13] = "cards/choose-your-champion.jpg";
cards[14] = "cards/dance-pathetic-marionette.jpg";
cards[15] = "cards/drench-the-soil-in-their-blood.jpg";
cards[16] = "cards/embrace-my-diabolical-vision.jpg";
cards[17] = "cards/every-hope-shall-vanish.jpg";
cards[18] = "cards/every-last-vestige-shall-rot.jpg";
cards[19] = "cards/your-will-is-not-your-own.jpg";
cards[20] = "cards/evil-comes-to-fruition.jpg";
cards[21] = "cards/feed-the-machine.jpg";
cards[22] = "cards/i-call-on-the-ancient-magics.jpg";
cards[23] = "cards/i-delight-in-your-convulsions.jpg";
cards[24] = "cards/ignite-the-cloneforge.jpg";
cards[25] = "cards/into-the-earthen-maw.jpg";
cards[26] = "cards/introductions-are-in-order.jpg";
cards[27] = "cards/know-naught-but-fire.jpg";
cards[28] = "cards/look-skyward-and-despair.jpg";
cards[29] = "cards/may-civilization-collapse.jpg";
cards[30] = "cards/mortal-flesh-is-weak.jpg";
cards[31] = "cards/my-crushing-masterstroke.jpg";
cards[32] = "cards/my-genius-knows-no-bounds.jpg";
cards[33] = "cards/my-wish-is-your-command.jpg";
cards[34] = "cards/nature-demands-an-offering.jpg";
cards[35] = "cards/only-blood-ends-your-nightmares.jpg";
cards[36] = "cards/perhaps-youve-met-my-cohort.jpg";
cards[37] = "cards/plots-that-span-centuries.jpg";
cards[38] = "cards/realms-befitting-my-majesty.jpg";
cards[39] = "cards/roots-of-all-evil.jpg";
cards[40] = "cards/rotted-ones-lay-siege.jpg";
cards[41] = "cards/surrender-your-thoughts.jpg";
cards[42] = "cards/the-dead-shall-serve.jpg";
cards[43] = "cards/the-fate-of-the-flammable.jpg";
cards[44] = "cards/the-iron-guardian-stirs.jpg";
cards[45] = "cards/the-pieces-are-coming-together.jpg";
cards[46] = "cards/tooth-claw-and-tail.jpg";
cards[47] = "cards/which-of-you-burns-brightest.jpg";
cards[48] = "cards/your-fate-is-thrice-sealed.jpg";
cards[49] = "cards/your-puny-minds-cannot-fathom.jpg";


var AssembletheDoomsdayMachine = new Array();
AssembletheDoomsdayMachine[0] = cards[9];
AssembletheDoomsdayMachine[1] = cards[12];
AssembletheDoomsdayMachine[2] = cards[16];
AssembletheDoomsdayMachine[3] = cards[21];
AssembletheDoomsdayMachine[4] = cards[21];
AssembletheDoomsdayMachine[5] = cards[23];
AssembletheDoomsdayMachine[6] = cards[1];
AssembletheDoomsdayMachine[7] = cards[1];
AssembletheDoomsdayMachine[8] = cards[24];
AssembletheDoomsdayMachine[9] = cards[24];
AssembletheDoomsdayMachine[10] = cards[26];
AssembletheDoomsdayMachine[11] = cards[44];
AssembletheDoomsdayMachine[12] = cards[44];
AssembletheDoomsdayMachine[13] = cards[32];
AssembletheDoomsdayMachine[14] = cards[5];
AssembletheDoomsdayMachine[15] = cards[45];
AssembletheDoomsdayMachine[16] = cards[45];
AssembletheDoomsdayMachine[17] = cards[38];
AssembletheDoomsdayMachine[18] = cards[48];
AssembletheDoomsdayMachine[19] = cards[49];

var BringAbouttheUndeadApocalypse = new Array();
BringAbouttheUndeadApocalypse[0] = cards[13];
BringAbouttheUndeadApocalypse[1] = cards[13];
BringAbouttheUndeadApocalypse[2] = cards[14];
BringAbouttheUndeadApocalypse[3] = cards[42];
BringAbouttheUndeadApocalypse[4] = cards[42];
BringAbouttheUndeadApocalypse[5] = cards[8];
BringAbouttheUndeadApocalypse[6] = cards[17];
BringAbouttheUndeadApocalypse[7] = cards[17];
BringAbouttheUndeadApocalypse[8] = cards[23];
BringAbouttheUndeadApocalypse[9] = cards[26];
BringAbouttheUndeadApocalypse[10] = cards[30];
BringAbouttheUndeadApocalypse[11] = cards[3];
BringAbouttheUndeadApocalypse[12] = cards[35];
BringAbouttheUndeadApocalypse[13] = cards[35];
BringAbouttheUndeadApocalypse[14] = cards[38];
BringAbouttheUndeadApocalypse[15] = cards[40];
BringAbouttheUndeadApocalypse[16] = cards[40];
BringAbouttheUndeadApocalypse[17] = cards[41];
BringAbouttheUndeadApocalypse[18] = cards[48];
BringAbouttheUndeadApocalypse[19] = cards[49];


var ScorchtheWorldwithDragonfire = new Array();
ScorchtheWorldwithDragonfire[0] = cards[10];
ScorchtheWorldwithDragonfire[1] = cards[10];
ScorchtheWorldwithDragonfire[2] = cards[11];
ScorchtheWorldwithDragonfire[3] = cards[43];
ScorchtheWorldwithDragonfire[4] = cards[0];
ScorchtheWorldwithDragonfire[5] = cards[0];
ScorchtheWorldwithDragonfire[6] = cards[23];
ScorchtheWorldwithDragonfire[7] = cards[26];
ScorchtheWorldwithDragonfire[8] = cards[27];
ScorchtheWorldwithDragonfire[9] = cards[28];
ScorchtheWorldwithDragonfire[10] = cards[28];
ScorchtheWorldwithDragonfire[11] = cards[31];
ScorchtheWorldwithDragonfire[12] = cards[33];
ScorchtheWorldwithDragonfire[13] = cards[33];
ScorchtheWorldwithDragonfire[14] = cards[38];
ScorchtheWorldwithDragonfire[15] = cards[46];
ScorchtheWorldwithDragonfire[16] = cards[47];
ScorchtheWorldwithDragonfire[17] = cards[47];
ScorchtheWorldwithDragonfire[18] = cards[48];
ScorchtheWorldwithDragonfire[19] = cards[49];

var TrampleCivilizationUnderfoot = new Array();
TrampleCivilizationUnderfoot[0] = cards[18];
TrampleCivilizationUnderfoot[1] = cards[18];
TrampleCivilizationUnderfoot[2] = cards[20];
TrampleCivilizationUnderfoot[3] = cards[22];
TrampleCivilizationUnderfoot[4] = cards[23];
TrampleCivilizationUnderfoot[5] = cards[25];
TrampleCivilizationUnderfoot[6] = cards[26];
TrampleCivilizationUnderfoot[7] = cards[29];
TrampleCivilizationUnderfoot[8] = cards[34];
TrampleCivilizationUnderfoot[9] = cards[34];
TrampleCivilizationUnderfoot[10] = cards[4];
TrampleCivilizationUnderfoot[11] = cards[4];
TrampleCivilizationUnderfoot[12] = cards[38];
TrampleCivilizationUnderfoot[13] = cards[39];
TrampleCivilizationUnderfoot[14] = cards[39];
TrampleCivilizationUnderfoot[15] = cards[6];
TrampleCivilizationUnderfoot[16] = cards[48];
TrampleCivilizationUnderfoot[17] = cards[49];
TrampleCivilizationUnderfoot[18] = cards[19];
TrampleCivilizationUnderfoot[19] = cards[19];


function deckCall(value)
{
    checker(value);
    shuffleDeck(selectedArray);
    ongoingFind(selectedArray, i);
    document.getElementById("img1").src = selectedArray[0];
    document.getElementById("img3").src = selectedArray[0];
    count = 1;
    countShow.innerText = "Turn: " + count;
}


function shuffleDeck(array) 
{
    for (var i = array.length - 1; i > 0; i--) 
    {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
}

var i = 0;
function imageClicked()
{
    TurnCount();
    if(i<=selectedArray.length - 1)
    {
        ongoingFind(selectedArray, i);
        document.getElementById("img1").src = selectedArray[i];
        document.getElementById("img3").src = selectedArray[i];
        i++;        
    }
    else
    {
        i = 0;   
    }    
}

var ongoungCounter = 0;
var ongoungCounter2 = 0;
var j = 3;

function ongoingFind(array, i)
{
    if( array[i] == ongoing[0] || array[i] == ongoing[1] || array[i] == ongoing[2] || array[i] == ongoing[3] || array[i] == ongoing[4] || array[i] == ongoing[5] || array[i] == ongoing[6] || array[i] == ongoing[7])
    {
        if(ongoungCounter == 0)
        {
            document.getElementById("img2").src = array[i];
            ongoingTemp[0] = array[i];
            array.splice(i, 1);
            ongoungCounter++;
        }
        else if(ongoungCounter == 1)
        {
            document.getElementById("img4").src = array[i];
            ongoingTemp[1] = array[i];
            array.splice(i, 1);
            ongoungCounter++;
        }
        else if(ongoungCounter == 2)
        {
            document.getElementById("img5").src = array[i];
            ongoingTemp[2] = array[i];
            array.splice(i, 1);
            ongoungCounter++;
        }           
    }
    array[array.length-1]
    //if((i == 17 && qChecker == true) || (i == 18 && qChecker == true) || (i == 19 && qChecker == true) )
    
    if(i == array.length-j && qChecker == true )
    {
        
        
        //alert(array.length);
        if(ongoungCounter2 == 0)
        {
            //alert(array[17]);
            document.getElementById("img2").src = array[i];
            ongoingTemp[0] = array[i];
            array.splice(i, 1);
            ongoungCounter2++;
            j = 1;
            
            //qChecker == false;
        }
        else if(ongoungCounter2 == 1)
        {
            //alert(array[18]);
            document.getElementById("img4").src = array[i];
            ongoingTemp[1] = array[i];
            array.splice(i, 1);
            ongoungCounter2++;
            j = -2;
            //qChecker == false;
        }
        else if(ongoungCounter2 == 2)
        {
            //alert(array[17]);
            document.getElementById("img5").src = array[i-3];
            ongoingTemp[2] = array[i-3];
            array.splice(17, 1);
            ongoungCounter2++;
            j = 3;
            
            //qChecker == false;
        }
    }
}

var ogimgCounter = 2;
function ongoingImageClicked()
{
    
    if (ogimgCounter == 2)
    {
        document.getElementById("img5").src = "";
        ogimgCounter--;
        selectedArray.push(ongoingTemp[0]);
        qChecker = true;
        //alert(selectedArray.length);
    }
    else if (ogimgCounter == 1)
    {
        
        document.getElementById("img4").src = "";
        ogimgCounter--;
        selectedArray.push(ongoingTemp[1]);
        qChecker = true;
        //alert(selectedArray.length);
    }
    else if (ogimgCounter == 0)
    {
        
        document.getElementById("img2").src = "";
        ogimgCounter = 2;
        selectedArray.push(ongoingTemp[2]);
        qChecker = true;
        //alert(selectedArray.length);
        
    }
        
}

var count = 1;
function TurnCount()
{
    count++;
    countShow.innerText = "Turn: " + count;
}

function checker(value)
{
    if(value == 1)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = AssembletheDoomsdayMachine[index];
        }
    }
    else if(value == 2)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = ScorchtheWorldwithDragonfire[index];
        }
    }
    else if(value == 3)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = AssembletheDoomsdayMachine[index];
        }
    }
    else if(value == 4)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = AssembletheDoomsdayMachine[index];
        }
    }
    else if(value == 5)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = ScorchtheWorldwithDragonfire[index];
        }
    }
    else if(value == 6)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = TrampleCivilizationUnderfoot[index];
        }
    }
}
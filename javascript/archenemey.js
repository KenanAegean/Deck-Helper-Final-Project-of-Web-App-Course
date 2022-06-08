var cards = new Array();
var selectedArray = new Array();
var ongoingTemp = new Array();
var customCards = new Array();

cards[0] = "cards/i-bask-in-your-silent-awe.jpg";
cards[1] = "cards/i-know-all-i-see-all.jpg";
cards[2] = "cards/imprison-this-insolent-wretch.jpg";
cards[3] = "cards/my-undead-horde-awakens.jpg";
cards[4] = "cards/nature-shields-its-own.jpg";
cards[5] = "cards/nothing-can-stop-me-now.jpg";
cards[6] = "cards/the-very-soil-shall-shake.jpg";
cards[7] = "cards/your-inescapable-doom.jpg";
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

customCards[0] = "cards/mycustom/buyme.png";
customCards[1] = "cards/mycustom/gitar.png";
customCards[2] = "cards/mycustom/vacation.png";


var AssembletheDoomsdayMachine = new Array();
AssembletheDoomsdayMachine[0] = cards[9];
AssembletheDoomsdayMachine[1] = cards[12];
AssembletheDoomsdayMachine[2] = cards[16];
AssembletheDoomsdayMachine[3] = cards[21];
AssembletheDoomsdayMachine[4] = cards[21];
AssembletheDoomsdayMachine[5] = cards[23];
AssembletheDoomsdayMachine[6] = cards[1];
AssembletheDoomsdayMachine[7] = cards[7];
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

var kenanAwesomeDeck = new Array();
kenanAwesomeDeck[0] = customCards[0];
kenanAwesomeDeck[1] = customCards[1];
kenanAwesomeDeck[2] = customCards[2];
kenanAwesomeDeck[3] = cards[13];
kenanAwesomeDeck[4] = cards[18];
kenanAwesomeDeck[5] = cards[19];
kenanAwesomeDeck[6] = cards[20];
kenanAwesomeDeck[7] = cards[24];
kenanAwesomeDeck[8] = cards[28];
kenanAwesomeDeck[9] = cards[35];
kenanAwesomeDeck[10] = cards[38];
kenanAwesomeDeck[11] = cards[39];
kenanAwesomeDeck[12] = cards[40];
kenanAwesomeDeck[13] = cards[44];
kenanAwesomeDeck[14] = cards[47];
kenanAwesomeDeck[15] = cards[31];
kenanAwesomeDeck[16] = cards[25];
kenanAwesomeDeck[17] = cards[35];
kenanAwesomeDeck[18] = cards[45];
kenanAwesomeDeck[19] = cards[25];

var kenanNotAwesomeDeck = new Array();
kenanNotAwesomeDeck[0] = cards[11];
kenanNotAwesomeDeck[1] = cards[15];
kenanNotAwesomeDeck[2] = cards[16];
kenanNotAwesomeDeck[3] = cards[19];
kenanNotAwesomeDeck[4] = cards[22];
kenanNotAwesomeDeck[5] = cards[24];
kenanNotAwesomeDeck[6] = cards[26];
kenanNotAwesomeDeck[7] = cards[28];
kenanNotAwesomeDeck[8] = cards[30];
kenanNotAwesomeDeck[9] = cards[33];
kenanNotAwesomeDeck[10] = cards[38];
kenanNotAwesomeDeck[11] = cards[39];
kenanNotAwesomeDeck[12] = cards[41];
kenanNotAwesomeDeck[13] = cards[44];
kenanNotAwesomeDeck[14] = cards[48];
kenanNotAwesomeDeck[15] = cards[49];
kenanNotAwesomeDeck[16] = cards[49];
kenanNotAwesomeDeck[17] = cards[2];
kenanNotAwesomeDeck[18] = cards[4];
kenanNotAwesomeDeck[19] = cards[7];
    
var ongoing = new Array();
for (let index = 0; index < 8; index++) 
{
    ongoing[index] = cards[index];
}
ongoing[8] = customCards[0];
ongoing[9] = customCards[1];
ongoing[10] = customCards[2];

var randomDeck = new Array();
for (var i = 0; i <  3; i++) 
{
    var random = Math.floor(Math.random() * 8);
    randomDeck[i] = ongoing[random];
}
for (var i = 3; i <  20; i++) 
{
    var random = Math.floor(Math.random() * (12) + 8);
    randomDeck[i] = cards[random];
}



/* not working that way, lagging :(((
function deckMaker()
{
    var AssembletheDoomsdayMachine = [
    cards[9], cards[12], cards[16], cards[21], cards[21], 
    cards[23], cards[1], cards[7], cards[24], cards[24], 
    cards[26], cards[44], cards[44], cards[32], cards[5], 
    cards[45], cards[45], cards[38], card[48], cards[49]
    ];

    var BringAbouttheUndeadApocalypse = [
    cards[13], cards[13], cards[14], cards[42], cards[8], 
    cards[42], cards[17], cards[17], cards[23], cards[26], 
    cards[30], cards[3], cards[35], cards[35], cards[38], 
    cards[40], cards[40], cards[41], , card[48], cards[49]
    ];

    var ScorchtheWorldwithDragonfire = [
    cards[10], cards[10], cards[11], cards[43], cards[0], 
    cards[0], cards[23], cards[26], cards[27], cards[28], 
    cards[28], cards[31], cards[33], cards[33], cards[38], 
    cards[46], cards[47], cards[47], card[48], cards[49]
    ];

    var TrampleCivilizationUnderfoot = [
    cards[18], cards[18], cards[20], cards[22], cards[23], 
    cards[25], cards[26], cards[29], cards[34], cards[34], 
    cards[4], cards[7], cards[38], cards[39], cards[39], 
    cards[6], cards[48], cards[49], card[19], cards[19]
    ];

    var kenanAwesomeDeck = [
    cards[1], cards[5], cards[8], cards[13], cards[18], 
    cards[19], cards[20], cards[24], cards[28], cards[35], 
    cards[38], cards[39], cards[40], cards[44], cards[47], 
    cards[31], cards[25], cards[35], card[45], cards[25]
    ];

    var kenanNotAwesomeDeck = [
    cards[11], cards[15], cards[16], cards[19], cards[22], 
    cards[24], cards[26], cards[28], cards[30], cards[33], 
    cards[38], cards[39], cards[41], cards[44], cards[48], 
    cards[49], cards[49], cards[2], card[4], cards[7]
    ];
}*/


function deckCall(value)
{
    praparePage(value);
    clean();    
}


function praparePage(value) 
{
    checker(value);
    shuffleDeck(selectedArray);
    ongoingFind(selectedArray, 0);
    var random = Math.floor(Math.random() * (12) + 8);
    document.getElementById("smlPic").src = cards[random];
    document.getElementById("bigPic").src = cards[random];
}


function clean()
{
    count = 1;
    countShow.innerText = "Turn: " + 1;
    document.getElementById("img1").src = "";
    document.getElementById("img2").src = "";
    document.getElementById("img3").src = "";
    for (var i = 0; i < 3; i++) 
    {
        ongoingTemp[i] = "";
    }
    round = -1;
    ongoingCounter = 0;
    //document.location.refresh();
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
var round = -1;
function imageClicked()
{
    TurnCount();
    if(i < selectedArray.length )
    {
        document.getElementById("smlPic").src = selectedArray[i];
        document.getElementById("bigPic").src = selectedArray[i];
        ongoingFind(selectedArray, i);       
        i++;                
    }
    else
    {
        
        if (round > 0) 
        {
            i = 17;
            round = round*(-1); 
        }
        else
        {
            i = 0;
        }
               
        document.getElementById("smlPic").src = selectedArray[i];
        document.getElementById("bigPic").src = selectedArray[i];
        ongoingFind(selectedArray, i);      
    }    
}


var ongoingCounter = 0;
function ongoingFind(array, i)
{
    if( array[i] == ongoing[0] || array[i] == ongoing[1] || array[i] == ongoing[2] || array[i] == ongoing[3] || array[i] == ongoing[4] || array[i] == ongoing[5] || array[i] == ongoing[6] || array[i] == ongoing[7] || array[i] == ongoing[8] || array[i] == ongoing[9] || array[i] == ongoing[10])
    {

        if(ongoingCounter == 0)
        {
            document.getElementById("img1").src = array[i];
            ongoingTemp[0] = array[i];
            array.splice(i, 1);
            ongoingCounter++;
        }
        else if(ongoingCounter == 1)
        {
            document.getElementById("img2").src = array[i];
            ongoingTemp[1] = array[i];
            array.splice(i, 1);
            ongoingCounter++;
        }
        else if(ongoingCounter == 2)
        {
            document.getElementById("img3").src = array[i];
            ongoingTemp[2] = array[i];
            array.splice(i, 1);
            ongoingCounter++;
        }                   
    }
}


function mouseOver(id)
{
    document.getElementById("bigPic").src = document.getElementById(id).src;
}

function pushOngoingToArray()
{   
    if (ongoingCounter == 3)
    {
        document.getElementById("img3").src = "";
        ongoingCounter--;
        selectedArray.push(ongoingTemp[2]);
    }
    else if (ongoingCounter == 2)
    {
        document.getElementById("img2").src = "";
        ongoingCounter--;
        selectedArray.push(ongoingTemp[1]);
    }
    else if (ongoingCounter == 1)
    {
        
        document.getElementById("img1").src = "";
        ongoingCounter--;
        selectedArray.push(ongoingTemp[0]);
        round = round*(-1); 
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
            selectedArray[index] = randomDeck[index];
        }
    }
    else if(value == 2)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = AssembletheDoomsdayMachine[index];
        }
    }
    else if(value == 3)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = BringAbouttheUndeadApocalypse[index];
        }
    }
    else if(value == 4)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = ScorchtheWorldwithDragonfire[index];
        }
    }
    else if(value == 5)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = TrampleCivilizationUnderfoot[index];
        }
    }
    else if(value == 6)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = kenanAwesomeDeck[index];
        }
    }
    else if(value == 7)
    {
        for (let index = 0; index < 20; index++) 
        {
            selectedArray[index] = kenanNotAwesomeDeck[index];
        }
    }
}

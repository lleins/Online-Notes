//Page 1 Character Limit ---------------------------------------------------------------
const MessageTextArea = document.getElementById('ListPage1');
const MessageCharCount = document.getElementById('charCount');
const MessageTextArea_Page2 = document.getElementById('ListPage2');

const MaxCharLim = 500;

function UpdateCharCount(){

  const remainingChars = MaxCharLim - MessageTextArea.value.length;
  MessageCharCount.textContent = Math.max(remainingChars, 0);

  if (remainingChars <= 0){
    MessageTextArea.value = MessageTextArea.value.slice(0, MaxCharLim)

    const exceedingText = MessageTextArea.value.slice(MaxCharLim)
    MessageTextArea.value = MessageTextArea.value.slice(0, MaxCharLim);
    MessageTextArea_Page2.value = exceedingText;
    MessageTextArea_Page2.focus();
  }

}

MessageTextArea.addEventListener('input', UpdateCharCount);

UpdateCharCount();

//Page 1 Character Limit---------------------------------------------------------------


//Page 2 Character Limit---------------------------------------------------------------
const MessageTextArea2 = document.getElementById('ListPage2');
const MessageCharCount2 = document.getElementById('charCount2');


const MaxCharLim2 = 500;

function UpdateCharCount2(){

  const remainingChars = MaxCharLim2 - MessageTextArea2.value.length;
  MessageCharCount.textContent = Math.max(remainingChars, 0);

  if (remainingChars < 0){
    MessageTextArea2.value = MessageTextArea2.value.slice(0, MaxCharLim2)
  } 

}

MessageTextArea2.addEventListener('input', UpdateCharCount2);

UpdateCharCount2();

//Page 2 Character Limit---------------------------------------------------------------




//Page 3 Character Limit ---------------------------------------------------------------
const MessageTextArea3 = document.getElementById('ListPage3');
const MessageCharCount3 = document.getElementById('charCount3');
const MessageTextArea_Page4 = document.getElementById('ListPage4');

const MaxCharLim3 = 500;

function UpdateCharCount3(){

  const remainingChars3 = MaxCharLim3 - MessageTextArea3.value.length;
  MessageCharCount3.textContent = Math.max(remainingChars3, 0);

  if (remainingChars3 <= 0){
    MessageTextArea3.value = MessageTextArea3.value.slice(0, MaxCharLim3)

    const exceedingText3 = MessageTextArea3.value.slice(MaxCharLim3)
    MessageTextArea3.value = MessageTextArea3.value.slice(0, MaxCharLim3);
    MessageTextArea_Page4.value = exceedingText3;
    MessageTextArea_Page4.focus();
  }

}

MessageTextArea3.addEventListener('input', UpdateCharCount3);

UpdateCharCount3();

//Page 3 Character Limit---------------------------------------------------------------


//Page 4 Character Limit---------------------------------------------------------------
const MessageTextArea4 = document.getElementById('ListPage4');
const MessageCharCount4 = document.getElementById('charCount4');


const MaxCharLim4 = 500;

function UpdateCharCount4(){

  const remainingChars4 = MaxCharLim4 - MessageTextArea4.value.length;
  MessageCharCount4.textContent = Math.max(remainingChars4, 0);

  if (remainingChars4 < 0){
    MessageTextArea4.value = MessageTextArea4.value.slice(0, MaxCharLim4)
  } 

}

MessageTextArea4.addEventListener('input', UpdateCharCount4);

UpdateCharCount4();

//Page 4 Character Limit---------------------------------------------------------------


//Page Forward Flip Sound---------------------------------------------------------------

function PageForwardSound(){

  if(SoundOnImage_Style.display == "none"){

  }else if (SoundOnImage_Style.display == "flex"){

    if (ForwardImage_Style.opacity == .6){

    }else{
      const PageForward = new Audio('Audio Files/PageFlipForward.mp3');
      PageForward.play();
    }
  }
}

//Page Forward Flip Sound---------------------------------------------------------------


//Page Back Flip Sound---------------------------------------------------------------

function PageBackSound(){
  const BackWardImage = document.getElementById('Arrow_ImgBack');
  const BackWardImage_Style = window.getComputedStyle(BackWardImage);
  if (SoundOnImage_Style.display == "none"){

  }else if(SoundOnImage_Style.display == "flex") {
    if (BackWardImage_Style.opacity == .6){
  
    } else{
      const PageBack = new Audio('Audio Files/PageFlipBack.mp3');
        PageBack.play();
    }
  }
}
//Page Back Flip Sound---------------------------------------------------------------



//Sound On and Off Image---------------------------------------------------------------

const SoundOnImage = document.getElementById('SoundOn');
const SoundOnImage_Style = window.getComputedStyle(SoundOnImage);

const SoundOffImage = document.getElementById('SoundOff');
const SoundOffImage_Style = window.getComputedStyle(SoundOffImage);

let SoundCounter = 2;

function SoundOnButton() {
  if (SoundCounter % 2 === 0) {
    SoundOnImage.style.display = 'none';
    SoundOffImage.style.display = 'flex';
    SoundCounter++;
  } else {
    SoundOnImage.style.display = 'flex';
    SoundOffImage.style.display = 'none';
    SoundCounter++;
  }
}


//Sound On and Off Image---------------------------------------------------------------




//Forward Click Tracker---------------------------------------------------------------

const ForwardImg = document.getElementById('Arrow_ImgForward');
const BackImg = document.getElementById('Arrow_ImgBack');
const ForwardImage_Style = window.getComputedStyle(ForwardImg);

const Page1 = document.getElementById('ListPage1');
const Page2 = document.getElementById('ListPage2'); 
const Page3 = document.getElementById('ListPage3');
const Page4 = document.getElementById('ListPage4');

let ForwardClick_Counter = 0;


ForwardImg.addEventListener('click', function() {
  
  if (ForwardImage_Style.opacity == .6){
    
  } else {
    BackImg.style.opacity = 1.0;
    BackImg.style.cursor = "pointer";

    Page1.style.left = '-9999px';
    Page1.style.position = 'absolute';
    Page2.style.left = '-9999px';
    Page2.style.position = 'absolute';
    Page3.style.left = '0px';
    Page3.style.position = 'static';
    Page4.style.left = '0px';
    Page4.style.position = 'static';

    ForwardImg.style.opacity = ".6";
    ForwardImg.style.cursor = "not-allowed";
    ForwardClick_Counter++;
  }
});

BackImg.addEventListener('click', function() {
  const BackWardImage = document.getElementById('Arrow_ImgBack');
  const BackWardImage_Style = window.getComputedStyle(BackWardImage);



  if (BackWardImage_Style.opacity == .6){

  } else{
    ForwardClick_Counter--;
    if (ForwardClick_Counter == 0){

      ForwardImg.style.opacity = "1.0";
      ForwardImg.style.cursor = "pointer";

      Page1.style.left = '0px';
      Page1.style.position = 'static';
      Page2.style.left = '0px';
      Page2.style.position = 'static';
      Page3.style.left = '-9999px';
      Page3.style.position = 'absolute';
      Page4.style.left = '-9999px';
      Page4.style.position = 'absolute';

      BackImg.style.opacity = .6;
      BackImg.style.cursor = "not-allowed";
  } else{
    
  }
  }
});




//Forward Click Tracker---------------------------------------------------------------



//Information Image---------------------------------------------------------------

const InfoText = document.getElementById('InfoTab')
const CloseImage = document.getElementById('CloseTab')

function OpenInfoTab(){
  CloseImage.style.display = "flex";
  InfoText.style.display = "flex";
}

function CloseInfoTab(){
  CloseImage.style.display = "none";
  InfoText.style.display = "none";
}

//Information Image---------------------------------------------------------------

//Download .txt File of Note---------------------------------------------------------------

function DownloadTxt(){
  const Page1_Text = document.getElementById("ListPage1")
  const Page1_TextSave = Page1_Text.value; 

  const Page2_Text = document.getElementById("ListPage2")
  const Page2_TextSave = Page2_Text.value; 

  const Page3_Text = document.getElementById("ListPage3")
  const Page3_TextSave = Page3_Text.value; 

  const Page4_Text = document.getElementById("ListPage4")
  const Page4_TextSave = Page4_Text.value; 

  
  const blob = new Blob([Page1_TextSave, "\n", "\n", Page2_TextSave, "\n" , "\n", Page3_TextSave, "\n" , "\n", Page4_TextSave])
  const url = URL.createObjectURL(blob);

  const DownloadTxt = document.createElement('a');
  DownloadTxt.href = url;
  DownloadTxt.download = 'Online Notes.txt'
  DownloadTxt.click()

  URL.revokeObjectURL(url);
}



//Download .txt File of Note---------------------------------------------------------------





//Server Communication---------------------------------------------------------------
const Success = document.getElementById('ConfirmationNotif');
const Fail = document.getElementById('ProblemNotif');
const SuccessImg = document.getElementById('SuccessImg');
const FailImg = document.getElementById('FailImg');

function hideSuccess(){
  Success.style.display = 'none';
  SuccessImg.style.display = 'none';
}

function hideFail(){
  Fail.style.display = 'none';
  FailImg.style.display = 'none';
}

const TimetoHide = 6000;

const submitButton = document.getElementById('SendButton');


submitButton.addEventListener('click', function() {
  const GmailText = document.getElementById('GmailInput').value;      //Name Text Box

  const Page1 = document.getElementById('ListPage1').value;  //Email Text Box
  const Page2 = document.getElementById('ListPage2').value; 
  const Page3 = document.getElementById('ListPage3').value; 
  const Page4 = document.getElementById('ListPage4').value;

  
  const Data = {Gmail: GmailText, Body1: Page1 , Body2: Page2, Body3: Page3 , Body4: Page4 };
  
  
  fetch('http://127.0.0.1:5000/Send_Notes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
  })
  .then(response => response.json())
  .then(data => {
      const outputResult = document.getElementById('outputResult');
      Success.style.display = 'flex';
      SuccessImg.style.display = 'flex';
      setTimeout(hideSuccess, TimetoHide);
  })
  .catch(error => {
      console.error('An error occurred:', error);
      Fail.style.display = 'flex';
      FailImg.style.display = 'flex';
      setTimeout(hideFail, TimetoHide);
  });
});



//Server Communication---------------------------------------------------------------

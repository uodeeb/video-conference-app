callFrame = window.DailyIframe.createFrame({
    showLeaveButton: true,
    iframeStyle: {
      position: 'fixed',
      width: '100%',
      height: '100%',
    },
  });


// const room01=document.getElementById("rm01");
// room01.addEventListener("click", function(){
//     callFrame.join({ url: 'https://testzoom.daily.co/TH723GPCD4sv88KKP61D' });
// })

const butts=document.getElementsByClassName("room");
for(element of butts) {
    element.addEventListener("click", function(){
        callFrame.leave();
        setTimeout(function(){
            callFrame.join({ url: `https://testzoom.daily.co/${element.id}` });
        }, 3000)
    })
};
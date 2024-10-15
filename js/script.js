const userRanking = [
   {
      userId: 643268125,
      amount: 200800,
      userName: "Missing someone 🥰"
   },
   {
      userId: 652933663,
      amount: 175000,
      userName: ' surjeetmis09'
   },
   {
      userId: 615889037,
      amount: 140650,
      userName: 'PsychO❤️'
   },
   {
      userId: 586054133,
      amount: 75000,
      userName: "💞S᭄ꦿ 𝑺𝑲𝒀 🛸"
   },
   {
      userId: 573725922,
      amount: 50000,
      userName: "༒͢🕊💙B𝕒b͓̽u͎"
   },
   {
      userId: 643861769,
      amount: 49950,
      userName: "🫢RO🤫HaN🫣"
   },
   {
      userId: 587525793,
      amount: 48000,
      userName: " 🅳🅰️🆁🅿️🅰️🅽        "
   },
]
const talentDanceRanking = [
   {
      userId: 622736387,
      amount: 1251000,
      userName: 'Boss lady 05'
   },
   {
      userId: 559684988,
      amount: 490650,
      userName: '🎀❤️AKEERA❤️🎀'
   },
   {
      userId: 614097927,
      amount: 62430,
      userName: '🦢₴᭄ꦿ 𝙈𝙊𝙉𝘼🍡'
   },
   {
      userId: 625793134,
      amount: 60860,
      userName: '꧁𓊈𒆜🅼🆄🆁🅻🅸𒆜𓊉꧂'
   },
   {
      userId: 561580330,
      amount: 300,
      userName: '🎵 ⃢🎸ᴠɪʀᴀᴊ™?✔️'
   }
]
const talentSingingRanking = [
   {
      userId: 628264282,
      amount: 150100,
      userName: '🎸Siya Singh 🎸🙂'
   }
]
const talentFashionRanking = [
   {
      userId: 634167880,
      amount: 0,
      userName: `꧁༺ɨȶ'ֆ ʍɛɛռǟӄֆɦɨ༻꧂`
   }
]


function tinfofunc1(e, info) {
   var i, contentsr1, linkssr1;
   contentsr1 = document.getElementsByClassName("tdemo07");
   for (i = 0; i < contentsr1.length; i++) {
      contentsr1[i].style.display = "none";
   }
   linkssr1 = document.getElementsByClassName("tdemo06");
   for (i = 0; i < linkssr1.length; i++) {
      linkssr1[i].className = linkssr1[i].className.replace(" active", "");
   }
   document.getElementById(info).style.display = "block";
   e.currentTarget.className += " active";
}

function infofunc0(e, info) {
   var i, contentsr1, linkssr1;
   contentsr1 = document.getElementsByClassName("demo001");
   for (i = 0; i < contentsr1.length; i++) {
      contentsr1[i].style.display = "none";
   }
   linkssr1 = document.getElementsByClassName("demo000");
   for (i = 0; i < linkssr1.length; i++) {
      linkssr1[i].className = linkssr1[i].className.replace(" active", "");
   }
   document.getElementById(info).style.display = "block";
   e.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function (event) {
   // document.getElementById("tmybutton1").click();
   document.getElementById("mybutton0").click();
   userRanking.map((item, key) => {
      get_user_img(item.userId);
      $('#userleaderboard').append('<div class="leaderboard-strip"><div>' + (key + 4) + '. </div><div><a href="http://www.kktv1.com/m/?roomid=' + item.userId + '"><img src="../common/img/kk_head_avatar_men.png" id="u_img_' + item.userId + '"alt="" class="w-100 round-img"> </a></div><div>' + item.userName + '<br />ID: ' + item.userId + '</div><div style="text-align: end;">' + (item.amount).toLocaleString() + ' <img src="img/Beans icon.png" alt=""class="beans-icon"></div></div>')
   })
   talentDanceRanking.map((item, key) => {
      get_user_img(item.userId);
      $('#talentDanceLeaderboard').append('<div class="leaderboard-strip"><div>' + (key + 4) + '. </div><div><a href="http://www.kktv1.com/m/?roomid=' + item.userId + '"><img src="../common/img/kk_head_avatar_men.png" id="u_img_' + item.userId + '"alt="" class="w-100 round-img"> </a></div><div>' + item.userName + '<br />ID: ' + item.userId + '</div><div style="text-align: end;">' + (item.amount).toLocaleString() + ' <img src="img/Beans icon.png" alt=""class="beans-icon"></div></div>')
   })
   // talentSingingRanking.map((item, key) => {
   //    get_user_img(item.userId);
   //    $('#talentSingingLeaderboard').append('<div class="leaderboard-strip"><div>' + (key + 4) + '. </div><div><a href="http://www.kktv1.com/m/?roomid=' + item.userId + '"><img src="../common/img/kk_head_avatar_men.png" id="u_img_' + item.userId + '"alt="" class="w-100 round-img"> </a></div><div>' + item.userName + '<br />ID: ' + item.userId + '</div><div style="text-align: end;">' + (item.amount).toLocaleString() + ' <img src="img/Beans icon.png" alt=""class="beans-icon"></div></div>')
   // })
   // talentFashionRanking.map((item, key) => {
   //    get_user_img(item.userId);
   //    $('#talentFashionLeaderboard').append('<div class="leaderboard-strip"><div>' + (key + 4) + '. </div><div><a href="http://www.kktv1.com/m/?roomid=' + item.userId + '"><img src="../common/img/kk_head_avatar_men.png" id="u_img_' + item.userId + '"alt="" class="w-100 round-img"> </a></div><div>' + item.userName + '<br />ID: ' + item.userId + '</div><div style="text-align: end;">' + (item.amount).toLocaleString() + ' <img src="img/Beans icon.png" alt=""class="beans-icon"></div></div>')
   // })
});


function get_user_img(u_id) {
   $.ajax({
      type: 'GET',
      async: true,
      url: 'http://www.streamkarlive.live/meShow/entrance?parameter=%7B%22FuncTag%22:10005044,%22userId%22:' + u_id + '%7D',
      cache: false,
      error: function (xhr, ajaxOptions, thrownError) {
         // alert(xhr.responseText);
         //   alert(thrownError);
      },
      xhr: function () {
         var xhr = new window.XMLHttpRequest();

         //Download progress
         xhr.addEventListener("progress", function (evt) {
            console.log(evt.lengthComputable);
            if (evt.lengthComputable) {
               console.log("Downloading contents.");
            }
         }, false);
         return xhr;
      },
      beforeSend: function () {
         // $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
         //$('#div_contents').html('<img id="img_wait" src="images/bx_loader.gif"/>');
      },
      complete: function () {
         // $('#img_bulk_anim_1').removeAttr('src');
      },
      success: function (data) {

         user_data = jQuery.parseJSON(data);


         $('#u_img_' + u_id + '').attr("src", '' + user_data.portrait_path_original + '!256');


         console.log('Ajax success');
      },
      failure: function () {
         console.log('Ajax Failure.');
      }

   });



}
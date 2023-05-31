$(document).ready(function () {
  listBtn();
});

const listBtn = () => {
  $(".list").addClass("active-bttn");
  $(".pitch").removeClass("active-bttn");
  $(".ground-img").css("display", "none");
  $("#your-playerList").css("display", "block");
};
const pitchBtn = () => {
  $(".pitch").addClass("active-bttn");
  $(".list").removeClass("active-bttn");
  $(".ground-img").css("display", "block");
  $("#your-playerList").css("display", "none");
};
var data = {
  list: [
    {
      p_credits: 11.5,
      p_point: 325.5,
      p_id: 1,
      p_name: "V Kohli",
      p_profile: "ind_cloth.svg",
      p_nation: "Ind",
      p_icon: "Fill.svg",
      P_status: 1,
    },
    {
      p_credits: 10.5,
      p_point: 256.5,
      p_name: "R Sharma",
      p_profile: "ind_cloth.svg",
      p_nation: "Ind",
      p_icon: "Fill_2.svg",
      P_status: 2,
    },
    {
      p_credits: 10.5,
      p_point: 186.5,
      p_name: "J Neesham",
      p_profile: "new_zealand_cloth.svg",
      p_nation: "NZ",
      p_icon: "Fill.svg",
      P_status: 1,
    },
    {
      p_credits: 10,
      p_point: 386.5,
      p_name: "K Williamson",
      p_profile: "new_zealand_cloth.svg",
      p_nation: "NZ",
      p_icon: "Fill.svg",
      P_status: 1,
    },
    {
      p_credits: 9,
      p_point: 226.5,
      p_name: "M Agarwal",
      p_profile: "ind_cloth.svg",
      p_nation: "ind",
      p_icon: "Fill_2.svg",
      P_status: 2,
    },
    {
      p_credits: 8.5,
      p_point: 158,
      p_name: "M Guptill",
      p_profile: "new_zealand_cloth.svg",
      p_nation: "NZ",
      p_icon: "Fill.svg",
      P_status: 1,
    },
  ],
};
let item = "";
let status = " ";
for (let pd_list of data.list) {
  if (pd_list.P_status == 2) {
    status = "d-active";
  } else if (pd_list.P_status == 1) {
    status = "";
  }
  item += `
    <div class="playerList ${status}">
                <div class="name_flg">
                    <div class="player_profile_img"><img src="media/${pd_list.p_profile}" alt="profile"></div>
                    <div class="playername_nation"><span class="p-name">${pd_list.p_name}</span><span
                            class="p-nation">${pd_list.p_nation}</span>
                    </div>
                </div>
                <div class="points">
                    <span class="p-points">${pd_list.p_point}</span>
                    <span class="p-credits">${pd_list.p_credits}</span>
                    <span class="p-action"><img src="media/${pd_list.p_icon}"></span>
                </div>
            </div>
    `;
}
document.getElementById("playerListparent").innerHTML = item;

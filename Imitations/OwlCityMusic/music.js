//抓到container
const container = document.querySelector(".container");
// const musicInfo = [
//     "https://picsum.photos/id/23/400/450",
//     "https://picsum.photos/id/25/400/450",
// ]
//陣列 []
// 學生成績（通常會塞一樣屬性的東西）
// const score = [100,98,45];
// 物件{}
// 同一個物件，裏面有不同屬性的東西
// const piyen = {
//     id:8,
//     name:"吳承軒",
//     nickName:"屁眼",
// }
// console.log(piyen.name)
// 吳承軒

const musicInfo = [
    {
        music_title: "明道中學校歌",
        audio_url: "./music/a.mp3",
        img_url: "https://picsum.photos/id/24/400/450"
    },
    {
        music_title: "一首簡單的歌",
        audio_url: "./music/b.mp3",
        img_url: "https://picsum.photos/id/25/400/450"
    },
    {
        music_title: "中華民國國歌",
        audio_url: "./music/c.mp3",
        img_url: "https://picsum.photos/id/26/400/450"
    },
]

/* {
    最原本的樣子
<div class="row">
    <div class="col">
        <div class="card">
            <img src="https://picsum.photos/id/22/400/450" alt="">
        </div>
   </div>
</div>
 }*/
//可以在container 裏面加入html

// const names = "Tom";
// const me = "Joe"
// console.log("Hello" + names + ". I am "+ me)
// Template literals 字符插值
// console.log(`Hello ${names}. I am ${me}`)
// ${變數名稱}

let tempTop = `<div class="row">`;
let temp = "";
let tempBottom = "</div>";

// musicInfo.length = 3
for (let i = 0; i < musicInfo.length; i++) {
    temp += `
    <div class="col">
        <div class="card">
            <img src="${musicInfo[i].img_url}" alt="">
            <p>${musicInfo[i].music_title}</p>
        </div>
    </div>
`
}

container.innerHTML = tempTop + temp + tempBottom;
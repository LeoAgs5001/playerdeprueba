import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"WEEI 93.7 FM",
            artist: "Radio",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://prod-44-202-137-138.wostreaming.net/audacy-weeifmaac-imc",
            active: true,
        },
        {
            name:"105.3 The Fan Dallas",
            artist: "Stports Radio",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://prod-54-205-65-155.wostreaming.net/audacy-krldfmaac-imc",
            active: false,
        },
        {
            name:"810 WHB",
            artist: "Sports Radio",
            cover: "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://prod-54-173-108-123.wostreaming.net/unionbroadcasting-whbamaac-hlsc2.m3u8/",
            active: false,
        },
        {
            name:"1010 WINS",
            artist: "News Radio",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://prod-100-27-18-105.wostreaming.net/audacy-winsamaac-imc",
            active: false,
        },
        {
            name:"Gold 104.3",
            artist: "Psalm Trees, Guillaume Muschalle",
            cover: "https://ais-arn.streamguys1.com/au_004/playlist.m3u8",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://ais-arn.streamguys1.com/au_004/playlist.m3u8",
            active: false,
        },
        {
            name:"Sozu",
            artist: "mommy, Sleepy Fish",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://21423.live.streamtheworld.com/ARN_GOLD1043AAC/HLS/9e78e9a9-99e4-42a9-968f-ae475487d669/0/playlist.m3u8",
            active: false,
        },
        {
            name:"Sleepover",
            artist: "Nymano, JK the Sage",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
            active: false,
        },
        {
            name:"Collages",
            artist: "Sleepy Fish",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/cd6ad456b39b442e4d39e346c5f778df969326e6-1024x1024.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7985",
            active: false,
        },
        {
            name:"Perspective",
            artist: "Barnes Blvd.",
            cover: "https://chillhop.com/wp-content/uploads/2019/09/5dec57f342128aac26584502148c6415dce9a1e5-1024x1001.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8046",
            active: false,
        },
    ];
}

export default chillHop;



import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"KJFK New York",
            artist: "USA Airports",
            cover: "https://shorturl.at/ipzAT",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://s1-fmt2.liveatc.net/kjfk9_s?nocache=2024091121455757076",
            active: true,
        },
        {
            name:"KBOI Twr/App Idaho",
            artist: "USA Airports",
            cover: "https://shorturl.at/crEY7",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://s1-fmt2.liveatc.net/kbos_twr?nocache=2024091122304570160",
            active: false,
        },
        {
            name:"KLAX Tower South Los Angeles",
            artist: "USA Airports",
            cover: "https://shorturl.at/mqx12",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://s1-bos.liveatc.net/klax_twr?nocache=2024091211152288695",
            active: false,
        },
        {
            name:"KEWR Tower 1 New Jersey",
            artist: "USA Airports",
            cover: "https://shorturl.at/fmDH1",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://s1-fmt2.liveatc.net/kewr_twr?nocache=2024091123124535421",
            active: false,
        },
        {
            name:"KSFO Tower - San Francisco",
            artist: "USA Airports",
            cover: "https://shorturl.at/azDFL",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://s1-fmt2.liveatc.net/ksfo_twr?nocache=2024091123143935430",
            active: false,
        },
        {
            name:"KATL Tower Atlanta",
            artist: "USA Airports",
            cover: "https://shorturl.at/azDFL",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://s1-fmt2.liveatc.net/katl_twr?nocache=2024091123160340878",
            active: false,
        },
        {
            name:"KPIT App/Dep 2 Pennsylvania",
            artist: "USA Airports",
            cover: "https://shorturl.at/jsxyX",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://s1-fmt2.liveatc.net/kpit2_app_dep?nocache=2024091123172731932",
            active: false,
        },       
        {
            name:"PHNL Tower Honolulu Hawaii",
            artist: "USA Airports",
            cover: "https://shorturl.at/mquxE",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://s1-bos.liveatc.net/phnl1_twr?nocache=2024091123202112027",
            active: false,
        },
    ];
}

export default chillHop;



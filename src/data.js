import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"EIDW Gnd/Twr/App/Centre Dublin Ireland",
            artist: "EUROPE Airports",
            cover: "https://shorturl.at/ipzAT",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://s1-bos.liveatc.net/eidw8?nocache=2024091212072882738",
            active: true,
        },
        {
            name:"LSGG Radar L1/L2/L3/L4/L5 Geneva Switzerland",
            artist: "EUROPE Airports",
            cover: "https://shorturl.at/crEY7",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://s1-fmt2.liveatc.net/lsgg_rdr?nocache=2024091212133519156",
            active: false,
        },
        {
            name:"Dutch Mil Radar Amsterdam Netherlands",
            artist: "EUROPE Airports",
            cover: "https://shorturl.at/mqx12",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://s1-bos.liveatc.net/ehle_dutchmil?nocache=2024091212054864124",
            active: false,
        },
        {
            name:"ESSL Twr/App/Control Linkoping Sweden",
            artist: "EUROPE Airports",
            cover: "https://shorturl.at/fmDH1",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://s1-fmt2.liveatc.net/essl?nocache=2024091212114786220",
            active: false,
        },
        {
            name:"URSS Gnd/Twr/App Sochi Russia",
            artist: "EUROPE Airports",
            cover: "https://shorturl.at/azDFL",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://s1-bos.liveatc.net/urss?nocache=2024091212145486535",
            active: false,
        },
        {
            name:"LBSF Twr/App 2 Sofia Bulgaria",
            artist: "EUROPE Airports",
            cover: "https://shorturl.at/azDFL",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://s1-fmt2.liveatc.net/lbsf1?nocache=2024091212404067251",
            active: false,
        },
        {
            name:"LPPR Approach 1 Porto Portugal",
            artist: "EUROPE Airports",
            cover: "https://shorturl.at/jsxyX",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://s1-bos.liveatc.net/lppr2?nocache=2024091212433016276",
            active: false,
        },       
        {
            name:"LROP Twr/App/Radar Bucharest Romania",
            artist: "EUROPE Airports",
            cover: "https://shorturl.at/mquxE",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://s1-fmt2.liveatc.net/lrop?nocache=2024091212450860066",
            active: false,
        },
    ];
}

export default chillHop;



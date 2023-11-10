const data = {
    user: {
        nick: "Олег Мухин",
        picture: "./img/Stelle.png",
    },
    menu: {
        navBar: [
            {
                to: "/Home",
                icon: "fa fa-home",
                text: "HOME",
            },
            {
                to: "/Chat",
                icon: "fa fa-bars",
                text: "CHAT",
            },
            {
                to: "/Contact",
                icon: "fa fa-user-circle",
                text: "CONTACT",
            },
            {
                to: "/Notifications",
                icon: "fa fa-bell",
                text: "NOTIFICATIONS",
            },
            {
                to: "/Calendar",
                icon: "fa fa-calendar",
                text: "CALENDAR",
            },
            {
                to: "/Settings",
                icon: "fa fa-cogs",
                text: "SETTINGS",
            },
        ],
        exit: {
            to: "",
            icon: "fa fa-power-off",
            text: "LOG OUT",
        },
    },
    chats: [
        {
            picture: "https://wotpack.ru/wp-content/uploads/2023/05/Vubbabu-220x220.png.webp",
            nick: "Vubbabu",
            message: [
                {
                    user:"Олег Мухин",
                    time:"2 minute ago",
                    text:"Hello",
                },
                {
                    user:"Vubbabu",
                    time:"1 minute ago",
                    text:"Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).",
                },
            ],
        },{
            picture: "https://wotpack.ru/wp-content/uploads/2023/05/Delikates-Pom-Pom-220x220.png.webp",
            nick: "Pom-Pom",
            message: [
                {
                    user:"Pom-Pom",
                    time:"2 minute ago",
                    text:"Voice message (01:15)",
                },
            ],
        },{
            picture: "https://wotpack.ru/wp-content/uploads/2023/05/Ditin-220x220.png.webp",
            nick: "Ditin",
            message: [
                {
                    user:"Олег Мухин",
                    time:"2 minute ago",
                    text:"Hello",
                },
                {
                    user:"Ditin",
                    time:"2 minute ago",
                    text:"Cicero famously orated against his political opponent Lucius Sergius Catilina.",
                },
                {
                    user:"Олег Мухин",
                    time:"2 minute ago",
                    text:"Bye",
                },
            ],
        },
    ],
}
export default data;
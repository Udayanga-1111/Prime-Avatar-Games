// Game template Class
class Game {
    constructor(
        divId,
        gameName,
        gamePrice,
        gameDescription
    )
    {
        this.divId = divId;
        this.gameName = gameName;
        this.gameDescription = gameDescription;
        this.gamePrice = gamePrice;
    }

    cardCreator = function () {
        let div = document.createElement("div");
        div.classList.add("card");
        div.setAttribute("id", this.divId);
        div.innerHTML =
            `<div class ="description">

                <p>${this.gameDescription}</p>
            
            </div>

            <div class = "card-details">

                <a href="#"><h2 class="game-name">${this.gameName}</h2></a>
                <h4 class="price">${this.gamePrice}</h4>

            </div>`;
        
        let gameSection = document.querySelector(".catagories");
        gameSection.append(div);
    };
};

// Objects
// 01
//====================================================================================================================

const Wukong = new Game(
    "black-myth-wukong",
    "Black Myth Wukong",
    "$10",
    "This upgrade allows owners of Black Myth: Wukong Digital Standard Edition to access Black Myth: Wukong Digital Deluxe Edition content — an exclusive weapon, equipment, and curio, plus the Music Library, featuring a selection of music from the game's soundtrack."
);

Wukong.cardCreator();

// 02
//====================================================================================================================

const Fortnite = new Game(
    "Fortnite",
    "Fortnite",
    "Free",
    "Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In."
);

Fortnite.cardCreator();

// 03
//====================================================================================================================

const KingdomCome = new Game(
    "Kingdom-Come",
    "Kingdom Come : Delivarence",
    "$22.99",
    "Kingdom Come: Deliverance is a story-driven open-world RPG that immerses you in an epic adventure in the Holy Roman Empire. Avenge your parents' death as you battle invading forces, go on game-changing quests, and make influential choices."
);

KingdomCome.cardCreator();

// 04
//====================================================================================================================

const TorqueDrift2 = new Game(
    "Torque-Drift2",
    "Torque Drift 2",
    "$9.22",
    "From the vibrant streets of Tokyo to high-stakes professional competitions backed by global brands, Torque Drift 2 invokes all aspects of drift and street culture to offer an experience as diverse and dynamic as the motorsport itself."
);

TorqueDrift2.cardCreator();

// 05
//====================================================================================================================

const WRC = new Game(
    "WRC",
    "EA SPORTS™ WRC",
    "$49.99",
    "Build the car of your dreams in our biggest rally game ever, EA SPORTS™ WRC, the all-new official videogame of the FIA World Rally Championship, the first developed by the award-winning team behind the DiRT Rally series."
);

WRC.cardCreator();

// 06
//====================================================================================================================

const Coma = new Game(
    "COMA",
    "Coma",
    "Free",
    "MMORPG survival zombie game with an open world. Fight, loot, and research!"
);

Coma.cardCreator();

// 07
//====================================================================================================================

const DeltaForce = new Game(
    "Delta-Force",
    "Delta Force",
    "Free",
    "Delta Force is back! The iconic series returns as the definitive free-to-play tactical shooter and featuring three distinct gameplay modes: large-scale PvP warfare, intense extraction shooter action, and a remake of the legendary Black Hawk Down campaign."
);

DeltaForce.cardCreator();

// 08
//====================================================================================================================

const Lindwyrm = new Game(
    "Lindwyrm",
    "Lindwyrm",
    "$4.69",
    "No one suspected what lurked beneath Sigiswal. Meet ancient creatures and save the village in this roguelite action RPG. Dungeons with hack'n'slay combat, platforming and puzzles? We've got it! Strong bosses, co-op mode? That's a given! Are you ready for the Underground?"
);

Lindwyrm.cardCreator();

// 09
//====================================================================================================================

const GTAV = new Game(
    "GTA-V",
    "GTA-V",
    "$29.99",
    "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online."
);

GTAV.cardCreator();

// 10
//====================================================================================================================

const MostWanted = new Game(
    "NFS-Most-Wanted",
    "Need For Speed™: Most Wanted",
    "$19.99",
    "The open-world action in Need for Speed™ Most Wanted gives you the freedom to drive your way. Hit jumps and shortcuts, switch cars, lie low, or head for terrain that plays to your vehicle’s unique strengths."
);

MostWanted.cardCreator();

// 11
//====================================================================================================================

const FirelightFantacy = new Game(
    "Firelight-Fantacy",
    "Firelight Fantacy : Vengeance",
    "$5.59",
    "Firelight Fantasy: Vengeance - a game about spectacular sword battles from the third person. This game is an action game based on Scandinavian mythology. Immerse yourself in the unusual story of how Sigurd died."
);

FirelightFantacy.cardCreator();

// 12
//====================================================================================================================

const Asphalt8 = new Game(
    "Asphalt-8",
    "Asphalt-8",
    "free",
    "xperience multiplayer races with fast cars and motorcycles."
);

Asphalt8.cardCreator();
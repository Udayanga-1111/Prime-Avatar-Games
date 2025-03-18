// Template class for upcoming games
class UpcomingGame { 
    constructor(
        id,
        gameName,
        releaseDate,
    ) {
        this.id = id;
        this.gameName = gameName;
        this.releaseDate = releaseDate;
    }

    cardCreator = function () {
        let aDiv = document.createElement("a");
        aDiv.setAttribute('href', "#");
        aDiv.setAttribute('id', this.id);
        aDiv.classList.add('card')
        aDiv.innerHTML =
            `
            <div class="card-details">

                <h2 class="game-name">${this.gameName}</h2>
                <p>Release Date: ${this.releaseDate}</p>
            
            </div>`;

        let section = document.getElementById("gamesSection");
        section.appendChild(aDiv);
    }
};

// 01

const splitgate2 = new UpcomingGame(
    "Splitgate-2",
    "Splitgate 2",
    "2025"
)

splitgate2.cardCreator();

// 02

const Wuchang = new UpcomingGame(
    "Wuchang",
    "WUCHANG: Fallen Feathers",
    "2025 feb"
)

Wuchang.cardCreator();

// 03

const chainsOfFreedom = new UpcomingGame(
    "Chains-of-Freedom",
    "Chains of Freedom",
    "2025"
)

chainsOfFreedom.cardCreator();

// 04

const SACobra = new UpcomingGame(
    "SA-Cobra",
    "Space Adventure Cobra- The Awakening",
    "2025"
)

SACobra.cardCreator();

// 05

const AILimit = new UpcomingGame(
    "AI-LIMIT",
    "AI-LIMIT",
    "2025  march" 
)

AILimit.cardCreator();

// 06

const GRebels = new UpcomingGame(
    "G-rebels",
    "G-Rebels",
    "2025"
)

GRebels.cardCreator();

// 07

const soulmask = new UpcomingGame(
    'Soulmask',
    "Soulmask",
    "2025"
)

soulmask.cardCreator();

// 08

const kingdomCome = new UpcomingGame(
    "Kingdom-Come-D-II",
    "Kingdom come: Deliverance II",
    "2025 feb 04"
)

kingdomCome.cardCreator();

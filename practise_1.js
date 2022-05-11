// Coding to practice


let games = ["FIFA", "COD", "Mario Kart", "LoL", "WoW"]
let level = ["Beginner", "Intermediate", "Advanced", "Pro", "Legend", "God"]


const gamer = {
    name: "Haresh",
    game: games[2],
    skill_level: level[5],
}

const gamer2 = {
    name: "Manjot",
    game: games[2],
    skill_level: level[5]
}

if (gamer.skill_level > gamer2.skill_level) {
    console.log(gamer.name + " is better than " + gamer2.name + " at " + gamer.game + ".")
} else if (gamer.skill_level === gamer2.skill_level) {
    console.log(gamer.name + " is as good as " + gamer2.name + " at " + gamer.game + ".")
} else {
    console.log(gamer2.name + " is better than " + gamer.name + " at " + gamer.game + ".")
}
 


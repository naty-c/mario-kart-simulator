const players = [
    { Name: "Mario", Speed: 4, Maneuver: 3, Power: 3, Score: 0 },
    { Name: "Luigi", Speed: 3, Maneuver: 4, Power: 4, Score: 0 },
    { Name: "Bowser", Speed: 5, Maneuver: 2, Power: 5, Score: 0 },
    { Name: "Yoshi", Speed: 2, Maneuver: 4, Power: 3, Score: 0 },
    { Name: "Peach", Speed: 3, Maneuver: 4, Power: 2, Score: 0 },
    { Name: "Donkey Kong", Speed: 2, Maneuver: 2, Power: 5, Score: 0 }
];

function getRandomPlayers(playersArray) {
    const totalPlayers = playersArray.length;

    const index1 = Math.floor(Math.random() * totalPlayers);
    let index2;
    do {
        index2 = Math.floor(Math.random() * totalPlayers);
    } while (index2 === index1);

    return [playersArray[index1], playersArray[index2]];
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomTrack() {
    const random = Math.random();

    if (random < 0.33) return "Straight";
    if (random < 0.66) return "Curve";
    return "Battle";
}

async function logRollResult(characterName, track, diceResult, attributePoints) {
    console.log(`${characterName} 🎲 rolled a dice for ${track}: ${diceResult} + ${attributePoints} = ${diceResult + attributePoints}`);
}

async function playRaceEngine(player1, player2) {
    const players = [player1, player2];

    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Round ${round}`);
        const track = await getRandomTrack();
        console.log(`Track: ${track}`);

        const results = [];

        for (const player of players) {
            const diceResult = await rollDice();

            let attributePoints = 0;
            let attributeName = "";

            if (track === "Straight") {
                attributePoints = player.Speed;
                attributeName = "speed";
            } else if (track === "Curve") {
                attributePoints = player.Maneuver;
                attributeName = "maneuver";
            } else if (track === "Battle") {
                attributePoints = player.Power;
                attributeName = "power";
            }

            const total = diceResult + attributePoints;
            results.push({ player, diceResult, attributePoints, total });

            await logRollResult(player.Name, attributeName, diceResult, attributePoints);
        }

        if (track === "Battle") {
            const [p1, p2] = results;
            console.log(`${p1.player.Name} challenged ${p2.player.Name}! 🥊`);

            if (p1.total > p2.total) {
                if (p2.player.Score > 0) {
                    console.log(`${p1.player.Name} won the match! ${p2.player.Name} lost 1 point 💣`);
                } else {
                    console.log(`${p1.player.Name} won the match! ${p2.player.Name} has no points to lose. 🛡️`);
                }
                p2.player.Score = Math.max(0, p2.player.Score - 1);
            } else if (p2.total > p1.total) {
                if (p1.player.Score > 0) {
                    console.log(`${p2.player.Name} won the match! ${p1.player.Name} lost 1 point 💣`);
                } else {
                    console.log(`${p2.player.Name} won the match! ${p1.player.Name} has no points to lose. 🛡️`);
                }
                p1.player.Score = Math.max(0, p1.player.Score - 1);
            } else {
                console.log("The match resulted in a draw. No points lost!");
            }     

        } else {
            const winner = results.reduce((prev, curr) => curr.total > prev.total ? curr : prev);
            const tied = results.filter(r => r.total === winner.total);

            if (tied.length === 1) {
                console.log(`${winner.player.Name} scored 1 point! 🤩`);
                winner.player.Score++;
            } else {
                console.log("It's a draw! No one scores this round.");
            }
        }

        console.log("-----------------");
    }
}

async function declareWinner(p1, p2) {
    console.log("Final result:");
    console.log(`${p1.Name}: ${p1.Score} point(s)`);
    console.log(`${p2.Name}: ${p2.Score} point(s)`);

    if (p1.Score > p2.Score) {
        console.log(`\n${p1.Name} won the race! Congratulations! 🏆`);
    } else if (p2.Score > p1.Score) {
        console.log(`\n${p2.Name} won the race! Congratulations! 🏆`);
    } else {
        console.log("The race ended with a draw. 💥");
    }
}

(async function main() {
    const [player1, player2] = getRandomPlayers(players);

    console.log(`🏁🚨 Ready, set, go! The race between ${player1.Name} and ${player2.Name} is starting... \n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();

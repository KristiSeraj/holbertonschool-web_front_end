function studentHowgarts() {
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }

    return {
        name,
        privateScore,
        setName: (newName) => {
            name = newName;
        },
        rewardStudent: () => changeScoreBy(1),
        penalizeStudent: () => changeScoreBy(-1),
        getScore: () => `${name}: ${privateScore}`,
    };
}

let harry = studentHowgarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHowgarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
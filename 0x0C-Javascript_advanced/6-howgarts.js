const studentHowgarts = (function() {
    let privateScore = 0;
    let name = null;

    let changeScoreBy = function(points) {
        privateScore += points;
        return privateScore;
    }

    return {
        name,
        privateScore,
        setName: (newName) => {
            name = newName;
        },
        rewardStudent: function() {
        		return changeScoreBy(1);
        },
        penalizeStudent: () => changeScoreBy(-1),
        getScore: () => `${name}: ${privateScore}`
    };
})();

let harry = studentHowgarts;
harry.setName("Harry");
harry.rewardStudent(4);
console.log(harry.getScore());

let draco = studentHowgarts;
draco.setName("Draco");
draco.rewardStudent(1);
draco.penalizeStudent(3);
console.log(draco.getScore());
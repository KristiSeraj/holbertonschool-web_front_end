class studentHowgarts {
    privateScore = 0;
    name = null;

    #changeScoreBy(points) {
        let a = this.privateScore + points;
        return a;
    }

    setName(newName) {
        this.name = newName;
    }

    rewardStudent() {
        this.#changeScoreBy();
    }

    penalizeStudent() {
        this.#changeScoreBy();
    }

    getScore() {
        return `${this.name}: ${this.privateScore}`;
    }
}

let harry = new studentHowgarts();

harry.setName("Harry");
harry.rewardStudent(4);
console.log(harry.getScore());

let draco = new studentHowgarts();

draco.setName("Draco");
draco.rewardStudent(1);
draco.penalizeStudent(3);
console.log(draco.getScore());
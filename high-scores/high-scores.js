
export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    return Math.max(...this._scores);
  }

  get personalTopThree() {
    let sortedArray = this._scores.sort((a, b) => b - a);

    return sortedArray.length > 3 ? sortedArray.slice(0, 3) : sortedArray;
  }
}

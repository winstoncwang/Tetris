export default function scoreCount (totalScore) {
	this.totalScore = totalScore;
	console.log(this.totalScore);
}

ScoreCount.prototype.getScore = function () {
	return this.totalScore;
};

ScoreCount.prototype.setScore = function (increment = 10) {
	this.totalScore += increment;
};

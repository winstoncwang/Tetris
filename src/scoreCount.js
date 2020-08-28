export default function scoreCount (totalScore) {
	this.totalScore = totalScore;
	console.log(this.totalScore);
}

scoreCount.prototype.getScore = function () {
	return this.totalScore;
};

scoreCount.prototype.setScore = function (increment = 10) {
	this.totalScore += increment;
};

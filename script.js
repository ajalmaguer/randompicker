var questions = [
	'What does marriage mean to you?',
	'What doesn\'t marriage mean to you?',
	'Do you believe in marriage as an institution?',
	'What do you respect in me?',
	'Being out to our family? How do you want me to support you in this?',
	'How will we pull together our finances? Will we?',
	'What would happen in a family crisis?',
	'How many kids do you want?',
	'Do you believe in the phrase, "All you need is love?" Why or why not?',
	'Given the choice of anyone in the world, whom would you want as a dinner guest?',
	'Would you like to be famous? In what way?',
	'Before making a telephone call, do you ever rehearse what you are going to say? Why?',
	'What would constitute a “perfect” day for you?',
	'When did you last sing to yourself? To someone else?',
	'If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?',
	'Do you have a secret hunch about how you will die?',
	'Name three things you and your partner appear to have in common.',
	'For what in your life do you feel most grateful?',
	'If you could change anything about the way you were raised, what would it be?',
	'Take four minutes and tell your partner your life story in as much detail as possible.',
	'If you could wake up tomorrow having gained any one quality or ability, what would it be?',
	'If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?',
	'Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?',
	'What is the greatest accomplishment of your life?',
	'What do you value most in a friendship?',
	'What is your most treasured memory?',
	'What is your most terrible memory?',
	'If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?',
	'What does friendship mean to you?',
	'What roles do love and affection play in your life?',
	'Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items.',
	'How close and warm is your family? Do you feel your childhood was happier than most other people’s?',
	'Complete this sentence: “I wish I had someone with whom I could share...“',
	'If you were going to become a close friend with your partner, please share what would be important for him or her to know.',
	'Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you’ve just met.',
	'Share with your partner an embarrassing moment in your life.',
	'When did you last cry in front of another person? By yourself?',
	'Tell your partner something that you like about them already.',
	'What, if anything, is too serious to be joked about?',
	'If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven’t you told them yet?',
	'Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?',
	'Of all the people in your family, whose death would you find most disturbing? Why?',
	'Share a personal problem and ask your partner’s advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen.'
]

currentPlayer = 'left'

document.querySelector('#question').addEventListener('click', (evt)=> {
	var question = pickQuestion(questions)
	evt.target.innerHTML = question
	switchPlayer()
	render()
})

function pickQuestion(arr) {
	var randNum = Math.random() * (arr.length - 1)
	randNum = Math.floor(randNum)
	return arr[randNum]
}

function switchPlayer() {
	if (currentPlayer === 'left') {
		currentPlayer = 'right'
	} else {
		currentPlayer = 'left'
	}
}

function render() {
	document.querySelectorAll('.player').forEach(playerEl => {
		if (playerEl.className.indexOf(currentPlayer) !== -1) {
			var currentClassName = playerEl.className
			// playerEl.className = 
		}
	})
}
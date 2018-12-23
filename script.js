var questions = [
	// 'What does marriage mean to you?',
	// 'What doesn\'t marriage mean to you?',
	// 'Do you believe in marriage as an institution?',
	// 'What do you respect in me?',
	// 'Being out to our family? How do you want me to support you in this?',
	// 'How will we pull together our finances? Will we?',
	// 'What would happen in a family crisis?',
	// 'How many kids do you want?',
	// 'Do you believe in the phrase, "All you need is love?" Why or why not?',
	// 'Given the choice of anyone in the world, whom would you want as a dinner guest?',
	// 'Would you like to be famous? In what way?',
	// 'Before making a telephone call, do you ever rehearse what you are going to say? Why?',
	// 'What would constitute a “perfect” day for you?',
	// 'When did you last sing to yourself? To someone else?',
	// 'If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?',
	// 'Do you have a secret hunch about how you will die?',
	// 'Name three things you and your partner appear to have in common.',
	// 'For what in your life do you feel most grateful?',
	// 'If you could change anything about the way you were raised, what would it be?',
	// 'Take four minutes and tell your partner your life story in as much detail as possible.',
	// 'If you could wake up tomorrow having gained any one quality or ability, what would it be?',
	// 'If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?',
	// 'Is there something that you\'ve dreamed of doing for a long time? Why haven\'t you done it?',
	// 'What is the greatest accomplishment of your life?',
	// 'What do you value most in a friendship?',
	// 'What is your most treasured memory?',
	// 'What is your most terrible memory?',
	// 'If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?',
	// 'What does friendship mean to you?',
	// 'What roles do love and affection play in your life?',
	// 'Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items.',
	// 'How close and warm is your family? Do you feel your childhood was happier than most other people\'s?',
	// 'Complete this sentence: “I wish I had someone with whom I could share...“',
	// 'If you were going to become a close friend with your partner, please share what would be important for him or her to know.',
	// 'Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you\'ve just met.',
	// 'Share with your partner an embarrassing moment in your life.',
	// 'When did you last cry in front of another person? By yourself?',
	// 'Tell your partner something that you like about them already.',
	// 'What, if anything, is too serious to be joked about?',
	// 'If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven\'t you told them yet?',
	// 'Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?',
	// 'Of all the people in your family, whose death would you find most disturbing? Why?',
	// 'Share a personal problem and ask your partner\'s advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen.'
	'If you didn\'t have to sleep, what would you do with the extra time?',
	'What\'s your favorite piece of clothing you own / owned?',
	'What hobby would you get into if time and money weren\'t an issue?',
	'What would your perfect room look like?',
	'How often do you play sports?',
	'What fictional place would you most like to go?',
	'What job would you be terrible at?',
	'When was the last time you climbed a tree?',
	'If you could turn any activity into an Olympic sport, what would you have a good chance at winning medal for?',
	'What is the most annoying habit that other people have?',
	'What job do you think you\'d be really good at?',
	'What skill would you like to master?',
	'What would be the most amazing adventure to go on?',
	'If you had unlimited funds to build a house that you would live in for the rest of your life, what would the finished house be like?',
	'What\'s your favorite drink?',
	'What state or country do you never want to go back to?',
	'What songs have you completely memorized?',
	'What game or movie universe would you most like to live in?',
	'What do you consider to be your best find?',
	'Are you usually early or late?',
	'What pets did you have while you were growing up?',
	'When people come to you for help, what do they usually want help with?',
	'What takes up too much of your time?',
	'What do you wish you knew more about?',
	'What would be your first question after waking up from being cryogenically frozen for 100 years?',
	'What are some small things that make your day better?',
	'Who\'s your go to band or artist when you can\'t decide on something to listen to?',
	'What shows are you into?',
	'What TV channel doesn\'t exist but really should?',
	'Who has impressed you most with what they\'ve accomplished?',
	'What age do you wish you could permanently be?',
	'What TV show or movie do you refuse to watch?',
	'What would be your ideal way to spend the weekend?',
	'What is something that is considered a luxury, but you don\'t think you could live without?',
	'What\'s your claim to fame?',
	'What\'s something you like to do the old-fashioned way?',
	'What\'s your favorite genre of book or movie?',
	'How often do you people watch?',
	'What have you only recently formed an opinion about?',
	'What\'s the best single day on the calendar?',
	'What are you interested in that most people haven\'t heard of?',
	'How do you relax after a hard day of work?',
	'What was the best book or series that you\'ve ever read?',
	'What\'s the farthest you\'ve ever been from home?',
	'What is the most heartwarming thing you\'ve ever seen?',
	'What is the most annoying question that people ask you?',
	'What could you give a 40-minute presentation on with absolutely no preparation?',
	'If you were dictator of a small island nation, what crazy dictator stuff would you do?',
	'What is something you think everyone should do at least once in their lives?',
	'Would you rather go hang gliding or whitewater rafting?',
	'What\'s your dream car?',
	'What\'s worth spending more on to get the best?',
	'What is something that a ton of people are obsessed with but you just don\'t get the point of?',
	'What are you most looking forward to in the next 10 years?',
	'Where is the most interesting place you\'ve been?',
	'What\'s something you\'ve been meaning to try but just haven\'t gotten around to it?',
	'What\'s the best thing that happened to you last week?',
	'What piece of entertainment do you wish you could erase from your mind so that you could experience for the first time again?',
	'If all jobs had the same pay and hours, what job would you like to have?',
	'What amazing thing did you do that no one was around to see?',
	'How different was your life one year ago?',
	'What\'s the best way to start the day?',
	'What quirks do you have?',
	'What would you rate 10 / 10?',
	'What fad or trend do you hope comes back?',
	'What\'s the most interesting piece of art you\'ve seen?',
	'What kind of art do you enjoy most?',
	'What do you hope never changes?',
	'What city would you most like to live in?',
	'What movie title best describes your life?',
	'Why did you decide to do the work you are doing now?',
	'What\'s the best way a person can spend their time?',
	'If you suddenly became a master at woodworking, what would you make?',
	'Where is the most relaxing place you\'ve ever been?',
	'What is the luckiest thing that has happened to you?',
	'Where would you rather be from?',
	'What are some things you\'ve had to unlearn?',
	'What are you looking forward to in the coming months?',
	'What website do you visit most often?',
	'What one thing do you really want but can\'t afford?',
	'Where do you usually go when you when you have time off?',
	'Where would you spend all your time if you could?',
	'What is special about the place you grew up?',
	'What age do you want to live to?',
	'What are you most likely to become famous for?',
	'What are you absolutely determined to do?',
	'What is the most impressive thing you know how to do?',
	'What do you wish you knew more about?',
	'What question would you most like to know the answer to?',


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
const quizEngine = {
    userName: "",
    filteredQuestions: [],
    currentIndex: 0,
    userAnswers: {},
    timeLimit: 0,
    timerId: null,

    init() {
        const savedName = localStorage.getItem('emakk_user');
        if (savedName) {
            this.userName = savedName;
            document.getElementById('player-name').innerText = this.userName;
            this.toggleScreen('dashboard');
        }
    },

    login() {
        const input = document.getElementById('user-name');
        if (!input.value.trim()) return alert("Enter your name!");
        this.userName = input.value;
        localStorage.setItem('emakk_user', this.userName);
        document.getElementById('player-name').innerText = this.userName;
        this.toggleScreen('dashboard');
    },

    logout() {
        localStorage.removeItem('emakk_user');
        location.reload();
    },

    startQuiz() {
        const topic = document.getElementById('topic-select').value;
        const diff = document.getElementById('diff-select').value;
        const count = parseInt(document.getElementById('count-select').value);
        const mins = parseInt(document.getElementById('time-select').value);

        this.filteredQuestions = QUESTION_BANK.filter(q => {
            return (topic === 'all' || q.topic === topic) && (diff === 'all' || q.difficulty === diff);
        }).sort(() => Math.random() - 0.5).slice(0, count);

        if (this.filteredQuestions.length === 0) return alert("No questions found for this criteria!");

        this.currentIndex = 0;
        this.userAnswers = {};
        this.timeLimit = mins * 60;
        
        document.getElementById('quiz-modal').classList.remove('hidden');
        this.renderQuestion();
        this.startTimer();
    },

    renderQuestion() {
        const q = this.filteredQuestions[this.currentIndex];
        document.getElementById('q-num').innerText = this.currentIndex + 1;
        document.getElementById('q-total').innerText = this.filteredQuestions.length;
        document.getElementById('question-text').innerText = q.question;

        const grid = document.getElementById('options-grid');
        grid.innerHTML = "";

        const opts = q.options || ["True", "False"];
        opts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = `option-btn ${this.userAnswers[this.currentIndex] === opt ? 'active' : ''}`;
            btn.innerText = opt;
            btn.onclick = () => {
                this.userAnswers[this.currentIndex] = opt;
                this.renderQuestion();
            };
            grid.appendChild(btn);
        });
    },

    nextQuestion() {
        if (this.currentIndex < this.filteredQuestions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
        } else {
            if (confirm("Finish and submit?")) this.submitResults();
        }
    },

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
        }
    },

    startTimer() {
        clearInterval(this.timerId);
        this.timerId = setInterval(() => {
            this.timeLimit--;
            const m = Math.floor(this.timeLimit / 60);
            const s = this.timeLimit % 60;
            document.getElementById('timer').innerText = `${m}:${s < 10 ? '0'+s : s}`;
            if (this.timeLimit <= 0) this.submitResults();
        }, 1000);
    },

    submitResults() {
        clearInterval(this.timerId);
        document.getElementById('quiz-modal').classList.add('hidden');
        
        let correct = 0;
        const reviewList = document.getElementById('review-list');
        reviewList.innerHTML = "";

        this.filteredQuestions.forEach((q, i) => {
            const isCorrect = this.userAnswers[i] === q.answer;
            if (isCorrect) correct++;

            const div = document.createElement('div');
            div.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
            div.innerHTML = `
                <p><strong>Q${i+1}:</strong> ${q.question}</p>
                <p>Your Answer: ${this.userAnswers[i] || 'None'} | Correct: <strong>${q.answer}</strong></p>
                <div class="explanation-box">${q.explanation}</div>
            `;
            reviewList.appendChild(div);
        });

        document.getElementById('score-percent').innerText = Math.round((correct/this.filteredQuestions.length)*100) + "%";
        document.getElementById('res-correct').innerText = correct;
        document.getElementById('res-total').innerText = this.filteredQuestions.length;
        this.toggleScreen('result-screen');

        const selectedDifficulty = document.getElementById('diff-select').value;


        // --- DATABASE SYNC LOGIC ---
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx5LOOM5UyN95UcAlK8MJg813NlnmAddK8x6uGJVZTfzpjQcAe8E76U4aaXGsDx30dp/exec'; // <--- Paste URL here

        const dataToSend = {
            name: this.userName,
            topic: document.getElementById('topic-select').value,
            difficulty: selectedDifficulty, // Added this line
            score: Math.round((correct / this.filteredQuestions.length) * 100),
            total: this.filteredQuestions.length
        };

        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors', // Essential for Google Scripts
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })
        .then(() => console.log("Data synced to EMAKK Database"))
        .catch(error => console.error('Sync Error:', error));
            },

            goToDashboard() { this.toggleScreen('dashboard'); },

            toggleScreen(id) {
                document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
                document.getElementById(id).classList.remove('hidden');
    }


};

window.onload = () => quizEngine.init();
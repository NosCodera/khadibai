import { useState } from "react";
import "./App.css";
import birthdayData from "./data/birthdayData";

function App() {
  const [started, setStarted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [letterOpen, setLetterOpen] = useState(false);

  const [blownCandles, setBlownCandles] = useState([]);
  const [showFinalSurprise, setShowFinalSurprise] = useState(false);

  const quiz = birthdayData.quiz;

  const allCandlesBlown = blownCandles.length === 5;

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(index);

    if (index === quiz[currentQuestion].answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
  };

  const blowCandle = (index) => {
    if (!blownCandles.includes(index)) {
      setBlownCandles((previous) => [...previous, index]);
    }
  };

  const openFinalSurprise = () => {
    setShowFinalSurprise(true);
  };

  return (
    <main className="app">
      {!started ? (
        <section className="opening-screen">
          <div className="stars"></div>

          <div className="opening-content">
            <p className="eyebrow">{birthdayData.openingLine}</p>

            <h1>
              You have
              <br />
              <span>a surprise.</span>
            </h1>

            <p className="opening-subtitle">
              And yes... you have to click the button.
            </p>

            <button
              className="surprise-button"
              onClick={() => setStarted(true)}
            >
              Open your surprise
              <span>→</span>
            </button>
          </div>
        </section>
      ) : (
        <>
          {/* HERO */}

          <section className="hero-section">
            <div className="hero-glow"></div>

            <div className="hero-content">
              <p className="hero-eyebrow">TODAY IS YOUR DAY</p>

              <div className="name-wrapper">
                <h1 className="friend-name">{birthdayData.name}</h1>
              </div>

              <h2 className="birthday-title">
                Happy Birthday
                <span> ✨</span>
              </h2>

              <p className="hero-subtitle">
                Another year.
                <br />
                Another chapter.
                <br />
                And a lot more memories to come.
              </p>

              <div className="scroll-indicator">
                <span>SCROLL TO CONTINUE</span>
                <div className="scroll-arrow">↓</div>
              </div>
            </div>
          </section>

          {/* REASONS */}

          <section className="reasons-section">
            <div className="reasons-container">
              <p className="section-eyebrow">JUST A FEW THINGS</p>

              <h2 className="section-title">
                Why you're
                <br />
                <span>special.</span>
              </h2>

              <p className="section-intro">
                There are probably a hundred reasons,
                <br />
                but let's start with these...
              </p>

              <div className="reasons-grid">
                {birthdayData.reasons.map((reason, index) => (
                  <div className="reason-card" key={index}>
                    <div className="reason-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="reason-emoji">{reason.emoji}</div>

                    <h3>{reason.title}</h3>

                    <p>{reason.text}</p>
                  </div>
                ))}
              </div>

              <div className="continue-message">
                <span>THERE'S MORE</span>
                <div>↓</div>
              </div>
            </div>
          </section>

          {/* MEMORIES */}

          <section className="memories-section">
            <div className="memories-container">
              <p className="section-eyebrow">A FEW MOMENTS</p>

              <h2 className="section-title">
                Our little
                <br />
                <span>memories.</span>
              </h2>

              <p className="section-intro">
                Because some moments deserve
                <br />
                to live a little longer.
              </p>

              <div className="memories-grid">
                {birthdayData.memories.map((memory, index) => {
                  const layoutClass =
                    index === 0 ||
                    index === 3 ||
                    index === 6
                      ? "memory-featured"
                      : "";

                  return (
                    <article
                      className={`memory-card memory-${index + 1} ${layoutClass} ${
                        memory.type === "video" ? "memory-video-card" : ""
                      }`}
                      key={index}
                    >
                      <div className="memory-image-wrapper">
                        {memory.type === "video" ? (
                          <video
                            src={memory.video}
                            className="memory-image memory-video"
                            controls
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <img
                            src={memory.image}
                            alt={memory.title}
                            className="memory-image"
                          />
                        )}

                        <div className="memory-overlay">
                          <span>
                            {memory.type === "video"
                              ? "A MEMORY IN MOTION"
                              : "A MEMORY WORTH KEEPING"}
                          </span>
                        </div>
                      </div>

                      <div className="memory-content">
                        <h3>{memory.title}</h3>

                        <p>{memory.message}</p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="continue-message">
                <span>KEEP GOING</span>
                <div>↓</div>
              </div>
            </div>
          </section>

          {/* QUIZ */}

          <section className="quiz-section">
            <div className="quiz-container">
              <p className="section-eyebrow">TIME FOR A TEST</p>

              <h2 className="section-title">
                How well do
                <br />
                <span>you know us?</span>
              </h2>

              {!quizFinished ? (
                <div className="quiz-box">
                  <div className="quiz-progress">
                    <span>
                      QUESTION {currentQuestion + 1}
                      {" / "}
                      {quiz.length}
                    </span>

                    <div className="progress-track">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${
                            ((currentQuestion + 1) / quiz.length) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <h3 className="quiz-question">
                    {quiz[currentQuestion].question}
                  </h3>

                  <div className="quiz-options">
                    {quiz[currentQuestion].options.map((option, index) => {
                      let className = "quiz-option";

                      if (selectedAnswer !== null) {
                        if (index === quiz[currentQuestion].answer) {
                          className += " correct";
                        } else if (index === selectedAnswer) {
                          className += " incorrect";
                        }
                      }

                      return (
                        <button
                          key={index}
                          className={className}
                          onClick={() => handleAnswer(index)}
                          disabled={selectedAnswer !== null}
                        >
                          <span className="option-letter">
                            {String.fromCharCode(65 + index)}
                          </span>

                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  {selectedAnswer !== null && (
                    <div className="quiz-feedback">
                      <span>
                        {selectedAnswer === quiz[currentQuestion].answer
                          ? "Correct! 😎"
                          : "Hmm... not quite! 😂"}
                      </span>

                      <button className="quiz-next" onClick={nextQuestion}>
                        {currentQuestion === quiz.length - 1
                          ? "See my result"
                          : "Next question →"}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="quiz-result">
                  <div className="result-emoji">
                    {score === quiz.length
                      ? "🏆"
                      : score >= quiz.length / 2
                      ? "❤️"
                      : "😂"}
                  </div>

                  <p className="result-small">YOUR FRIENDSHIP SCORE</p>

                  <div className="result-score">
                    {score}
                    <span>/{quiz.length}</span>
                  </div>

                  <h3>
                    {score === quiz.length
                      ? "Okay, you actually know us REALLY well."
                      : score >= quiz.length / 2
                      ? "Not bad... I'll allow it. 😌"
                      : "We seriously need to talk. 😂"}
                  </h3>

                  <button className="quiz-restart" onClick={restartQuiz}>
                    Try again
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* LETTER */}

          <section className="letter-section">
            <div className="letter-container">
              <p className="section-eyebrow">ONE LAST THING...</p>

              <h2 className="section-title">
                I wrote something
                <br />
                <span>for you.</span>
              </h2>

              {!letterOpen ? (
                <div className="envelope-area">
                  <button
                    className="envelope"
                    onClick={() => setLetterOpen(true)}
                  >
                    <div className="envelope-flap"></div>
                    <div className="envelope-paper"></div>
                    <div className="envelope-heart">♥</div>
                  </button>

                  <p className="envelope-instruction">TAP TO OPEN</p>
                </div>
              ) : (
                <div className="letter-paper">
                  <div className="letter-inner">
                    <p className="letter-greeting">
                      {birthdayData.letter.greeting}
                    </p>

                    {birthdayData.letter.paragraphs.map(
                      (paragraph, index) => (
                        <p className="letter-paragraph" key={index}>
                          {paragraph}
                        </p>
                      )
                    )}

                    <p className="letter-signature">
                      {birthdayData.letter.signature}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* CAKE */}

          <section className="cake-section">
            <div className="cake-container">
              <p className="section-eyebrow">MAKE A WISH</p>

              <h2 className="section-title">
                It's time for
                <br />
                <span>your cake.</span>
              </h2>

              {!allCandlesBlown ? (
                <>
                  <p className="cake-instruction">
                    Click every candle to blow it out.
                  </p>

                  <div className="cake-wrapper">
                    <div className="candles">
                      {[0, 1, 2, 3, 4].map((candle) => (
                        <button
                          key={candle}
                          className={`candle ${
                            blownCandles.includes(candle) ? "blown" : ""
                          }`}
                          onClick={() => blowCandle(candle)}
                        >
                          {!blownCandles.includes(candle) && (
                            <span className="flame">🔥</span>
                          )}

                          <span className="candle-stick"></span>
                        </button>
                      ))}
                    </div>

                    <div className="cake-top"></div>

                    <div className="cake-body">
                      <div className="cake-cream"></div>
                      <div className="cake-decoration">♥ ♥ ♥</div>
                    </div>

                    <div className="cake-plate"></div>
                  </div>
                </>
              ) : (
                <div className="wish-complete">
                  <div className="wish-confetti">
                    {Array.from({ length: 30 }).map((_, index) => (
                      <span
                        key={index}
                        className="confetti-piece"
                        style={{
                          "--i": index,
                        }}
                      ></span>
                    ))}
                  </div>

                  <div className="wish-emoji">🎉</div>

                  <h3>Wish made.</h3>

                  <p>
                    May this year give you
                    <br />
                    everything you're wishing for.
                  </p>

                  <div className="final-surprise-action">
                  <button
                    className="final-surprise-button"
                    onClick={openFinalSurprise}
                  >
                    There's one more thing...
                    <span>→</span>
                  </button>

                  <p className="final-surprise-hint">
                    Click me, then scroll ↓
                  </p>
                </div>
                </div>
              )}
            </div>
          </section>

          {/* FINAL SKETCH */}

          {showFinalSurprise && (
            <section className="final-surprise-section">
              <div className="final-surprise-stars"></div>

              <div className="final-surprise-content">
                <p className="section-eyebrow">THE ACTUAL SURPRISE</p>

                <h2 className="final-surprise-title">
                  Made this
                  <br />
                  <span>just for you.</span>
                </h2>

                <div className="sketch-frame">
                  <div className="sketch-glow"></div>

                  <div className="sketch-paper">
                    <img
                      src={birthdayData.sketch.image}
                      alt="A sketch made for Khadija"
                      className="sketch-image"
                    />
                  </div>
                </div>

                <p className="sketch-message">
                  {birthdayData.sketch.message}
                </p>

                <div className="final-heart">♥</div>

                <p className="final-name">{birthdayData.name}</p>

                <p className="final-ending">
                  Happy Birthday.
                  <br />
                  And thank you for being you.
                </p>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}

export default App;
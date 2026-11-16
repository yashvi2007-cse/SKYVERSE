import React, { useState } from 'react';
import { QuizQuestion, TopicItem } from '../../../types/learnExplore';
import {
  X,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RotateCcw,
  ArrowRight,
  Award,
  Sparkles,
  Lightbulb,
  Check,
  ChevronRight
} from 'lucide-react';

interface TopicQuizModalProps {
  topic: TopicItem;
  isOpen: boolean;
  onClose: () => void;
  onQuizCompleted: (topicId: string, score: number, accuracy: number, earnedXp: number) => void;
}

export const TopicQuizModal: React.FC<TopicQuizModalProps> = ({
  topic,
  isOpen,
  onClose,
  onQuizCompleted
}) => {
  if (!isOpen) return null;

  const questions: QuizQuestion[] = topic.quizQuestions || [];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (hasSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || hasSubmitted) return;
    setHasSubmitted(true);
    if (selectedOption === currentQ.correctAnswerIndex) {
      setCorrectAnswersCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
      setShowHint(false);
    } else {
      // Finished
      const finalCorrect = correctAnswersCount + (selectedOption === currentQ.correctAnswerIndex ? 1 : 0);
      const accuracy = Math.round((finalCorrect / questions.length) * 100);
      const earnedXp = finalCorrect * 25 + (accuracy >= 80 ? 50 : 0);
      setIsFinished(true);
      onQuizCompleted(topic.id, finalCorrect, accuracy, earnedXp);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setShowHint(false);
    setCorrectAnswersCount(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#09101E] border border-[#1E2D45] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-[#1E2D45] bg-[#0C1527] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider">
                Topic Mastery Quiz
              </div>
              <h3 className="text-base font-bold font-display text-white">{topic.title}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-[#94A3B8] hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quiz Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {!isFinished ? (
            <>
              {/* Progress & Question Counter */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#94A3B8]">
                  Question <strong className="text-white">{currentIndex + 1}</strong> of {questions.length}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                    currentQ.difficulty === 'Beginner'
                      ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                      : currentQ.difficulty === 'Intermediate'
                      ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                      : 'bg-purple-500/15 text-purple-400 border-purple-500/30'
                  }`}
                >
                  {currentQ.difficulty}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-[#111C2E] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Scenario Context if present */}
              {currentQ.scenarioContext && (
                <div className="p-3.5 rounded-xl bg-[#111C2E]/70 border border-[#1E2D45] text-xs text-slate-300 font-sans leading-relaxed">
                  <strong className="text-[#38BDF8] font-mono">Observation Scenario:</strong> {currentQ.scenarioContext}
                </div>
              )}

              {/* Question Text */}
              <h4 className="text-base sm:text-lg font-bold font-display text-white leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  let btnStyle = 'bg-[#111C2E] border-[#1E2D45] text-slate-300 hover:border-[#38BDF8] hover:bg-[#15233A]';

                  if (hasSubmitted) {
                    if (idx === currentQ.correctAnswerIndex) {
                      btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                    } else if (idx === selectedOption) {
                      btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300';
                    } else {
                      btnStyle = 'bg-[#111C2E]/40 border-[#1E2D45]/40 text-slate-500 opacity-60';
                    }
                  } else if (selectedOption === idx) {
                    btnStyle = 'bg-[#38BDF8]/20 border-[#38BDF8] text-white shadow-md shadow-[#38BDF8]/20 font-semibold';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={hasSubmitted}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition flex items-start gap-3 ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#0C1527] border border-[#1E2D45] flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {hasSubmitted && idx === currentQ.correctAnswerIndex && (
                        <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Hint Accordion */}
              {currentQ.hint && !hasSubmitted && (
                <div>
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="flex items-center gap-1.5 text-xs font-mono text-[#F59E0B] hover:underline"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
                  </button>
                  {showHint && (
                    <div className="mt-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 font-sans">
                      💡 {currentQ.hint}
                    </div>
                  )}
                </div>
              )}

              {/* Instant Answer Explanation upon submission */}
              {hasSubmitted && (
                <div
                  className={`p-4 rounded-2xl border text-xs font-sans leading-relaxed space-y-1.5 animate-in fade-in duration-200 ${
                    selectedOption === currentQ.correctAnswerIndex
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold font-mono text-sm">
                    {selectedOption === currentQ.correctAnswerIndex ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Correct! +25 Learning XP</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-rose-400" />
                        <span className="text-rose-400">Incorrect Answer</span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-300">{currentQ.explanation}</p>
                </div>
              )}
            </>
          ) : (
            /* ================= COMPLETION SCREEN ================= */
            <div className="text-center py-8 space-y-6">
              <div className="relative w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-[#38BDF8] via-[#818CF8] to-[#A855F7] p-1 shadow-2xl shadow-[#38BDF8]/30">
                <div className="w-full h-full rounded-[22px] bg-[#080D18] flex items-center justify-center">
                  <Award className="w-12 h-12 text-[#FDE047] animate-bounce" />
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold font-display text-white">Quiz Completed!</h4>
                <p className="text-sm text-[#94A3B8] font-sans mt-1">
                  You tested your understanding of <strong className="text-white">{topic.title}</strong>
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                <div className="p-3 rounded-2xl bg-[#0C1527] border border-[#1E2D45]">
                  <div className="text-2xl font-bold font-mono text-white">
                    {correctAnswersCount}/{questions.length}
                  </div>
                  <div className="text-[10px] font-mono text-[#94A3B8]">Score</div>
                </div>

                <div className="p-3 rounded-2xl bg-[#0C1527] border border-[#1E2D45]">
                  <div className="text-2xl font-bold font-mono text-[#38BDF8]">
                    {Math.round((correctAnswersCount / questions.length) * 100)}%
                  </div>
                  <div className="text-[10px] font-mono text-[#94A3B8]">Accuracy</div>
                </div>

                <div className="p-3 rounded-2xl bg-[#0C1527] border border-[#1E2D45]">
                  <div className="text-2xl font-bold font-mono text-[#FDE047]">
                    +{correctAnswersCount * 25 + (correctAnswersCount === questions.length ? 50 : 0)}
                  </div>
                  <div className="text-[10px] font-mono text-[#94A3B8]">XP Earned</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleRetry}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-white hover:bg-[#1E2D45] transition"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Retry Quiz</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#080D18] font-bold text-xs font-mono shadow-lg shadow-[#38BDF8]/20 hover:opacity-90 transition"
                >
                  <span>Done & Return</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {!isFinished && (
          <div className="p-4 border-t border-[#1E2D45] bg-[#0C1527] flex items-center justify-between">
            <span className="text-xs font-mono text-[#94A3B8]">
              {selectedOption === null ? 'Select an answer to proceed' : 'Submit when ready'}
            </span>

            {!hasSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-2.5 rounded-xl font-bold text-xs font-mono transition ${
                  selectedOption !== null
                    ? 'bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] text-[#080D18] shadow-md shadow-[#38BDF8]/30 hover:opacity-90'
                    : 'bg-[#111C2E] text-slate-500 cursor-not-allowed border border-[#1E2D45]'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#080D18] font-bold text-xs font-mono transition shadow-md shadow-[#10B981]/30"
              >
                <span>{currentIndex + 1 < questions.length ? 'Next Question' : 'View Results'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


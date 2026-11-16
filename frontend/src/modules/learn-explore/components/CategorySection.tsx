import React from 'react';
import { LearningCategory, TopicItem, TopicProgress } from '../../../types/learnExplore';
import { TopicCard } from './TopicCard';
import {
  Globe,
  Sun,
  Orbit,
  Activity,
  Compass,
  Telescope,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface CategorySectionProps {
  category: LearningCategory;
  topics: TopicItem[];
  quizHistory: Record<string, TopicProgress>;
  onSelectTopic: (topicId: string) => void;
  onStartQuiz: (topic: TopicItem) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  topics,
  quizHistory,
  onSelectTopic,
  onStartQuiz
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      case 'Orbit':
        return <Orbit className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Telescope':
        return <Telescope className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section className="space-y-4">
      {/* Category Section Header */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-[#1E2D45]">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center border shadow-lg"
            style={{
              backgroundColor: `${category.badgeColor}15`,
              borderColor: `${category.badgeColor}40`,
              color: category.badgeColor
            }}
          >
            {getCategoryIcon(category.iconName)}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold font-display text-white">{category.title}</h3>
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold"
                style={{
                  backgroundColor: `${category.badgeColor}15`,
                  borderColor: `${category.badgeColor}40`,
                  color: category.badgeColor
                }}
              >
                {topics.length} Topics
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans mt-0.5">{category.subtitle}</p>
          </div>
        </div>

        <p className="text-xs text-slate-400 max-w-md hidden md:block text-right font-sans">
          {category.description}
        </p>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            progress={quizHistory[topic.id]}
            onSelect={() => onSelectTopic(topic.id)}
            onStartQuiz={() => onStartQuiz(topic)}
          />
        ))}
      </div>
    </section>
  );
};


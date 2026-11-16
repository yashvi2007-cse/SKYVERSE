import { TopicItem, CategoryId } from '../../../types/learnExplore';
import { FUNDAMENTALS_TOPICS } from './topics/fundamentals';
import { STARS_TOPICS } from './topics/stars';
import { PLANETS_TOPICS } from './topics/planets';
import { LIGHT_TOPICS } from './topics/light';
import { DEEP_SPACE_TOPICS } from './topics/deepSpace';
import { MISSIONS_TOPICS } from './topics/missions';

export const ALL_TOPICS: TopicItem[] = [
  ...FUNDAMENTALS_TOPICS,
  ...STARS_TOPICS,
  ...PLANETS_TOPICS,
  ...LIGHT_TOPICS,
  ...DEEP_SPACE_TOPICS,
  ...MISSIONS_TOPICS
];

export const TOPICS_BY_ID: Record<string, TopicItem> = ALL_TOPICS.reduce((acc, topic) => {
  acc[topic.id] = topic;
  return acc;
}, {} as Record<string, TopicItem>);

export function getTopicById(id: string): TopicItem | undefined {
  return TOPICS_BY_ID[id];
}

export function getTopicsByCategory(categoryId: CategoryId): TopicItem[] {
  return ALL_TOPICS.filter((t) => t.categoryId === categoryId);
}

export function searchTopics(query: string): TopicItem[] {
  if (!query || !query.trim()) return ALL_TOPICS;
  const q = query.toLowerCase().trim();
  return ALL_TOPICS.filter((t) => {
    return (
      t.title.toLowerCase().includes(q) ||
      t.subtitle.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.simpleExplanation.toLowerCase().includes(q) ||
      t.categoryId.toLowerCase().includes(q) ||
      t.terminology.some((term) => term.term.toLowerCase().includes(q) || term.definition.toLowerCase().includes(q))
    );
  });
}

export function getFeaturedTopic(): TopicItem {
  // Highlight NASA SPHEREx as the flagship featured topic of SKYVERSE
  return TOPICS_BY_ID['nasa-spherex'] || ALL_TOPICS[0];
}

export function getRecommendedTopics(completedIds: string[] = []): TopicItem[] {
  // Recommend topics that are not yet completed
  const uncompleted = ALL_TOPICS.filter((t) => !completedIds.includes(t.id));
  if (uncompleted.length > 0) {
    return uncompleted.slice(0, 4);
  }
  return ALL_TOPICS.slice(0, 4);
}


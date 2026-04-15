import type { Lesson, LessonInput } from "packages-contracts";

export const createLesson = (input: LessonInput): Lesson => {
  return {
    id: crypto.randomUUID(),
    title: input.title.trim(),
    content: input.content.trim(),
    level: input.level,
    createdAt: new Date().toISOString(),
  };
};

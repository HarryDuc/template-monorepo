export type LessonLevel = "beginner" | "intermediate" | "advanced";

export interface LessonInput {
  title: string;
  content: string;
  level: LessonLevel;
}

export interface Lesson extends LessonInput {
  id: string;
  createdAt: string;
}

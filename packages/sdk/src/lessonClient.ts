import { createLesson } from "packages-core";
import type { Lesson, LessonInput } from "packages-contracts";

export class LessonClient {
  private readonly lessons: Lesson[] = [];

  create(input: LessonInput): Lesson {
    const lesson = createLesson(input);
    this.lessons.push(lesson);
    return lesson;
  }

  list(): Lesson[] {
    return [...this.lessons];
  }
}

export type Result<T, E> = { success: true; data: T } | { success: false; error: E };

export class RescueTask<T> {
  private constructor(private promise: Promise<T>) {}

  static from<T>(fn: () => Promise<T>): RescueTask<T> {
    return new RescueTask(fn());
  }

  async rescue<U>(fallback: (error: unknown) => U): Promise<T | U> {
    try {
      return await this.promise;
    } catch (error) {
      return fallback(error);
    }
  }
}
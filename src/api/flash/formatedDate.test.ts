import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import formatedDate from './formatedDate'

describe('creating backup date suffix', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  it('should format Nov 23, 2024 15:23:44', () => {
    // set hour within business hours
    const date = new Date(2024, 10, 23, 15, 23, 44, 100);
    vi.setSystemTime(date);

    // access Date.now() will result in the date set above
    expect(formatedDate()).toEqual("2024-11-23-15_23_44");
  });
})
import { timeCalculation, validateTime1, validateTime2 } from '../timeCalc';

describe('Testing the Time calculator functionalities', () => {
  test('should return the difference of two dates complet dates in Hour ', () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const fulldate = {
      fromFullDate: today,
      toFullDate: tomorrow,
    };
    const timeResult = timeCalculation(fulldate) * 1;
    expect(timeResult).toEqual(24.0);
  });

  test('should return the difference of two dates complet dates in Hour ', () => {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    const todayAfter = new Date();
    todayAfter.setHours(0);
    todayAfter.setMinutes(30);
    const fulldate = {
      fromFullDate: today,
      toFullDate: todayAfter,
    };
    const timeResult = timeCalculation(fulldate) * 1;
    expect(timeResult).toEqual(0.5);
  });
});

describe('Testing the Time Validator functionality', () => {
  test('should return valid==true for date>= today ', () => {
    const bookingDate = '07-04-1997';
    const valid = validateTime1(bookingDate);
    expect(valid).toBe(false);
  });

  test('should return valid==true for date>= today ', () => {
    const today = new Date();
    const bookingDate = `${today.getDate()}-${1 + today.getMonth()}-${today.getFullYear()}`;
    const valid = validateTime1(bookingDate);
    expect(valid).toBe(true);
  });

  test('should return valid==true for date1 <= date2 ', () => {
    const today = new Date();
    today.setDate(10);
    today.setMonth(10);
    const from = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`.concat('');
    today.setDate(12);
    const to = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`.concat('');
    const valid = validateTime2(from, to);
    expect(valid).toBe(true);
  });

  test('should return false when  from > to ', () => {
    const today = new Date();
    today.setDate(15);
    today.setMonth(10);
    const from = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
    today.setDate(10);
    const to = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
    const valid = validateTime2(from, to);
    expect(valid).toBe(false);
  });
});

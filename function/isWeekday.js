export function isWeekday(day) {
    if (!day.toLowerCase().endsWith('day')) {
      return "Please enter a day of the week";
    }

    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    return weekdays.includes(day.toLowerCase());
  }
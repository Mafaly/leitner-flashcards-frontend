export const CategoryMap: { [key: string]: number | string } = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  SIXTH: 6,
  SEVEN: 7,
  DONE: 'Done',
};


export function getCategoryKey(categoryValue: number | string): string {
  const entry = Object.entries(CategoryMap).find(([, val]) => val === categoryValue);
  return entry ? entry[0] : '';
}

export function getCategoryValue(categoryKey: string): number | string {
  return CategoryMap[categoryKey];
}

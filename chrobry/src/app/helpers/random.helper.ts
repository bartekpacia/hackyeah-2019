export function getRandomInt(max): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomArrayElement(array: Array<any>): any {
  if (!array || !array.length) {
    return undefined;
  }

  return array[getRandomInt(array.length - 1)];
}

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error('Unable to add character twice');
    }
  }

  addAll(...characters) {
    for (const character of characters) {
      this.members.add(character);
    }
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator] = function () {
    let current = 0;
    const members = this.toArray();

    return {
      next() {
        if (current < members.length) {
          const value = members[current];
          current += 1;

          return {
            done: false,
            value,
          };
        }

        return {
          done: true,
        };
      },
    };
  };
}

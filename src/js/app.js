import Character from "./character.js";
import Team from "./team.js";

const char1 = new Character('Luchnik', 'Bowman');
const char2 = new Character('Ruggy', 'Bowman');

const characters = [char1, char2];

const team = new Team();

team.addAll(...characters);

for (const char of team) {
  console.log(char);
}

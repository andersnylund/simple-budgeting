export class Bank {
  constructor(name, dateHeaderIndex, dateHeaderFormat, partyIndex, amountIndex) {
    this.name = name;
    this.dateHeaderIndex = dateHeaderIndex;
    this.dateHeaderFormat = dateHeaderFormat;
    this.partyIndex = partyIndex;
    this.amountIndex = amountIndex;
  }
}

export const danske = new Bank('Danske Bank', 0, 'DD.MM.YYYY', 1, 2);
export const nordea = new Bank('Nordea', 2, 'DD.MM.YYYY', 4, 3);
export const op = new Bank('Osuuspankki', 0, 'DD.MM.YYYY', 5, 2);

export const banks = [danske, nordea, op];

export default Bank;

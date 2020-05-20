#!/usr/bin/env node

class StatisticsCalculator {
  constructor(ns) {
    this.ns = ns;
  }

  size() {
    return this.ns.length;
  }

  mean() {
    return this.sum() / this.size();
  }

  median() {
    const mid = Math.floor(this.ns.length / 2);
    return this.ns.length % 2 !== 0
      ? this.ns[mid]
      : (this.ns[mid - 1] + this.ns[mid]) / 2;
  }

  maximum() {
    return Math.max(...this.ns);
  }

  minimum() {
    return Math.min(...this.ns);
  }

  range() {
    return this.maximum() - this.minimum();
  }

  sum() {
    return this.ns.reduce((acc, n) => acc + n, 0);
  }

  product() {
    return this.ns.reduce((acc, n) => acc * n, 1);
  }
}

module.exports = {
  StatisticsCalculator,
  main
};

function main(args) {
  if (args.length === 0) {
    throw new Error('At least one argument must be specified.');
  }
  if (args.some(x => isNaN(x))) {
    throw new Error(`All arguments must be numbers: ${args}`);
  }

  const calculator = new StatisticsCalculator(args.map(Number));
  console.log('size:', calculator.size());
  console.log('mean:', calculator.mean());
  console.log('median:', calculator.median());
  console.log('maximum:', calculator.maximum());
  console.log('minimum:', calculator.minimum());
  console.log('range:', calculator.range());
  console.log('sum:', calculator.sum());
  console.log('product:', calculator.product());
}

if (require.main === module) {
  main(process.argv.slice(2));
}
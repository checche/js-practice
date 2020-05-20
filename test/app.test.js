const { StatisticsCalculator, main } = require('./app.js');

describe('StatisticsCalculator#size', () => {
  it('要素数が計算できる', () => {
    expect(new StatisticsCalculator([2, 5, 1, 3, 4]).size()).toEqual(5);
    expect(new StatisticsCalculator([2]).size()).toEqual(1);
    expect(new StatisticsCalculator([]).size()).toEqual(0);
  });
});

describe('StatisticsCalculator#mean', () => {
  it('平均値が計算できる', () => {
    expect(new StatisticsCalculator([2, 5, 1, 3, 4]).mean()).toEqual(3);
    expect(new StatisticsCalculator([2]).mean()).toEqual(2);
  });
  it('要素数0の場合に未定義', () => {
    expect(isFinite(new StatisticsCalculator([]).mean())).toEqual(false);
  });
});

describe('StatisticsCalculator#median', () => {
  it('要素数が奇数の場合に中央値が計算できる', () => {
    expect(new StatisticsCalculator([2, 5, 1, 3, 4]).median()).toEqual(1);
    expect(new StatisticsCalculator([2, 5, 1]).median()).toEqual(5);
    expect(new StatisticsCalculator([2]).median()).toEqual(2);
  });
  it('要素数が偶数の場合に中央値が計算できる', () => {
    expect(new StatisticsCalculator([2, 5, 1, 3]).median()).toEqual(3);
    expect(new StatisticsCalculator([2, 5]).median()).toEqual(3.5);
  });
  it('要素数0の場合に未定義', () => {
    expect(isFinite(new StatisticsCalculator([]).median())).toEqual(false);
  });
});

describe('StatisticsCalculator.maximum', () => {
  it('最大値が計算できる', () => {
    expect(new StatisticsCalculator([2, 5, 1, 3, 4]).maximum()).toEqual(5);
    expect(new StatisticsCalculator([2]).maximum()).toEqual(2);
  });
  it('要素数0の場合に未定義', () => {
    expect(isFinite(new StatisticsCalculator([]).maximum())).toEqual(false);
  });
});

describe('StatisticsCalculator.minimum', () => {
  it('最小値が計算できる', () => {
    expect(new StatisticsCalculator([2, 5, 1, 3, 4]).minimum()).toEqual(1);
    expect(new StatisticsCalculator([2]).minimum()).toEqual(2);
  });
  it('要素数0の場合に未定義', () => {
    expect(isFinite(new StatisticsCalculator([]).minimum())).toEqual(false);
  });
});

describe('StatisticsCalculator#range', () => {
  it('範囲が計算できる', () => {
    expect(new StatisticsCalculator([2, 5, 1, 3, 4]).range()).toEqual(4);
    expect(new StatisticsCalculator([2]).range()).toEqual(0);
  });
  it('要素数0の場合に未定義', () => {
    expect(isFinite(new StatisticsCalculator([]).range())).toEqual(false);
  });
});

describe('StatisticsCalculator#sum', () => {
  it('和が計算できる', () => {
    expect(new StatisticsCalculator([2, 5, 1, 3, 4]).sum()).toEqual(15);
    expect(new StatisticsCalculator([2]).sum()).toEqual(2);
    expect(new StatisticsCalculator([]).sum()).toEqual(0);
  });
});

describe('StatisticsCalculator#product', () => {
  it('積が計算できる', () => {
    expect(new StatisticsCalculator([2, 5, 1, 3, 4]).product()).toEqual(120);
    expect(new StatisticsCalculator([2]).product()).toEqual(2);
    expect(new StatisticsCalculator([]).product()).toEqual(1);
  });
});

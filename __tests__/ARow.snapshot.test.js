import renderer from 'react-test-renderer';
import React from 'react';
import ARow from '../src/components/content/table/row/row';

describe('snapshots ARow component', () => {
  test('ARow component renders the company correctly', () => { //eslint-disable-line
    const company = {
      code: 'ANZ.AX',
      name: 'AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED',
      price: 29.17,
      volume: 673111,
      value: 19634648,
      change: 0.39,
      percentChange: 1.36
    };
    const rendered = renderer.create(
      <ARow company={company} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

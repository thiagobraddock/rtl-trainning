import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../../App';

const mockData = {
  results: [
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Morris',
        last: 'Henderson',
      },
      location: {
        timezone: {
          description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
        },
      },

      dob: {
        date: '1989-05-29T06:42:02.456Z',
        age: 33,
      },
      picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/19.jpg',
      },
    },
  ],
};

async function mockFetch() {
  return {
    ok: true,
    status: 200,
    json: async () => mockData,
    // json: jest.fn().mockResolvedValue(mockData),
  };
}

describe('<card />', () => {
  test.todo('should fetch to be called once');
  test.todo('should fetch to be called after render Card');
  test.todo('should render "Morris Henderson, age 33"');
  test.todo('should render About page after click menu link');
});

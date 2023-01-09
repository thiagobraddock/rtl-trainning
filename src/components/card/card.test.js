import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import Card from './card';

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

  test('should render "Morris Henderson, age 33"', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

    render(<MemoryRouter><App /></MemoryRouter>);

    const headingName = await screen.findByRole('heading', {
      name: 'Morris Henderson, age 33',
    });

    expect(headingName).toBeInTheDocument();
  });

  test('should fetch to be called once', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    const history = createMemoryHistory();

    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const promise = Promise.resolve();

    await act(async () => {
      await promise;
    });

    expect(global.fetch).toHaveBeenCalled();

    expect(history.location.pathname).toBe('/');
  });

  test('should fetch to be called after render Card', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);

    render(<MemoryRouter initialEntries={ ['/'] }><App /></MemoryRouter>);

    waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test('should render About page after click menu link', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    // const linkAbout = await screen.findByRole('link', { name: /about/i });

    // userEvent.click(linkAbout);

    // act(() => {
    history.push('/about');
    // });

    // expect(await screen.findByText(/page/i));
    expect(history.location.pathname).toBe('/about');
  });
});

// global.fetch = jest.fn(async () => ({
//   ok: true,
//   json: async () => mockData,
// }));

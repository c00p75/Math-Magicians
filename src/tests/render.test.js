import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Navigation from '../components/Navbar';
import Quote from '../components/Quote';

it('Test if Home renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test if Calculator renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test if Quote renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test if Home renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import { unregister } from './registerServiceWorker';

jest.mock('./App', () => () => null);
jest.mock('./registerServiceWorker', () => ({ unregister: jest.fn() }));

it('unregisters service workers left by earlier builds', () => {
  document.body.innerHTML = '<div id="root"></div>';
  require('./index');
  expect(unregister).toHaveBeenCalled();
});

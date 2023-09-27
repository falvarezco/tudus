import { expect, it, describe, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import ListItems from '../ListItems';

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}))

describe('ListItem', () => {
  /**
 * Resets all renders after each test
 */
  afterEach(() => {
    cleanup()
  })

  it('Should render successfully', async () => {
    await render(<ListItems todoItems={[]} />);
    const foundTxt = await screen.findAllByText('No Tudus to show');
    expect(foundTxt).toBeDefined();
  });
});

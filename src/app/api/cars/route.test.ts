/**
 * @jest-environment node
 */
import { GET } from './route';

describe('api/cars test', () => {
  it('GET', async () => {
    const response = await GET();
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.length).toBe(100);
  });
});

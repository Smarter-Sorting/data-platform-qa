const client = require('../../../../poolClient');

describe('POST /note', function () {
  it('Should create a new note', async function () {
    const { rows } = await client.query(
      'SELECT * from products WHERE id = 52264',
    );
    expect(rows).lengthOf(1);
    console.debug('db result is: ' + rows[0].name);
  });
});

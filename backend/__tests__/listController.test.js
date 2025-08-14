const listController = require('../listController');

test('should return a list of items', () => {
    const result = listController.getList();
    expect(result).toEqual(expect.arrayContaining([]));
});

test('should add an item to the list', () => {
    const initialList = listController.getList();
    listController.addItem('New Item');
    const updatedList = listController.getList();
    expect(updatedList).toHaveLength(initialList.length + 1);
    expect(updatedList).toContain('New Item');
});
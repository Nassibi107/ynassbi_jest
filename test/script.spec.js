
const {conection} = require('../src/script');

test("conection - ", () => {
    // Test case 1: number > 0}
    const mockConnect = jest.fn(() => "Connected!");
    expect(conection(0, mockConnect)).toBe("Connected!");
    expect(mockConnect).toHaveBeenCalled();
    expect(mockConnect).toHaveBeenCalledTimes(1);
}  );
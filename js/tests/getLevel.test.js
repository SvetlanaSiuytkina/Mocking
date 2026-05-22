import { getLevel } from "../getLevel.js";
import fetchData from "../http.js";

jest.mock("../http.js");

beforeEach(() => {
    jest.resetAllMocks();
});

test("should return the user level if the status is ok", () => {
    fetchData.mockReturnValue({
        status: "ok",
        level: 1
    });

    const result = getLevel(5);
    expect(result).toBe("Ваш текущий уровень: 1");
    expect(fetchData).toBeCalledWidth("https://server/user/5");
});

test("should return an error message if the status is not ok", () => {
    fetchData.mockReturnValue({
        status: "error"
    });

    const result = getLevel(500);
    expect(result).toBe("Информация об уровне временно недоступна");
    expect(fetchData).toBeCalledWidth("https://server/user/500");
});
import alfred from "../src/index";

// const arr: string[] = ["cat", "dog", "bat"];

describe("测试alfred属性功能", () => {
    test("测试log方法", () => {
        alfred.log('测试log方法')
    });
    test("测试output方法", () => {
        alfred.output({
            items: [{
                title: 'test'
            }]
        }, ['title'])
    });
});
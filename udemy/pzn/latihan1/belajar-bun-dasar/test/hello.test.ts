import {describe, it, expect} from 'bun:test';
import {sayHello} from "../src/hello.ts";

describe('Bun Test Runner', () => {
    it('should support unit test', async () => {
        const response = sayHello('Yasir');
        expect(response).toBe('Hello Yasir');
    });

    it('should support unit test with derek', async () => {
        const response = sayHello('Derek');
        expect(response).toBe('Hello Derek');
    });

    it('should support unit test with gary', async () => {
        const response = sayHello('Gary');
        expect(response).toBe('Hello Gary');
    });
});
import '@babel/polyfill';
import { formValidation } from "../client/js/formValidation";
import { updateUI } from "../client/js/updateUI"

describe('Test formValidation()' , () => {
    test('formValidation should be a function', async () => {
        expect(typeof formValidation).toBe("function");
    });
    test('formValidation should be defined', async () => {
        expect(formValidation).toBeDefined();
    });
});

describe('Test updateUI()' , () => {
    test('formValidation should be a function', async () => {
        expect(typeof updateUI).toBe("function");
    });
    test('formValidation should be defined', async () => {
        expect(updateUI).toBeDefined();
    });
});
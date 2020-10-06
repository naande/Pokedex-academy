import { TestScheduler } from 'jest';

import {
    getCapitalized,
    getIdFromUrl,
    getAnimatedShinyImageFromId
} from './utils';

// Get capitalized tests
describe('getCapitalized', () => {
    test('should capitalize single word', () => {
        var input = "hello";
        var output = getCapitalized(input);
        expect(output).toBe("Hello");
    });
    
    
    test('should capitalize multiple words', () => {
        var input = "hello world";
        var output = getCapitalized(input);
        expect(output).toBe("Hello world");
    });
});


// Get id from url tests
test ('should get Id from Url', () => {
    var input = "https://pokeapi.co/api/v2/pokemon/2";
    var output = getIdFromUrl(input);
    expect(output).toBe("2");
});

test ('should get Id from Url', () => {
    var input = "https://pokeapi.co/api/v2/pokemon/133";
    var output = getIdFromUrl(input);
    expect(output).toBe("133");
});


// Get animated shiny image from id
test ('should get image from Id', () => {
    var input = "1";
    var output = getAnimatedShinyImageFromId(input);
    expect(output).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif");
});


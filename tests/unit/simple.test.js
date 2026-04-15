    // Un test simple pour vérifier que Jest fonctionne
    describe('Tests basiques', () => {
    test('1 + 1 devrait être égal à 2', () => {
        expect(1 + 1).toBe(2);
    });

    test('Une chaîne non vide devrait être truthy', () => {
        expect('hello').toBeTruthy();
    });

    test('Un tableau vide devrait avoir une longueur de 0', () => {
        expect([]).toHaveLength(0);
    });
    });
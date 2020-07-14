const PageBuilder = require("../../page-builder/PageBuilder");
let pageBuilder, newSection

describe('PageBuilder test', function () {
    beforeEach(function() {
        pageBuilder = new PageBuilder()

        newSection = pageBuilder.createNewSection({
            title: 'new section',
            content: `hei yo, I'm a content`
        })
    })

    describe('initializations', function(){
        test('pageBuilder exists', function() {
            expect( pageBuilder ).not.toBe( undefined )
        })
    
        test('it has a sections attribute with empty array', function(){
            expect( pageBuilder.sections ).not.toBe( undefined )
            expect( pageBuilder.sections.length ).toBe( 0 )
        })
    
        test('isEmpty()', function() {
            expect( pageBuilder.isEmpty() ).toBe( true )
        })
    })

    describe('creating a new section', function(){
        test('pageBuilder .createNewSection', function(){
            expect( newSection ).toEqual({ 
                title: 'new section',
                content: `hei yo, I'm a content`
            })
        })
        test('add a section to stack', function(){
            pageBuilder.addSection( newSection )
            expect( pageBuilder.sections.length ).toBe(1)
            expect( pageBuilder.sections ).toEqual([ newSection ])
        })
    })
})
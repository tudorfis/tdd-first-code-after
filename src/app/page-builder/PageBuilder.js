
class PageBuilder {
    constructor() {
        this.sections = []
    }

    isEmpty() {
        return !this.sections.length
    }
    createNewSection(properties) {
        const newSection = {}
        Object.assign(newSection, properties)

        return newSection
    }
    addSection(section) {
        if (!section) return
        
        this.sections.push( section )
    }
}

module.exports = PageBuilder

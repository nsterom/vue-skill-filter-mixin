export const beerMixin = {
    data: function() {
        return {
            beers: ['hefeweizen', 'stout', 'ipa', 'session ipa', 'white'],
            beerFilter: ''
        }
    },
    computed: {
        filterBeer: function() {
            return this.beers.filter((element) => {
                return element.match(this.beerFilter)
            })
        }
    }
}
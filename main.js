const app = {
    data: {
        url: "https://itunes.apple.com/search?",
        term: [],
    },

    search: function () {
        fetch(this.data.url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((r) => r.json())
            .then((response) => {
                this.data.term = [];
                for (let terms of response) {
                    this.data.term
                }
            }
        },

    save: function () {


    }








}
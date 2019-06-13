const quotes = (() => {
    const quotesURL = 'http://loremricksum.com/api/?';

    const handleErr = (err) => {
        if (!err.ok) {
            throw Error(err.statusText)
        } else {
            return err;
        }
    }

    function get(path) {
        return fetch(`${quotesURL}`)
            .then(handleErr)
            .then(res => res.json())
    }

    return {
        get,
    }
})();
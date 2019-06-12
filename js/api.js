const rAmAPI = (function() {
    const rAmURL = 'https://rickandmortyapi.com/api/';

    const handleErr = (err) => {
        if (!err.ok) {
            throw Error(err.statusText)
        } else {
            return err;
        }
    }

    const check = () => {
        return fetch(`${rAmURL}`)
            .then(res => res.json())
            .then(console.log)
    }

    const get = (path) => {
        return fetch(`${rAmURL}/${path}`)
            .then(handleErr)
            .then(res => res.json());
    }
    return {
        check,
        get,
    }
})();
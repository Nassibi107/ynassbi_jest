

const conection =  (number , connect) => {
    if (number > 0) {
        return connect();
    }
    return -1;
}

module.exports = {conection};
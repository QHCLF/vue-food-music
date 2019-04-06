function findIndex (list, song) {
    return list.findIndex((item) => {
        return item.id === song.id
    })
}

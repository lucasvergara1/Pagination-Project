const paginate = (followers) => {
    const itemsPerPage = 9;
    const numeberOffPages = Math.ceil(followers.length / itemsPerPage)
    const newFollowers = Array.from({length: numeberOffPages}, (_,index)=>{
            const start = index * itemsPerPage;
            return followers.slice(start, start + itemsPerPage)
        })
        return newFollowers
}

export default paginate

const data= (req,res)=>{
    res.send([{
        id:1,
        category: "Bollywood",
        title:'pathan'
    },
    {
        id:2,
        category: "Hollywood",
        title:'John Wick'
    },
    {
        id:3,
        category: "Technology",
        title:'New F1 racer'
    },
    {
        id:4,
        category: "Fitness",
        title:'Burn Calories'
    },
    {
        id:5,
        category: "Food",
        title:'Fruit salad'
    }])
}

module.exports = {data}
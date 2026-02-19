

//  1) Strategy pattern


  class SortByName{
    sort(data){
        return data.sort((a,b)=> a.name.localeCompare(b.name))
    }
  }

  class SortByPrice{
    sort(data){
        return data.sort((a,b)=> b.price - a.price)
    }
  }

  function sortData(data,strategy){
    console.log(strategy.sort(data))
  }

  const data = [
    {name:"product1", price: 100},
    {name:"product3", price: 50},
    {name:"product2", price: 150},
  ]
    sortData(data,new SortByName())
    sortData(data,new SortByPrice())
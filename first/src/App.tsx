import {useState} from 'react'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

const products = [
  {title: 'Cabbage', isFruit: false, id: 1},
  {title: 'Garlic', isFruit: false, id: 2},
  {title: 'Apple', isFruit: true, id: 3},
]

function MyButton() {
  function handleClick() {
    alert('Button clicked')
  }

  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  )
}

function Count() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  )
}

function GlobalCount({count , handleClick}) {

  return(
    <button onClick={handleClick}>{count} times</button>
  )
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton></MyButton>
      <h2>Hi i'm {user.name}</h2>
      {/* <img 
        className="avatar"
        src={user.imageUrl}>
        alt={'Photo of' + user.name}
        
      </img> */}

      <ul>{products.map(product => 
        <li key = {product.id}>{product.title}</li>
      )}</ul>

      <ul>{products.map(product =>
        <li key = {product.id}
            style={{
              color: product.isFruit ? 'red' : 'green'
            }}>{product.title}</li>
      )}</ul>

      <Count></Count>
      <GlobalCount count={count} handleClick={handleClick}></GlobalCount>
      <GlobalCount count={count} handleClick={handleClick}></GlobalCount>
    </div>
  )
}



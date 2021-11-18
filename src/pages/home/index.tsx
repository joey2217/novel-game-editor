import React from 'react'
import { Button } from 'antd'
import { useRecoilState } from 'recoil'
import { countState } from '../../store/atom'

const Home: React.FC = () => {
  const [count, setCount] = useRecoilState(countState)
  return (
    <div>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </div>
  )
}

export default Home

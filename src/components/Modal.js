import React from 'react'

export default function Modal({ modal, setModal, randomUser, randomComp }) {

  if (!modal) {
    return null
  }

  return (
    <div className='modal'>
      {
        randomUser[0] + randomUser[1] > randomComp[0] + randomComp[1] && <div >Вітаю!!!<br /> Ви виграли з рахунком {randomUser[0] + randomUser[1]} : {randomComp[0] + randomComp[1]}</div>
      }
      {
        randomUser[0] + randomUser[1] < randomComp[0] + randomComp[1] && <div>Ви програли.<br /> Рахунок {randomUser[0] + randomUser[1]} : {randomComp[0] + randomComp[1]} </div>
      }
      {
        randomUser[0] + randomUser[1] === randomComp[0] + randomComp[1] && <div>Нічия.<br /> Рахунок {randomUser[0] + randomUser[1]} : {randomComp[0] + randomComp[1]} </div>
      }

      <a className='close' onClick={() => setModal(null)} href='/'>+</a>
    </div>
  )
}

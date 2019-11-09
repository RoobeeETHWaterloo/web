import React from 'react'

import CharImage from 'components/ui/CharImage/CharImage'
import Button from 'components/ui/Button/Button'

import s from './CharPage.scss'


const data = {
  id: 1,
  address: '0x0324325bh325gv5gvjvcsdfsdf7',
  name: 'Foo',
  image: 'https://miro.medium.com/max/480/1*OGfTUWooSC2NMqw8x6nn4w@2x.png',
  stats: {
    hp: 15,
    wins: 28,
    looses: 13,
  },
}

const CharPage = () => (
  <div className={s.charPage}>
    <div className={s.leftCol}>
      <CharImage src={data.image} /><br />
      <Button to="/chars" color="blue">Select character</Button><br />
      <Button>FIGHT!</Button>
    </div>
    <div className={s.rightCol}>
      <div className={s.headline}>
        <div>
          <div className={s.id}># 1344552</div>
          <div className={s.name}>Foo</div>
        </div>
        <div>

        </div>
      </div>
      <table className={s.table}>
        <tbody>
          <tr>
            <td className={s.label}>OWNER:</td>
            <td className={s.value}>0x0235235235235asfafaf66aa</td>
          </tr>
          <tr>
            <td className={s.label}>LVL:</td>
            <td className={s.value}>13</td>
          </tr>
          <tr>
            <td className={s.label}>EXP:</td>
            <td className={s.value}>1276 <span>/ 1300</span></td>
          </tr>
          <tr>
            <td className={s.label}>HP:</td>
            <td className={s.value}>15</td>
          </tr>
          <tr>
            <td className={s.label}>WINS:</td>
            <td className={s.value}>30</td>
          </tr>
          <tr>
            <td className={s.label}>LOSES:</td>
            <td className={s.value}>24</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)


export default CharPage

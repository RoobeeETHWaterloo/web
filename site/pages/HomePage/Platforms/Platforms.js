import React, { useState, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import cx from 'classnames'
import core from 'core'

import Section from 'pages/HomePage/components/Section/Section'
import SectionTitle from 'pages/HomePage/components/SectionTitle/SectionTitle'
import Spinner from 'components/ui/Spinner/Spinner'

import s from './Platforms.scss'

import metamaskImage from './images/metamask.png'
import torusImage from './images/torus.png'
import lockIcon from './images/lock.svg'


const items = [
  { image: metamaskImage, disabled: true, title: 'Sign up with metamask', provider: 'MetaMask' },
  { image: torusImage, title: 'Sign up with Torus', provider: 'Torus' },
]

const Platforms = ({ history }) => {
  const [ { isFetching, selectedProvider }, setState ] = useState({ isFetching: false, selectedProvider: null })

  const handleProviderClick = useCallback((provider) => {
    if (!isFetching) {
      setState({ isFetching: true, selectedProvider: provider })

      setTimeout(() => {
        core.provider.load(provider, () => {
          history.push('/chars')
        })
      }, 1500)
    }
  }, [ isFetching ])

  return (
    <Section>
      <SectionTitle>We provide interoperability between NFT via</SectionTitle>
      <div className={s.items}>
        {
          items.map(({ image, title, provider, disabled }, index) => {
            const itemClassName = cx(s.item, {
              [s.active]: provider === selectedProvider,
              [s.disabled]: disabled || (isFetching && provider !== selectedProvider),
            })

            return (
              <div key={index} className={s.itemContainer}>
                <div className={itemClassName} onClick={() => !disabled && handleProviderClick(provider)}>
                  {
                    disabled && (
                      <div className={s.lock}>
                        <img className={s.lockIcon} src={lockIcon} alt="" />
                        <div className={s.lockText}>Under construction</div>
                      </div>
                    )
                  }
                  <div className={s.imageContainer}>
                    <img className={s.itemImage} src={image} alt="" />
                  </div>
                  {
                    (isFetching && provider === selectedProvider) ? (
                      <div className={s.itemTitle}>Loading <Spinner className={s.spinner} /> Please wait</div>
                    ) : (
                      <div className={s.itemTitle}>{title}</div>
                    )
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}


export default withRouter(Platforms)

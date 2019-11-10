import React, { useState, useCallback } from 'react'

import Button from 'components/ui/Button/Button'

import s from './NFTDocs.scss'


const Input = ({ placeholder, onChange }) => {
  const handleInputChange = useCallback((event) => {
    onChange(event.target.value)
  }, [])

  return (
    <input placeholder={placeholder} onChange={handleInputChange} />
  )
}

const NFTDocs = () => {
  const [ { contractAddress, tokenId }, setState ] = useState({ contractAddress: '', tokenId: '' })
  const [ isSubmitted, setSubmitStatus ] = useState(false)

  const handleInputChange = useCallback((field, value) => {
    setState((state) => ({ ...state, [field]: value }))
  }, [])

  const handleSubmit = useCallback(() => {
    setSubmitStatus(true)
  }, [])

  return (
    <div className={s.docs}>
      <div className={s.title}>That's not an issue!<br />Just follow these simple instruction</div>
      <div>
        <div className={s.step}>If you DON’T have NFT’S - just go to <a href="https://opensea.io/assets" target="_blank">https://opensea.io/assets</a></div>
        <div className={s.step}>
          You already have or bought NFT’s?  Please enter:
          <Input placeholder="NFT ERC721 Contract address" onChange={(value) => handleInputChange('contractAddress', value)} /><br />
          <Input placeholder="Token ID" onChange={(value) => handleInputChange('tokenId', value)} />
          <div className={s.buttonContainer}>
            <Button className={s.button} small disabled={!contractAddress || !tokenId} onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </div>
      {
        isSubmitted && (
          <div className={s.submitText}>Sorry... It doesn't implemented yet! 😥 We will do our best!</div>
        )
      }
    </div>
  )
}


export default NFTDocs

'use client'
import { useMemo } from 'react'

import ColorSwatches from '@/components/ui/ColorSwatches'
import { COLORS } from '@/app/constants'
import { useProductDetailsContext } from './ProductDetailsContext'
import { getUnavailableColors } from '../utils'

const AvailableColors = () => {
  const { selectedColor, setSelectedColor, product } =
    useProductDetailsContext()
  const { colors } = product
  const unavailableColors = useMemo(
    () => getUnavailableColors(product),
    [product]
  )

  return (
    <fieldset aria-label='Choose a color'>
      <legend className='text-sm text-neutral-500'>Available Colors</legend>
      <div className='mt-4 flex flex-wrap gap-4'>
        {colors.map((color) => (
          <ColorSwatches
            key={color}
            color={COLORS[color].value}
            outOfStock={unavailableColors.includes(color)}
            selected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </fieldset>
  )
}

export default AvailableColors

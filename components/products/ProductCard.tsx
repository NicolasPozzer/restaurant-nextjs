import { formatCurrency } from '@/src/utils'
import { Product } from '@prisma/client'
import React from 'react'
import Image from 'next/image'

type ProductCardProps = {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  return (
    <div className='border bg-white'>

        <Image
            width={400}
            height={400}
            src={`/products/${product.image}.jpg`}
            alt={`Imagen: ${product.name}`}
            quality={40}//si queremos agregar la calidad
        />

        <div className='p-5'>
            <h3 className='text-1xl font-bold'>{product.name}</h3>
            <p className='mt-5 font-bold text-2xl text-amber-500'>
                {formatCurrency( product.price )}
            </p>
            <button
                type='button'
                className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
                uppercase font-bold cursor-pointer'
            >
                aniadir
            </button>
        </div>
    </div>
  )
}

import React from 'react'
import {OrderItem} from "@/src/types";
import {MinusIcon, PlusIcon, XCircleIcon} from "@heroicons/react/24/outline";
import {formatCurrency} from "@/src/utils";

interface ProductDetailsProps {
    item: OrderItem;
}

export default function ProductDetails({item}: ProductDetailsProps) {
    console.log(item)
    return (

        <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <p className="text-xl font-bold">{item.name} </p>

                    <button
                        type="button"
                        onClick={() => {
                        }}
                    >
                        <XCircleIcon className="text-red-600 h-8 w-8"/>
                    </button>
                </div>
                <p className="text-2xl text-amber-500 font-black">
                    {formatCurrency(item.price)}
                </p>
                <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
                    <button
                        type="button"
                        onClick={() => {
                        }}
                    >
                        <MinusIcon className="h-6 w-6"/>
                    </button>

                    <p className="text-lg font-black ">
                        {item.quantity}
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                        }}
                    >
                        <PlusIcon className="h-6 w-6"/>
                    </button>
                </div>
                <p className="text-xl font-black text-gray-700">
                    Subtotal: {formatCurrency(item.subtotal)}
                    <span className="font-normal">

        </span>
                </p>
            </div>
        </div>

    )
}


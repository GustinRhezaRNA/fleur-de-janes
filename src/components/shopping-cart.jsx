"use client"

import { useState } from "react"
import { ShoppingCart, X, Minus, Plus } from "lucide-react"
// import a from "next/a"


export function ShoppingCartIcon() {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState ([
        {
            id: 1,
            name: "Kecubung",
            price: 120,
            quantity: 1,
            size: "30ml",
        },
        {
            id: 2,
            name: "Kecubung",
            price: 120,
            quantity: 1,
            size: "30ml",
        },
    ])

    const toggleCart = () => {
        setIsOpen(!isOpen)
    }

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return
        setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="relative">
            <button onClick={toggleCart} className="relative" aria-label="Shopping cart">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-notification text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                    </span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded shadow-lg z-50">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-medium">Shopping Cart ({totalItems})</h3>
                        <button onClick={toggleCart} className="text-gray-500 hover:text-black">
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">Your cart is empty</div>
                    ) : (
                        <>
                            <div className="max-h-80 overflow-y-auto">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="p-4 border-b border-gray-100 flex items-center">
                                        <div className="bg-gray-product h-16 w-16 flex-shrink-0"></div>
                                        <div className="ml-4 flex-grow">
                                            <h4 className="font-medium">{item.name}</h4>
                                            <p className="text-sm text-gray-text">Eau de parfum · {item.size}</p>
                                            <p className="text-sm font-medium">${item.price}</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-gray-400 hover:text-black mb-2"
                                                aria-label="Remove item"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                            <div className="flex items-center border border-gray-200 rounded">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-2 py-1 text-gray-500 hover:text-black"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </button>
                                                <span className="px-2 text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-2 py-1 text-gray-500 hover:text-black"
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 border-t border-gray-200">
                                <div className="flex justify-between mb-4">
                                    <span>Subtotal</span>
                                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                                </div>
                                <a
                                    href="/checkout"
                                    className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition-colors"
                                >
                                    Checkout
                                </a>
                                <button onClick={toggleCart} className="block w-full text-center py-2 mt-2 text-sm hover:underline">
                                    Continue Shopping
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

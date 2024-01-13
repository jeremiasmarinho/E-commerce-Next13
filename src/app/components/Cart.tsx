"use client";
import { useCartStore } from "@/store";
import IconShoppingCart from "./icons/CartIcon";

export default function Cart() {
  const useStore = useCartStore();

  return (
    <>
      <div
        onClick={() => useStore.toggleCart()}
        className="flex items-center cursor-pointer relative"
      >
        <IconShoppingCart />
        <span className="bg-teal-500 text-xs font-bold rounded-full h-4 w-4 text-white flex items-center justify-center absolute left-3 bottom-3">
          2
        </span>
      </div>
      {useStore.isOpen && (
        <div
          onClick={() => useStore.toggleCart()}
          className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll"
          >
            <h1>Meu carrinho</h1>
            {useStore.cart.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

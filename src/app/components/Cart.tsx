"use client";
import { useCartStore } from "@/store";
import IconShoppingCart from "./icons/CartIcon";
import CartDrawer from "./CartDrawer";

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
          {useStore.cart?.length}
        </span>
      </div>
      {useStore.isOpen && <CartDrawer />}
    </>
  );
}

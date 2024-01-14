"use client";

import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type CheckoutButtonProps = {
  totalPrice: number;
};

export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {
  const router = useRouter();
  const { user } = useUser();
  const cartStore = useCartStore();

  const handleCheckout = async () => {
    if (!user) {
      cartStore.toggleCart();
      router.push(`/sign-in?redirectUrl='/'`);
      return;
    }
    cartStore.setCheckout("checkout");
  };
  return (
    <div>
      <p className="text-teal-500 font-bold">
        Total: {formatPrice(totalPrice)}
      </p>
      <button
        onClick={handleCheckout}
        className=" w-full rounded-md bg-emerald-600 text-white py-3 mt-2"
      >
        Finalizar compra
      </button>
    </div>
  );
}

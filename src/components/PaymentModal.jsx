import { useRouter } from "next/navigation";

const PaymentModal = ({ setShowOrderModal }) => {
  const router = useRouter();

  const handleCloseModal = () => {
    setShowOrderModal(false);
    router.push("/myOrders");
    router.refresh();
  };

  return (
    <div className="w-full h-full pb-24 absolute flex items-center justify-center">
      <div className="w-[370px] md:w-[460px] py-8 px-5 flex flex-col gap-4 items-center bg-[#f1f1f1] rounded-xl shadow-xl animate-modal">
        <div className="w-20 h-20 rounded-full bg-green-400 flex items-center justify-center animate-pop relative">
          <svg
            className="w-16 h-16 text-white animate-draw"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-black200 font-medium text-2xl lg:text-3xl">
          Order Placed.
        </h2>
        <p className=" text-black100 text-center">
          Your orders added in My Orders page.
        </p>

        <button
          type="button"
          onClick={handleCloseModal}
          className="w-fit mt-3 py-2.5 px-14 rounded-lg bg-primary/90 hover:bg-primary text-white cursor-pointer"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;

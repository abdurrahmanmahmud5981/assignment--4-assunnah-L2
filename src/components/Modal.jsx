/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Modal = ({country}) => {
    // console.log(country)
  return (
    <>
    {/* Open the modal using ID.showModal() method */}
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box flex flex-col space-y-4 items-center justify-center">
        <div className="bg-yellow-100 w-fit rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-bold">Congrates!</h3>
        <img src="./src/assets/coin.png" alt="coin" />
        <p className="mt-4 text-gray-700 text-center">
          You Have Donated For Humankind
        </p>
        <h3 className="text-xl font-semibold">Successfully !</h3>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="px-6 py-3 bg-stone-200 font-medium rounded hover:bg-stone-200/60">
              Close Confirmation
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </>
  
  )
}

export default Modal
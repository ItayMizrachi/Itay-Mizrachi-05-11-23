import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

const DeleteFavModal = ({ cityToDelete, removeFromFavorites }) => {
  const modalId = `modal_${cityToDelete}`;

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button onClick={() => document.getElementById(modalId).showModal()}>
        <EllipsisHorizontalIcon
          onClick={() => document.getElementById(modalId).showModal()}
          className="w-7 h-7 absolute top-2 right-2 cursor-pointer ease-out hover:text-gray-400 transform active:scale-90 transition-colors duration-200"
        />
      </button>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete City From Favorites?</h3>
          <div className="modal-action">
            <form method="dialog" className="w-full sm:w-auto">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-full sm:w-24 px-0 mx-0 mb-2 sm:mb-0">
                Cancel
              </button>
              <button
                onClick={() => removeFromFavorites(cityToDelete)}
                className="btn btn-error sm:ml-2 w-full sm:w-24 px-0 mx-0"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteFavModal;

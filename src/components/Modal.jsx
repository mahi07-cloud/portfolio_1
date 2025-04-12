function Modal({ modalData, setModalData }) {
    const closeModal = () => setModalData(null);
  
    return (
      <div className="modal active" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closeModal} aria-label="Close Modal">×</span>
          <h2>{modalData.title}</h2>
          <img src={modalData.image} alt={modalData.title} />
          <p>{modalData.description}</p>
        </div>
      </div>
    );
  }
  
  export default Modal;
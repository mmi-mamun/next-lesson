const DataModal = ({ modalId, children }) => {
    return (
        <>
            <input type="checkbox" id={modalId} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={modalId} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {children}
                </div>
            </div>
        </>
    );
};

export default DataModal;
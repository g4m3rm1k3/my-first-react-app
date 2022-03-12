import ReactDOM from "react-dom";
import "./Modal.css";
export default function Modal({ children, handleClose, isSalesModal }) {
	return ReactDOM.createPortal(
		<div className="modal-backdrop">
			<div className="button-box">
				<div
					className="modal"
					style={{
						border: "4px solid",
						borderColor: isSalesModal ? "#ff5400" : "#555",
						textAlign: "center",
					}}
				>
					{children}
					<button
						onClick={handleClose}
						className={isSalesModal ? "sales-btn" : "close"}
					>
						{isSalesModal ? "close" : ""}
					</button>
				</div>
			</div>
		</div>,
		document.body
	);
}

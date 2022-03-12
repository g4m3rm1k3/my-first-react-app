import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showEvents, setShowEvents] = useState(true);
	const [event, setEvent] = useState("");
	const [events, setEvents] = useState([]);

	const handleClick = (id) => {
		setEvents((prevEvents) => {
			return prevEvents.filter((event) => event.id !== id);
		});
	};
	const handleClose = () => {
		setShowModal(false);
	};
	const addEvent = (event) => {
		setEvents((prevEvents) => [...prevEvents, event]);
		setShowModal(false);
	};

	const subtitle = "All the latest events in MarioLand";
	return (
		<div className="App">
			<Title title="Events in your area" subtitle={subtitle} />

			{showEvents && (
				<div>
					<button
						onClick={() => {
							setShowEvents(false);
						}}
					>
						Hide events
					</button>
				</div>
			)}

			{!showEvents && (
				<div>
					<button
						onClick={() => {
							setShowEvents(true);
						}}
					>
						Show events
					</button>
				</div>
			)}

			{showEvents && <EventList events={events} handleClick={handleClick} />}
			{/* <Modal>
				<h2>10% off COupon Code</h2>
				<p>Use the code NINJA10 at checkout</p>
			</Modal> */}
			{showModal && (
				<Modal handleClose={handleClose} isSalesModal={false}>
					<NewEventForm addEvent={addEvent} />
				</Modal>
			)}
			<div className="showModal-button">
				<button
					onClick={() => {
						setShowModal(true);
					}}
				>
					Add New Event
				</button>
			</div>
		</div>
	);
}

export default App;

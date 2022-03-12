import React from "react";
import styles from "./EventList.module.css";

export default function EventList({ events, handleClick }) {
	return events.map(({ title, id, location, date }, index) => (
		<div key={id} className={styles.card}>
			<h2>
				{id} - {title}
			</h2>
			<p>
				{location} - {date}
			</p>
			<button onClick={() => handleClick(id)}>delete event</button>
		</div>
	));
}

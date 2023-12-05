/* eslint-disable */
// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, { useEffect, useState } from 'react';
// import { EventType } from 'src/generated/events_pb';
// import EventClient from 'src/clients/social/listevents';
import { EventProto } from 'src/types/index';
import { useNavigate } from 'react-router-dom';
import { mockEvents } from './mockdb';

const EventsTable: React.FC = () => {
	const navigate = useNavigate();

	// Handler for the Edit button
	const handleEdit = (event: any) => {
		console.log(event.id)
		navigate(`/events/${event.eventId}`);
	};

	// Handler for the Monitor button
	const handleMonitor = (event: any) => {
		navigate(`/events/monitor/${event.eventId}`);
	};
	const [events, setEvents] = useState<EventProto[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	// const fetchEventsAsync = (
	// 	pageSize: number,
	// 	pageNumber: number,
	// 	filters: EventFeedFilters,
	// 	metaData: {} | null
	// ): Promise<EventFeedResponse> => {
	// 	return new Promise((resolve, reject) => {
	// 		EventClient.GetEventFeed(pageSize, pageNumber, filters, metaData, (err, response) => {
	// 			if (err) {
	// 				console.log(err);
	// 				reject(err);
	// 			} else {
	// 				resolve(response);
	// 			}
	// 		});
	// 	});
	// };

	// useEffect(() => {
	// 	const fetchEvents = async () => {
	// 		try {
	// 			const filters = new EventFeedFilters();
	// 			const response = await fetchEventsAsync(
	// 				10, // pageSize
	// 				1, // pageNumber
	// 				filters,
	// 				{} //metadata
	// 			);

	// 			setEvents(response.getEventsList());
	// 		} catch (err) {
	// 			console.error('Error fetching events:', err);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};

	// 	fetchEvents();
	// }, []);

	useEffect(() => {
		// Simulate a delay to mimic the asynchronous behavior of fetching data
		const delay = setTimeout(() => {
			setEvents(mockEvents);
			setLoading(false);
		}, 1000);

		// Cleanup the timeout on unmount or when the component re-renders
		return () => clearTimeout(delay);
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2 className="text-2xl font-semibold text-gray-800 mb-4">Events</h2>
			<div className="overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Title
							</th>
							<th scope="col" className="px-6 py-3">
								Type
							</th>
							<th scope="col" className="px-6 py-3">
								Start At
							</th>
							<th scope="col" className="px-6 py-3">
								End At
							</th>
							<th scope="col" className="px-6 py-3">
								Attendees
							</th>
							<th scope="col" className="px-6 py-3">
								Description
							</th>
							<th scope="col" className="px-6 py-3">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{events.map((event, index) => (
							<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">{event.title}</td>
								<td className="px-6 py-4">{event.type === 0 ? 'Offline' : 'Online'}</td>
								<td className="px-6 py-4">{new Date(event.startAt).toLocaleString()}</td>
								<td className="px-6 py-4">{new Date(event.endAt).toLocaleString()}</td>
								<td className="px-6 py-4">{event.numAttendees}</td>
								<td className="px-6 py-4">{event.description}</td>
								<td className="px-6 py-4">
									<button
										onClick={() => handleEdit(event)}
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l mr-2"
									>
										Edit
									</button>
									<button
										onClick={() => handleMonitor(event)}
										className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
									>
										Monitor
									</button>

								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default EventsTable;

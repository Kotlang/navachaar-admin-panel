/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2'; // Example for Chart.js
import 'chart.js/auto'; // Auto import for Chart.js
import { EventProto } from 'src/types/index';
import { CommentProto } from 'src/generated/actions_pb'
import { mockEvents, mockComments } from './mockdb';

const MonitorEvent: React.FC = () => {
    const { eventId } = useParams();
    const [eventDetails, setEventDetails] = useState<EventProto | undefined>();
    const [comments, setComments] = useState<CommentProto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // const fetchCommentsById = async () => {
    //     await new Promise(resolve => setTimeout(resolve, 1000));
    //     return mockComments.slice(0, 5);
    // };

    const fetchEventById = async (eventId: string): Promise<EventProto | undefined> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const event = mockEvents.find(event => event.eventId === eventId);
				resolve(event);
			}, 1000);
		});
	};

    if(eventId){
        fetchEventById(eventId).then((eventData) => {
            setEventDetails(eventData)
            setLoading(false)
        })
    }

    // useEffect(() => {
    //     if (eventId) {
    //         setLoading(true); // Assuming there's a state for tracking loading of comments
    //         fetchCommentsById().then(fetchedComments => {
    //             setComments(fetchedComments);
    //             setLoading(false);
    //         });
    //     }
    // }, [eventId]);
    

    if (loading) return <div>Loading...</div>;

    // Chart data setup (example using numAttendees)
    const chartData = {
        labels: ['Attendees', 'Comments', 'Reacts'],
        datasets: [{
            label: 'Event Metrics',
            data: [eventDetails?.numAttendees, eventDetails?.numComments, eventDetails?.numReacts?.like],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center my-4">{eventDetails?.title}</h2>

            {/* Chart for Event Metrics */}
            <div>
                <Line data={chartData} />
            </div>

            {/* Comments Table */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold">Comments</h3>
                <table className="min-w-full table-auto border-collapse border border-gray-200 mt-4">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-gray-600">Comment ID</th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-600">User ID</th>
                            <th className="border border-gray-300 px-4 py-2 text-gray-600">Content</th>
                            {/* Additional columns if needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map(comment => (
                            <tr key={comment.getCommentid()} className="bg-white">
                                <td className="border border-gray-300 px-4 py-2">{comment.getCommentid()}</td>
                                <td className="border border-gray-300 px-4 py-2">{comment.getUserid()}</td>
                                <td className="border border-gray-300 px-4 py-2">{comment.getContent()}</td>
                                {/* Additional data cells if needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MonitorEvent;
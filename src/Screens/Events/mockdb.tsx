/* eslint-disable */

// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { EventType } from 'src/generated/events_pb';
import { EventProto } from 'src/types/index';
export const mockEvents: EventProto[] = [
	{
		FeedUserReactions: ['like', 'love', 'comment'],
		createdOn: Date.now(),
		description: 'A great concert featuring famous bands.',
		endAt: Date.now() + 2000000, // Example end time
		eventId: 'event1',
		location: {
			lat: 123.1234,
			long: 1123.232
		},
		mediaUrls: [{ type: 'IMAGE', url: 'http://example.com/image.jpg' }],
		numAttendees: 300,
		numComments: 50,
		numReacts: { like: 100 },
		numSlots: 500,
		onlineLink: 'http://example.com/concert',
		startAt: Date.now() + 1000000, // Example start time
		tags: ['music', 'live', 'concert'],
		title: 'Awesome Concert',
		type: EventType.OFFLINE,
		webPreviews: [{ previewImage: 'http://example.com/preview.jpg', url: 'http://example.com' }]
	}
	// Add more events as needed
];

export const mockComments = [
    {
        commentId: 'comment1',
        content: 'Great event! Looking forward to it.',
        userId: 'user123',
        createdOn: Date.now(),
        numReacts: { like: 30, love: 10 },
        numComments: 2,
        userReactions: ['like', 'love'],
        mediaUrls: [{ type: 'IMAGE', url: 'http://example.com/comment-image.jpg' }],
        webPreviews: [{ previewImage: 'http://example.com/comment-preview.jpg', url: 'http://example.com' }],
        parentId: '',
        authorInfo: { /* SocialProfile data */ }
    },
    // ... more comments
];
// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata, RpcError } from 'grpc-web';
import { Location, MediaUrl, WebPreview } from 'src/generated/commons_pb';
import { CreateEventRequest, EventProto } from 'src/generated/events_pb';
import { EventsClient } from 'src/generated/EventsServiceClientPb';
import { IEvent } from 'src/types';

import { addJwtToken } from '../utils';

export const getEventsClient = (() => {
	const socialURL = 'https://social.navachar.co:443/';
	let client: EventsClient;
	if (socialURL) {
		client = new EventsClient(socialURL);
	}
	return () => {
		return client;
	};
})();

const getCreatEventRequest = (event: IEvent) => {
	const createEventRequest = new CreateEventRequest();
	createEventRequest.setTitle(event.title || '');
	createEventRequest.setType(event.type);

	if (typeof event.startAt?.unix === 'function'){
		createEventRequest.setStartat(event.startAt?.unix());
	}

	if (typeof event.endAt?.unix === 'function'){
		createEventRequest.setEndat(event.endAt?.unix());
	}

	if (event.mediaUrls) {
		const mediaList: MediaUrl[] = [];

		for (const mediaItem of event.mediaUrls) {
			const media = new MediaUrl();
			media.setMimetype(mediaItem.mimeType || '');
			media.setUrl(mediaItem.url || '');

			mediaList.push(media);
		}

		createEventRequest.setMediaurlsList(mediaList);
	}

	if (event.webPreviews) {
		const webPreviewList: WebPreview[] = [];

		for (const webPreviewItem of event.webPreviews) {
			const webPR = new WebPreview();
			webPR.setTitle(webPreviewItem.title || '');
			webPR.setPreviewimage(webPreviewItem.previewImage || '');
			webPR.setUrl(webPreviewItem.url || '');
			webPR.setDescription(webPreviewItem.description || '');

			webPreviewList.push(webPR);
		}

		createEventRequest.setWebpreviewsList(webPreviewList);
	}

	createEventRequest.setDescription(event.description || '');
	createEventRequest.setNumattendees(event.numAttendees || 0);
	createEventRequest.setNumslots(event.numSlots || 0);

	if (event.location) {
		const { location } = event;
		const loc = new Location();
		loc.setLat(location?.lat || 0);
		loc.setLong(location?.long || 0);
		createEventRequest.setLocation(loc);
	}

	createEventRequest.setOnlinelink(event.onlineLink || '');
	createEventRequest.setTagsList(event.tags || []);

	return createEventRequest;
};

const EventClient = {
	CreateEvent: (event: IEvent, metaData: Metadata | null, callback: (err: RpcError, response: EventProto) => void) => {
		getEventsClient().createEvent(getCreatEventRequest(event), addJwtToken(metaData), callback);
	}
};
export default EventClient;
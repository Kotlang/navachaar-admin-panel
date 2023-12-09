// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import dayjs from 'dayjs';
import { Gender } from 'src/generated/common_pb';
import { EventType } from 'src/generated/events_pb';
export interface IUserProfile {
	attributesList?: string[];
	createdOn?: number;
	domain?: string;
	email?: string;
	gender?: Gender;
	loginId?: string;
	metaData?: string;
	name?: string;
	phone?: string;
	photoUrl?: string;
	preferredLanguage?: string;
}
export interface IAuthResponse {
	jwt: string;
	profile: IUserProfile;
	userType: string;
}

export interface ILogin {
	authResponse: IAuthResponse;
	isLogin: () => boolean;
	isAdmin: () => boolean;
	logout: () => void;
    setAuthResponse: (authResponse: IAuthResponse) => void;
}

export interface IProfileMaster {
	language?: string;
	options?: string[];
	field?: string;
	type?: string;
}

export interface ILabel {
    key: string;
    value: string;
    language: string
}

export interface IEvent {
    title?: string;
    type: EventType;
    startAt?: dayjs.Dayjs;
    endAt?: dayjs.Dayjs;
    mediaUrls?: {
		url?: string;
		mimeType?: string;
	}[];
    webPreviews?: {
		title?: string;
		previewImage?: string;
		url?: string;
		description?: string;
	}[];
    description?: string;
    numAttendees?: number;
    numSlots?: number;
    location?: {
		lat?: number;
		long?: number;
	};
    onlineLink?: string;
    tags?: string[];
}

export interface Location {
    lat: number;
    long: number;
}

export interface MediaUrl {
    url: string;
    mimeType: string;
}

export interface WebPreview {
    url: string;
    previewImage: string;
}

export interface EventProto {
    eventId: string;
    title: string;
    createdOn: number;
    numReacts: { [key: string]: number };
    numComments: number;
    type: EventType;
    onlineLink?: string;
    startAt: number;
    description: string;
    numAttendees: number;
    numSlots: number;
    location: Location;
    endAt: number;
    tags: string[];
    mediaUrls: MediaUrl[];
    webPreviews: WebPreview[];
    FeedUserReactions: string[];
}

export interface IGetFeedRequest {
    filters: FeedFilters;
    referencePost: string;
    pageSize: number; // int32 in proto
    pageNumber: number; // int32 in proto
}

export interface FeedFilters {
    tag: string;
    userId: string;
    createdBy: string;
    postType: PostType;
    contentType: string[];
    type: string[];
    fetchUserCommentedPosts: boolean;
    fetchUserReactedPosts: boolean;
}

export enum PostType {
    FEED_POST = 0,
    QNA_QUESTION = 1,
    QNA_ANSWER = 2,
  }

/* eslint-disable */

// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
	Button,
	DatePicker,
	Form,
	Input,
	InputNumber,
	InputRef,
	Radio,
	Space,
	Tag,
	Tooltip
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Metadata, RpcError } from 'grpc-web';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { WebPreview, MediaUrl } from 'src/generated/commons_pb'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import clients from 'src/clients';
import { EventProto, EventType } from 'src/generated/events_pb';
import { IEvent } from 'src/types';

const { RangePicker } = DatePicker;

const Events = () => {
	const [tags, setTags] = useState<string[]>([]);
	const [mediaurls, setMediaurls] = useState<Array<MediaUrl.AsObject>>([]);
	const [webpreviews, setWebPreview] = useState<Array<WebPreview.AsObject>>([]);
	const [inputVisible, setInputVisible] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [editInputIndex, setEditInputIndex] = useState(-1);
	const [editInputValue, setEditInputValue] = useState('');
	const inputRef = useRef<InputRef>(null);
	const editInputRef = useRef<InputRef>(null);
	const [loading, setLoading] = useState(false);
	const [form] = Form.useForm();
	const { eventId } = useParams();
	const isEditMode = eventId != null;

	const fetchEventById = (eventId: string, metaData: Metadata | null): Promise<EventProto> => {
		return new Promise((resolve, reject) => {
			clients.social.event.GetEvent(eventId, metaData, (err: RpcError, response: EventProto) => {
				if (err) {
					reject(err);
				} else {
					resolve(response);
				}
			});
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			if (isEditMode) {
				try {
					setLoading(true);
					const eventData = await fetchEventById(eventId, {});
					const fetchedMediaUrls = eventData.getMediaurlsList() || [];
					const fetchedWebPreviews = eventData.getWebpreviewsList() || [];
					const tag = eventData.getTagsList() || [];
					setTags(tag);
					setMediaurls(fetchedMediaUrls.map(mediaUrl => ({
						url: mediaUrl.getUrl(),
						mimetype: mediaUrl.getMimetype(),
					}))); 	
					setWebPreview(fetchedWebPreviews.map(webpreviews => ({
						title: webpreviews.getTitle(),
						previewimage: webpreviews.getPreviewimage(),
						url: webpreviews.getUrl(),
						description: webpreviews.getDescription()
					}))); 	
					form.setFieldsValue({
						description: eventData.getDescription(),
						eventTime: [moment(eventData.getStartat()), moment(eventData.getEndat())],
						eventType: eventData.getType(),
						latitude: eventData.getLocation()?.getLat(),
						longitude: eventData.getLocation()?.getLong(),
						numAttendees: eventData.getNumattendees(),
						numSlots: eventData.getNumslots(),
						onlineLink: eventData.getOnlinelink(),
						title: eventData.getTitle(),
					});
					setLoading(false);
				} catch (error) {
					setLoading(false);
					console.error('Error fetching event data:', error);
				}
			}
		};

		fetchData();
	}, [isEditMode, eventId, form]);

	useEffect(() => {
		form.setFieldsValue({
			mediaUrls: mediaurls,
			webPreviews:webpreviews,
			tags: tags
		})
	  }, [mediaurls]);

	useEffect(() => {
		if (inputVisible) {
			inputRef.current?.focus();
		}
	}, [inputVisible]);

	useEffect(() => {
		editInputRef.current?.focus();
	}, [editInputValue]);

	const handleClose = (removedTag: string) => {
		const newTags = tags.filter((tag) => tag !== removedTag);
		setTags(newTags);
	};

	const showInput = () => {
		setInputVisible(true);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleInputConfirm = () => {
		if (inputValue && tags.indexOf(inputValue) === -1) {
			setTags([...tags, inputValue]);
		}
		setInputVisible(false);
		setInputValue('');
	};

	const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditInputValue(e.target.value);
	};

	const handleEditInputConfirm = () => {
		const newTags = [...tags];
		newTags[editInputIndex] = editInputValue;
		setTags(newTags);
		setEditInputIndex(-1);
		setEditInputValue('');
	};

	const tagInputStyle: React.CSSProperties = {
		height: 22,
		marginInlineEnd: 8,
		verticalAlign: 'top',
		width: 64
	};

	const tagPlusStyle: React.CSSProperties = {
		borderStyle: 'dashed',
		height: 22
	};
	const onSubmit = async (values: any) => {
		const mediaUrls = values.mediaUrls.map((mediaUrl: any) => ({
			mimeType: mediaUrl.mimeType,
			url: mediaUrl.url
		}));

		// Set the values for webPreviews
		const webPreviews = values.webPreviews.map((webPreview: any) => ({
			description: webPreview.description,
			previewImage: webPreview.previewimage,
			title: webPreview.title,
			url: webPreview.url
		}));
		await form.validateFields();
		const event: IEvent = {
			description: values.description,
			endAt: values.eventTime[1],
			location: {
				lat: values.latitude,
				long: values.longitude
			},
			mediaUrls: mediaUrls,
			numAttendees: values.numAttendees,
			numSlots: values.numSlots,
			onlineLink: values.onlineLink,
			startAt: values.eventTime[0],
			tags: tags,
			title: values.title,
			type: values.eventType,
			webPreviews: webPreviews
		};
		try {
			setLoading(true);
			clients.social.event.CreateEvent(event, {}, (err, response) => {
				if (err) {
					console.log('Before:-', err);
				} else {
					console.log(response);
					toast('Post created successfully.');
				}
				setLoading(false);
				form.resetFields();
			});
		} catch (error) {
			console.log('Catch:-', error);
			setLoading(false);
		}
	};
	return (
		<Form
			form={form}
			className="bg-white rounded-md shadow-md p-5"
			initialValues={{
				eventType: EventType.ONLINE
			}}
			onFinish={onSubmit}
			disabled={loading}
		>
			<Form.Item
				name="eventType"
				label="Event Type"
				rules={[
					{
						message: 'Event type is required.',
						required: true
					}
				]}
			>
				<Radio.Group disabled={loading} buttonStyle="solid">
					<Radio.Button value={EventType.ONLINE}>Online</Radio.Button>
					<Radio.Button value={EventType.OFFLINE}>Offline</Radio.Button>
				</Radio.Group>
			</Form.Item>
			<Form.Item
				name="eventTime"
				label="Event Dates"
				rules={[
					{
						message: 'Event dates is required.',
						required: true
					}
				]}
			>
				<RangePicker disabled={loading} showTime />
			</Form.Item>
			<Form.Item
				name="title"
				label="Event title"
				className="max-w-[493px]"
				rules={[
					{
						message: 'Event name is required.',
						required: true
					}
				]}
			>
				<Input disabled={loading} placeholder="eg. Agri" />
			</Form.Item>
			<Form.Item
				name="description"
				label="Event Description"
				className="max-w-[493px]"
				rules={[
					{
						message: 'Event description is required.',
						required: true
					}
				]}
			>
				<TextArea
					disabled={loading}
					placeholder="eg. All about organic farming"
				/>
			</Form.Item>
			<Form.Item
				name="onlineLink"
				label="Event Online Link"
				className="max-w-[493px]"
				rules={[
					{
						message: 'Event online link is required.',
						validator(rule, value, callback) {
							const otherFieldValue = form.getFieldValue('eventType');
							if (otherFieldValue === EventType.ONLINE && !value) {
								callback(rule?.message?.toString());
							} else {
								callback();
							}
						}
					}
				]}
			>
				<Input
					disabled={loading}
					placeholder="eg. https://meet.google.com/wwu-wdaj-znk"
				/>
			</Form.Item>

			<Form.Item
				name="latitude"
				label="Event location latitude"
				rules={[
					{
						message: 'Event location latitude is required.',
						validator(rule, value, callback) {
							const otherFieldValue = form.getFieldValue('eventType');
							if (otherFieldValue === EventType.OFFLINE && !value) {
								callback(rule?.message?.toString());
							} else {
								callback();
							}
						}
					}
				]}
			>
				<InputNumber disabled={loading} type="number" placeholder="Latitude" />
			</Form.Item>
			<Form.Item
				name="longitude"
				label="Event location longitude"
				rules={[
					{
						message: 'Event location longitude is required.',
						validator(rule, value, callback) {
							const otherFieldValue = form.getFieldValue('eventType');
							if (otherFieldValue === EventType.OFFLINE && !value) {
								callback(rule?.message?.toString());
							} else {
								callback();
							}
						}
					}
				]}
			>
				<InputNumber disabled={loading} type="number" placeholder="longitude" />
			</Form.Item>
			{/* Media URLs */}
			<div className="mb-4">
				<Form.List name="mediaUrls">
					{(fields, { add, remove }) => (
						<div className="space-y-2">
							{fields.map(({ key, name, ...restField }) => (
								<div key={key} className="flex items-center space-x-2">
									<Form.Item
										{...restField}
										name={[name, 'url']}
										rules={[{ message: 'Please input URL', required: true }]}
										className="flex-1"
									>
										<Input placeholder="URL" />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, 'mimetype']}
										rules={[{ message: 'Please input MIME type', required: true }]}
										className="flex-1"
									>
										<Input placeholder="MIME Type" />
									</Form.Item>
									<MinusCircleOutlined className="text-red-500" onClick={() => remove(name)} />
								</div>
							))}
							<Button type="dashed" onClick={() => add()} className="w-auto mt-2">
								<PlusOutlined /> Add Media URL
							</Button>
						</div>
					)}
				</Form.List>
			</div>

			{/* Web Previews */}

			<div className="mb-4">
				<Form.List name="webPreviews" initialValue={webpreviews}>
					{(fields, { add, remove }) => (
						<div className="space-y-2">
							{fields.map(({ key, name, ...restField }) => (
								<div key={key} className="flex flex-wrap items-center space-x-2">
									<Form.Item
										{...restField}
										name={[name, 'title']}
										rules={[{ message: 'Please input title', required: true }]}
										className="flex-1"
									>
										<Input placeholder="Title" />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, 'previewimage']}
										className="flex-1"
									>
										<Input placeholder="Preview Image URL" />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, 'url']}
										rules={[{ message: 'Please input URL', required: true }]}
										className="flex-1"
									>
										<Input placeholder="URL" />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, 'description']}
										className="flex-1"
									>
										<Input placeholder="Description" />
									</Form.Item>
									<MinusCircleOutlined className="text-red-500" onClick={() => remove(name)} />
								</div>
							))}
							<Button type="dashed" onClick={() => add()} className="w-auto mt-2">
								<PlusOutlined /> Add Web Preview
							</Button>
						</div>
					)}
				</Form.List>
			</div>
			{/* Num Attendees */}
			<Form.Item
				name="numAttendees"
				label="Number of Attendees"
				rules={[
					{
						message: 'Number of attendees is required.',
						required: true
					}
				]}
			>
				<InputNumber type="number" placeholder="attendees" />
			</Form.Item>

			{/* Num Slots */}
			<Form.Item
				name="numSlots"
				label="Number of Slots"
				rules={[
					{
						message: 'Number of slots is required.',
						required: true
					}
				]}
			>
				<InputNumber disabled={loading} type="number" placeholder="slots" />
			</Form.Item>
			<Form.Item name="tags" label="Tags" className="max-w-[493px]">
				<Space size={[0, 8]} wrap>
					{tags.map((tag, index) => {
						if (editInputIndex === index) {
							return (
								<Input
									disabled={loading}
									ref={editInputRef}
									key={tag}
									size="small"
									style={tagInputStyle}
									value={editInputValue}
									onChange={handleEditInputChange}
									onBlur={handleEditInputConfirm}
									onPressEnter={handleEditInputConfirm}
								/>
							);
						}
						const isLongTag = tag.length > 20;
						const tagElem = (
							<Tag
								key={tag}
								closable={!loading}
								style={{ userSelect: 'none' }}
								onClose={() => handleClose(tag)}
							>
								<span
									onDoubleClick={(e) => {
										if (index !== 0) {
											setEditInputIndex(index);
											setEditInputValue(tag);
											e.preventDefault();
										}
									}}
								>
									{isLongTag ? `${tag.slice(0, 20)}...` : tag}
								</span>
							</Tag>
						);
						return isLongTag ? (
							<Tooltip title={tag} key={tag}>
								{tagElem}
							</Tooltip>
						) : (
							tagElem
						);
					})}
					{inputVisible ? (
						<Input
							disabled={loading}
							ref={inputRef}
							type="text"
							size="small"
							style={tagInputStyle}
							value={inputValue}
							onChange={handleInputChange}
							onBlur={handleInputConfirm}
							onPressEnter={handleInputConfirm}
						/>
					) : (
						<Tag style={tagPlusStyle} onClick={showInput}>
							<PlusOutlined /> New Tag
						</Tag>
					)}
				</Space>
			</Form.Item>
			<Form.Item>
				<Button disabled={loading} htmlType="submit">
					{isEditMode ? 'Save' : 'Create'}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Events;

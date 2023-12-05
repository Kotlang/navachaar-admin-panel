// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, InputNumber, InputRef, Radio, Space, Tag, Tooltip } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import clients from 'src/clients';
import { EventType } from 'src/generated/events_pb';
import { IEvent } from 'src/types';
import { EventProto } from 'src/types/index';

import { mockEvents } from './mockdb';

const { RangePicker } = DatePicker;

const Events = () => {
	const [tags, setTags] = useState<string[]>([]);
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

	const fetchEventById = async (eventId: string): Promise<EventProto | undefined> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const event = mockEvents.find(event => event.eventId === eventId);
				resolve(event);
			}, 1000);
		});
	};
	if (isEditMode) {
		fetchEventById(eventId).then((eventData) => {
			if (eventData) {
				form.setFieldsValue({
					description: eventData.description,
					eventTime: [
						moment(eventData.endAt),
						moment(eventData.startAt)
					],
					eventType: eventData.type,
					latitude: eventData.location.lat,
					longitude: eventData.location.long,
					mediaUrls: eventData.mediaUrls.map(urlObj => urlObj.url).join(', '),
					name: eventData.title,
					numAttendees: eventData.numAttendees,
					numSlots: eventData.numSlots,
					onlineLink: eventData.onlineLink,
					webPreviews: eventData.webPreviews.map(preview => preview.url).join(', ')
				});
				setTags(eventData.tags);
			}
		});
	}

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
		await form.validateFields();
		const event: IEvent = {
			description: values.description,
			endAt: values.eventTime[1],
			location: {
				lat: values.latitude,
				long: values.longitude
			},
			numAttendees: values.numAttendees,
			numSlots: values.numSlots,
			onlineLink: values.onlineLink,
			startAt: values.eventTime[0],
			tags: tags,
			title: values.title,
			type: values.eventType
		};
		try {
			setLoading(true);
			clients.social.event.CreateEvent(event, {}, (err) => {
				if (err) {
					console.log('Before:-', err);
				} else {
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
			className='bg-white rounded-md shadow-md p-5'
			initialValues={{
				eventType: EventType.ONLINE
			}}
			onFinish={onSubmit}
			disabled={loading}
		>
			<Form.Item
				name='eventType'
				label='Event Type'
				rules={
					[
						{
							message: 'Event type is required.',
							required: true
						}
					]
				}
			>
				<Radio.Group
					disabled={loading} buttonStyle="solid">
					<Radio.Button value={EventType.ONLINE}>Online</Radio.Button>
					<Radio.Button value={EventType.OFFLINE}>Offline</Radio.Button>
				</Radio.Group>
			</Form.Item>
			<Form.Item
				name="eventTime"
				label='Event Dates'
				rules={
					[
						{
							message: 'Event dates is required.',
							required: true
						}
					]
				}
			>
				<RangePicker disabled={loading} showTime />
			</Form.Item>
			<Form.Item
				name="name"
				label='Event Name'
				className='max-w-[493px]'
				rules={
					[
						{
							message: 'Event name is required.',
							required: true
						}
					]
				}
			>
				<Input
					disabled={loading}
					placeholder='eg. Agri'
				/>
			</Form.Item>
			<Form.Item
				name="description"
				label='Event Description'
				className='max-w-[493px]'
				rules={
					[
						{
							message: 'Event description is required.',
							required: true
						}
					]
				}
			>
				<TextArea
					disabled={loading}
					placeholder='eg. All about organic farming'
				/>
			</Form.Item>
			<Form.Item
				name="onlineLink"
				label='Event Online Link'
				className='max-w-[493px]'
				rules={
					[
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
					]
				}
			>
				<Input
					disabled={loading}
					placeholder='eg. https://meet.google.com/wwu-wdaj-znk'
				/>
			</Form.Item>

			<Form.Item
				name="latitude"
				label='Event location latitude'
				rules={
					[
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
					]
				}
			>
				<InputNumber
					disabled={loading}
					type='number'
					placeholder='Latitude'
				/>
			</Form.Item>
			<Form.Item
				name="longitude"
				label='Event location longitude'
				rules={
					[
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
					]
				}
			>
				<InputNumber
					disabled={loading}
					type='number'
					placeholder='longitude'
				/>
			</Form.Item>
			{/* Media URLs */}
			<Form.Item
				name='mediaUrls'
				label='Media URLs'
				className='max-w-[493px]'
				rules={[
					{
						message: 'Media URLs are required.',
						required: true
					}
				]}
			>
				<Input
					disabled={loading}
					placeholder='Enter media URLs, separated by commas'
				/>
			</Form.Item>

			{/* Web Previews */}
			<Form.Item
				name='webPreviews'
				label='Web Previews'
				className='max-w-[493px]'
				rules={[
					{
						message: 'Web Previews are required.',
						required: true
					}
				]}
			>
				<Input
					disabled={loading}
					placeholder='Enter web previews, separated by commas'
				/>
			</Form.Item>

			{/* Num Attendees */}
			<Form.Item
				name='numAttendees'
				label='Number of Attendees'
				rules={[
					{
						message: 'Number of attendees is required.',
						required: true
					}
				]}
			>
				<InputNumber
					type='number'
					placeholder='attendees'
				/>
			</Form.Item>

			{/* Num Slots */}
			<Form.Item
				name='numSlots'
				label='Number of Slots'
				rules={[
					{
						message: 'Number of slots is required.',
						required: true
					}
				]}
			>
				<InputNumber
					disabled={loading}
					type='number'
					placeholder='slots'
				/>
			</Form.Item>
			<Form.Item
				name="tags"
				label='Tags'
				className='max-w-[493px]'
			>
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
				<Button
					disabled={loading}
					htmlType='submit'
				>
					{isEditMode ? 'Save' : 'Create'}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Events;
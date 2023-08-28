// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, InputNumber, InputRef, Radio, Select, Space, Tag, Tooltip } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import clients from 'src/clients';
import { PostType } from 'src/generated/social_pb';
import { IUserPost } from 'src/types';

export enum EventType {
	ONLINE = 0,
	OFFLINE = 1,
}

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
		const userPost: IUserPost = {
			post: values.post,
			postType: values.postType,
			socialEventMetadata: {
				description: values.description,
				endAt: values.eventTime[1],
				location: {
					lat: values.latitude,
					long: values.longitude
				},
				name: values.name,
				onlineLink: values.onlinelink,
				startAt: values.eventTime[0],
				type: values.eventType
			},
			tags: tags,
			title: values.title
		};
		try {
			setLoading(true);
			clients.social.userPost.CreatePost(userPost, {}, (err) => {
				console.log('Before:-', err);
				setLoading(false);
				form.resetFields();
				toast('Post created successfully.');
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
				eventType: EventType.ONLINE,
				postType: PostType.SOCIAL_EVENT
			}}
			onFinish={onSubmit}
			disabled={loading}
		>
			<Form.Item
				name='postType'
				label='Post Type'
				rules={
					[
						{
							message: 'Post type is required.',
							required: true
						}
					]
				}
			>
				<Select
					disabled={loading}
					style={{ width: 200 }}
					options={Object.entries(PostType).map(([key, value]) => {
						return {
							label: key,
							value: value
						};
					})}
				/>
			</Form.Item>
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
				name="title"
				label='Normal post title'
				className='max-w-[493px]'
				rules={
					[
						{
							message: 'Post title is required.',
							required: true
						}
					]
				}
			>
				<Input
					disabled={loading}
					placeholder='eg. farmer hub'
				/>
			</Form.Item>
			<Form.Item
				name="post"
				label='Normal post Description'
				className='max-w-[493px]'
				rules={
					[
						{
							message: 'Post description is required.',
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
			<Form.Item
				name="onlineLink"
				label='Event Online Link'
				className='max-w-[493px]'
				rules={
					[
						{
							message: 'Event online link is required.',
							validator(rule, value, callback){
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
							validator(rule, value, callback){
								const otherFieldValue = form.getFieldValue('eventType');
								if (otherFieldValue === EventType.OFFLINE) {
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
							validator(rule, value, callback){
								const otherFieldValue = form.getFieldValue('eventType');
								if (otherFieldValue === EventType.OFFLINE) {
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

			<Form.Item>
				<Button
					disabled={loading}
					htmlType='submit'
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Events;
/* eslint-disable */
// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect,useState } from 'react';
import userPostClient from 'src/clients/social/content';
import { FeedFilters } from 'src/generated/social_pb';
import { IGetFeedRequest  } from 'src/types';

const Posts: React.FC = () => {
	// const [posts, setPosts] = useState<UserPostProto[]>([]);
	// const [selectedPost, setSelectedPost] = useState<string | null>(null);
	// const [comments, setComments] = useState<string[]>([]);

	// // Fetch posts when the component mounts
	// useEffect(() => {
	// 	const fetchPosts = async () => {
	// 		try {
	// 			const feedRequest :IGetFeedRequest = {
	// 				referencePost: '',
	// 				pageSize: 10,
	// 				pageNumber: 1
	// 			};
	// 			const response: FeedResponse = await userPostClient.FeedContent(feedRequest, {}, (err, reponse) => {

	// 			});
	// 			setPosts(response.posts);
	// 		} catch (error) {
	// 			console.error('Error fetching posts:', error);
	// 		}
	// 	};

	// 	fetchPosts();
	// }, []);

	// Fetch comments for the selected post
	// useEffect(() => {
	// 	const fetchComments = async (postId: string) => {
	// 		try {
	// 			// Use your existing function to fetch comments by postId
	// 			const commentsResponse = await fetchCommentsFunction(postId); // Replace with your actual function
	// 			setComments(commentsResponse);
	// 		} catch (error) {
	// 			console.error('Error fetching comments:', error);
	// 		}
	// 	};

	// 	if (selectedPost) {
	// 		fetchComments(selectedPost);
	// 	}
	// }, [selectedPost]);

	return (
		// <div className="container mx-auto mt-4">
		// 	<h1 className="text-3xl font-semibold mb-4">Posts</h1>
		// 	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		// 		{posts.map((post) => (
		// 			<div
		// 				key={post.postId}
		// 				className={`p-4 border rounded-lg cursor-pointer hover:bg-gray-100 ${
		// 					selectedPost === post.postId ? 'bg-gray-100' : ''
		// 				}`}
		// 				onClick={() => setSelectedPost(post.postId)}
		// 			>
		// 				<h2 className="text-xl font-semibold">{post.title}</h2>
		// 				<p className="text-gray-500">
        //       Replies: {post.numReplies} | Shares: {post.numShares} | Reactions: {post.numReacts.length}
		// 				</p>
		// 			</div>
		// 		))}
		// 	</div>

		// 	{selectedPost && (
		// 		<div className="mt-8">
		// 			<h2 className="text-2xl font-semibold mb-4">Comments</h2>
		// 			<div className="space-y-4">
		// 				{comments.map((comment, index) => (
		// 					<div key={index} className="border rounded-lg p-4">
		// 						<p>{comment}</p>
		// 					</div>
		// 				))}
		// 			</div>
		// 		</div>
		// 	)}
		// </div>
		<div>hello</div>
	);
};

export default Posts;

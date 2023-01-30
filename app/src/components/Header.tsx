import React from "react"
import dayjs from "../helpers/dayjs"
import styles from "../styles/Header.module.css"
import { Back, Call, VideoCall } from "./Icons"

const ReceiverPicture = ({ src }: any) => {
	return (
		<span className={styles.receiverPic}>
			<img src={src} />
		</span>
	)
}

export default ({ receiver }: any) => {
	const handleBack = () => {
		console.info('closing tab...')
	}

	const handleCall = () => {
		console.info('starting a call...')
	}

	const handleVideoCall = () => {
		console.info('starting a video call...')
	}

	return (
		<header className={styles.headerChat}>
			<Back onClick={handleBack} />
			<ReceiverPicture src="/assets/3972387.webp" />
			<section className={styles.receiverNames}>
				<h3>{receiver.name} {receiver.lastName}</h3>
				<p>{receiver.lastConnection ? dayjs(receiver.lastConnection).fromNow() : 'online'}</p>
			</section>
			<section className={styles.callButtons}>
				<Call onClick={handleCall} />
				<VideoCall onClick={handleVideoCall} />
			</section>
		</header>
	)
}
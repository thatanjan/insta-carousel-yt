import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CommentIcon from '@material-ui/icons/Comment'

import SwiperCore, {
	Keyboard,
	Scrollbar,
	Pagination,
	Navigation,
} from 'swiper/core'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'

import avatarImage from './media/postAvatar.jpg'
import ts_1 from './media/carousels/ts_1.jpg'
import ts_2 from './media/carousels/ts_2.jpg'
import ts_3 from './media/carousels/ts_3.jpg'
import ts_4 from './media/carousels/ts_4.jpg'
import ts_5 from './media/carousels/ts_5.jpg'

const useStyles = makeStyles({
	media: {
		height: 0,
		paddingTop: '100%',
	},
	swiperContainer: {
		paddingBottom: '3rem',
		'& .swiper-pagination-bullet': {
			background: 'blue',
		},
		'& .swiper-button-next:after': {
			fontSize: '2rem !important',
		},
		'& .swiper-button-prev:after': {
			fontSize: '2rem !important',
		},
	},
})

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation])

const images = [ts_1, ts_2, ts_3, ts_4, ts_5]

const PostCard = () => {
	const { media, swiperContainer } = useStyles()
	return (
		<Card>
			<CardHeader
				avatar={<Avatar src={avatarImage} />}
				title='Just a Carousel'
				subheader={new Date().toDateString()}
				action={
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				}
			/>

			<Swiper
				grabCursor
				keyboard={{ enabled: true }}
				pagination={{ clickable: true }}
				navigation
				loop
				className={swiperContainer}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<CardMedia className={media} image={image} />
					</SwiperSlide>
				))}
			</Swiper>

			<CardActions disableSpacing>
				<IconButton>
					<FavoriteIcon />
				</IconButton>
				<IconButton>
					<CommentIcon />
				</IconButton>
				<IconButton>
					<ShareIcon />
				</IconButton>
			</CardActions>

			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					Adipisicing eaque temporibus elit incidunt obcaecati. Aut eum excepturi id
					aut consequatur ex? Incidunt debitis at consequuntur accusamus rerum
					Tempora veritatis maiores quam molestias aut placeat qui. Iure neque libero
					voluptas aliquid!
				</Typography>
			</CardContent>
		</Card>
	)
}

export default PostCard
